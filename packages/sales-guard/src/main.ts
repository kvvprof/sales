import { Container, ContainerModule, interfaces } from 'inversify';

import { App } from '@/app';
import {
  AuthMiddleware,
  ConfigService,
  FormDataMiddleware,
  IConfigService,
  ILoggerService,
  IMiddleware,
  IStrategy,
  LoggerService,
  TYPES,
} from '@/common';
import { AuthController } from '@/modules/auth/controller/auth.controller';
import { IAuthController } from '@/modules/auth/controller/auth.controller.interface';
import { AuthService } from '@/modules/auth/service/auth.service';
import { IAuthService } from '@/modules/auth/service/auth.service.interface';
import { CookieService } from '@/modules/cookie/service/cookie.service';
import { ICookieService } from '@/modules/cookie/service/cookie.service.interface';
import { EscrowController } from '@/modules/escrow/controller/escrow.controller';
import { IEscrowController } from '@/modules/escrow/controller/escrow.controller.interface';
import { NextCloudService } from '@/modules/next-cloud/service/next-cloud.service';
import { INextCloudService } from '@/modules/next-cloud/service/next-cloud.service.interface';
import { NextCloudStrategy } from '@/modules/next-cloud/strategy/next-cloud.strategy';
import { PrintoutController } from '@/modules/printout/controller/printout.controller';
import { IPrintoutController } from '@/modules/printout/controller/printout.controller.interface';
import { TokenService } from '@/modules/token/service/token.service';
import { ITokenService } from '@/modules/token/service/token.service.interface';

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
  bind<IMiddleware>(TYPES.FormDataMiddleware).to(FormDataMiddleware);
  bind<IEscrowController>(TYPES.EscrowController).to(EscrowController);
  bind<IPrintoutController>(TYPES.PrintoutController).to(PrintoutController);
});

const bootstrap = async () => {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<App>(TYPES.App);
  await app.init();
  return { appContainer, app };
};

export const boot = bootstrap();
