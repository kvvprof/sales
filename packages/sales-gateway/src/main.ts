import 'reflect-metadata';
import { Container, ContainerModule, interfaces } from 'inversify';

import { App } from '@/app';
import {
  ConfigService,
  IConfigService,
  TYPES,
  LoggerService,
  ILoggerService,
} from '@/common';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
  bind<App>(TYPES.App).to(App);
  bind<IConfigService>(TYPES.ConfigService)
    .to(ConfigService)
    .inSingletonScope();
  bind<ILoggerService>(TYPES.LoggerService)
    .to(LoggerService)
    .inSingletonScope();
});

const bootstrap = async () => {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<App>(TYPES.App);
  await app.init();
  return { appContainer, app };
};

export const boot = bootstrap();
