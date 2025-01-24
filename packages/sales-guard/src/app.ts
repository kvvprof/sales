import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import expressHttpProxy from 'express-http-proxy';
import helmet from 'helmet';
import { inject, injectable } from 'inversify';
import passport from 'passport';
import 'reflect-metadata';

import { BasicUser } from '@/__types__/graphql';
import {
  getRequestInfo,
  IConfigService,
  ILoggerService,
  IStrategy,
  TYPES,
  UNAUTHORIZED,
  USER_MOCK,
} from '@/common';
import { AuthController } from '@/modules/auth/controller/auth.controller';
import { EscrowController } from '@/modules/escrow/controller/escrow.controller';
import { INextCloudService } from '@/modules/next-cloud/service/next-cloud.service.interface';
import { PrintoutController } from '@/modules/printout/controller/printout.controller';
import { TokenService } from '@/modules/token/service/token.service';

@injectable()
export class App {
  private readonly app: express.Application;
  private readonly port: number;

  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
    @inject(TYPES.AuthController)
    private readonly authController: AuthController,
    @inject(TYPES.NextCloudService)
    private readonly nextCloudService: INextCloudService,
    @inject(TYPES.NextCloudStrategy)
    private readonly nextCloudStrategy: IStrategy,
    @inject(TYPES.TokenService)
    private readonly tokenService: TokenService,
    @inject(TYPES.EscrowController)
    private readonly escrowController: EscrowController,
    @inject(TYPES.PrintoutController)
    private readonly printoutController: PrintoutController,
  ) {
    this.app = express();
    this.port = parseInt(this.configService.get('PORT'), 10);
  }

  private useMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(cookieParser());
    this.app.use(passport.initialize());
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  }

  private useStrategies() {
    this.nextCloudStrategy.init();
  }

  private useRoutes() {
    this.app.use('/sales-guard', this.authController.router);

    this.app.use('/sales-guard/escrow', this.escrowController.router);

    this.app.use('/sales-guard/printout', this.printoutController.router);

    this.app.get(
      '/sales-guard/nextcloud/sign-in',
      passport.authenticate('oauth2', { session: false }),
    );

    this.app.get(
      '/sales-guard/nextcloud/callback',
      passport.authenticate('oauth2', {
        failureRedirect: '/sign-in',
        session: false,
      }),
      async (req: Request, res: Response) => {
        this.nextCloudService.callback(req, res);
      },
    );

    this.app.use(
      '/sales-guard/sales-gateway',
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          if (this.configService.get('ENV') === 'PRODUCTION') {
            const extractedToken = req.cookies['token'];

            const { data } = await this.tokenService.verifyToken<{
              data: BasicUser;
            }>(extractedToken);

            req.headers['user'] = encodeURIComponent(JSON.stringify(data));
          } else {
            req.headers['user'] = encodeURIComponent(JSON.stringify(USER_MOCK));
          }

          return next();
        } catch (error) {
          this.loggerService.error(error, getRequestInfo(req));
          return res.status(401).send(UNAUTHORIZED);
        }
      },
      expressHttpProxy(this.configService.get('SALES_GATEWAY_DOMAIN'), {
        proxyReqPathResolver: () => '/sales-gateway',
      }),
    );
  }

  public async init() {
    try {
      this.useMiddlewares();
      this.useStrategies();
      this.useRoutes();
      this.app.listen(this.port, () => {
        this.loggerService.info(`Server is running on port ${this.port}.`);
      });
    } catch (error) {
      this.loggerService.error(error);
    }
  }
}
