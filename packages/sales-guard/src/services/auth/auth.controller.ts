import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import { BasicUser, UserRole } from '@/__types__/graphql';
import { BaseController } from '@/common/base.controller';
import { IConfigService } from '@/config/config.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { SUCCESSFUL_SIGN_OUT } from '@/services/auth/auth.constants';
import { IAuthController } from '@/services/auth/auth.controller.interface';
import { IAuthService } from '@/services/auth/auth.service.interface';
import { ICookieService } from '@/services/cookie/cookie.service.interface';
import { ITokenService } from '@/services/token/token.service.interface';
import { TYPES } from '@/types';

@injectable()
export class AuthController extends BaseController implements IAuthController {
	constructor(
		@inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
		@inject(TYPES.TokenService) private readonly tokenService: ITokenService,
		@inject(TYPES.CookieService) private readonly cookieService: ICookieService,
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.AuthService) private readonly authService: IAuthService,
	) {
		super();

		this.bindRoutes([
			{
				path: '/sign-in',
				method: 'get',
				func: this.signIn,
			},
			{
				path: '/refresh',
				method: 'get',
				func: this.refresh,
			},
			{
				path: '/sign-out',
				method: 'get',
				func: this.signOut,
			},
		]);
	}

	public async signIn(req: Request, res: Response) {
		try {
			const { token, data } = await this.authService.signIn(req);
			this.cookieService.setCookie(res, token);
			this.ok(res, { ...data.data.createUser });
		} catch (error) {
			this.loggerService.error(error);
			this.unauthorized(res);
		}
	}

	public async refresh(req: Request, res: Response) {
		try {
			if (this.configService.get('ENV') === 'DEVELOPMENT') {
				this.ok(res, {
					id: 0,
					full_name: 'Иванов Иван Иванович',
					email: 'ivanov@gmail.com',
					phone: '79876543210',
					is_manager: true,
					user_role: UserRole.Administrator,
				});
				return;
			}
			const extractedToken = this.tokenService.extractTokenFromCookie(req);
			const { data } = await this.tokenService.verifyToken<{ data: BasicUser }>(
				extractedToken,
			);
			this.ok(res, { ...data });
		} catch (error) {
			this.loggerService.error(error);
			this.unauthorized(res);
		}
	}

	public async signOut(req: Request, res: Response) {
		try {
			if (this.configService.get('ENV') === 'DEVELOPMENT') {
				this.ok(res, 'OK');
				return;
			}
			const extractedToken = this.tokenService.extractTokenFromCookie(req);
			await this.tokenService.verifyToken<{ data: BasicUser }>(extractedToken);
			this.cookieService.deleteCookie(res);
			this.ok(res, SUCCESSFUL_SIGN_OUT);
		} catch (error) {
			this.loggerService.error(error);
			this.unauthorized(res);
		}
	}
}
