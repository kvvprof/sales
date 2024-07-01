import { NextFunction, Request, Response } from 'express';

import { inject, injectable } from 'inversify';

import { BasicUser } from '@/__types__/graphql';
import { IMiddleware } from '@/common/middleware.interface';
import { IConfigService } from '@/config/config.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { NOT_AUTHORIZED } from '@/services/auth/auth.constants';
import { ITokenService } from '@/services/token/token.service.interface';
import { TYPES } from '@/types';

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
				const extractedToken = req.cookies['token'];
				await this.tokenService.verifyToken<{ data: BasicUser }>(
					extractedToken,
				);
			}
			next();
		} catch (error) {
			this.loggerService.error(error);
			res.status(401).json({ error: NOT_AUTHORIZED });
		}
	}
}
