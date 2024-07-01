import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response, json } from 'express';
import expressHttpProxy from 'express-http-proxy';
import helmet from 'helmet';
import { inject, injectable } from 'inversify';
import passport from 'passport';
import 'reflect-metadata';

import { IStrategy } from '@/common/strategy.interface';
import { IConfigService } from '@/config/config.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { AuthController } from '@/services/auth/auth.controller';
import { AuthMiddleware } from '@/services/auth/auth.middleware';
import { INextCloudService } from '@/strategies/next-cloud/next-cloud.service.interface';
import { TYPES } from '@/types';

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
		@inject(TYPES.AuthMiddleware)
		private readonly authMiddleware: AuthMiddleware,
	) {
		this.app = express();
		this.port = parseInt(this.configService.get('PORT'), 10);
	}

	private useMiddlewares() {
		this.app.use(helmet());
		this.app.use(cors());
		this.app.use(json());
		this.app.use(cookieParser());
		this.app.use(passport.initialize());
	}

	private useStrategies() {
		this.nextCloudStrategy.init();
	}

	private useRoutes() {
		this.app.use('/sales-guard', this.authController.router);

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
				this.authMiddleware.execute(req, res, next);
			},
			expressHttpProxy(this.configService.get('SALES_GATEWAY_URL'), {
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
				this.loggerService.info(`Guard is running on port ${this.port}`);
			});
		} catch (error) {
			this.loggerService.error(error);
		}
	}
}
