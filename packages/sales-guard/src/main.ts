import { Container, ContainerModule, interfaces } from 'inversify';

import { App } from '@/app';
import { IMiddleware } from '@/common/middleware.interface';
import { IStrategy } from '@/common/strategy.interface';
import { ConfigService } from '@/config/config.service';
import { IConfigService } from '@/config/config.service.interface';
import { LoggerService } from '@/logger/logger.service';
import { ILoggerService } from '@/logger/logger.service.interface';
import { AuthController } from '@/services/auth/auth.controller';
import { IAuthController } from '@/services/auth/auth.controller.interface';
import { AuthMiddleware } from '@/services/auth/auth.middleware';
import { AuthService } from '@/services/auth/auth.service';
import { IAuthService } from '@/services/auth/auth.service.interface';
import { CookieService } from '@/services/cookie/cookie.service';
import { ICookieService } from '@/services/cookie/cookie.service.interface';
import { TokenService } from '@/services/token/token.service';
import { ITokenService } from '@/services/token/token.service.interface';
import { NextCloudService } from '@/strategies/next-cloud/next-cloud.service';
import { INextCloudService } from '@/strategies/next-cloud/next-cloud.service.interface';
import { NextCloudStrategy } from '@/strategies/next-cloud/next-cloud.strategy';
import { TYPES } from '@/types';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.App).to(App);

	bind<IConfigService>(TYPES.ConfigService)
		.to(ConfigService)
		.inSingletonScope();
	bind<ILoggerService>(TYPES.LoggerService)
		.to(LoggerService)
		.inSingletonScope();

	bind<IStrategy>(TYPES.NextCloudStrategy).to(NextCloudStrategy);
	bind<INextCloudService>(TYPES.NextCloudService).to(NextCloudService);

	bind<ITokenService>(TYPES.TokenService).to(TokenService);
	bind<ICookieService>(TYPES.CookieService).to(CookieService);

	bind<IAuthService>(TYPES.AuthService).to(AuthService);
	bind<IAuthController>(TYPES.AuthController).to(AuthController);
	bind<IMiddleware>(TYPES.AuthMiddleware).to(AuthMiddleware);
});

const bootstrap = async () => {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.App);
	await app.init();
	return { appContainer, app };
};

export const boot = bootstrap();
