import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { BasicUser } from '@/__types__/graphql';
import {
  getRequestInfo,
  IConfigService,
  ILoggerService,
  IMiddleware,
  TYPES,
  UNAUTHORIZED,
} from '@/common';
import { ITokenService } from '@/modules/token/service/token.service.interface';

@injectable()
export class AuthMiddleware implements IMiddleware {
  constructor(
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
    @inject(TYPES.TokenService) private readonly tokenService: ITokenService,
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
  ) {}

  public async execute(req: Request, res: Response, next: NextFunction) {
    try {
      if (this.configService.get('ENV') === 'PRODUCTION') {
        const extractedToken = this.tokenService.extractTokenFromCookie(req);

        const { data } = await this.tokenService.verifyToken<{
          data: BasicUser;
        }>(extractedToken);

        req.user = data;
      }

      next();
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      res.status(401).send(UNAUTHORIZED);
    }
  }
}
