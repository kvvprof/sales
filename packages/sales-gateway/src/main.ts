import 'reflect-metadata';
import { Container, ContainerModule, interfaces } from 'inversify';

import { App } from '@/app';
import { ConfigService } from '@/config/config.service';
import { IConfigService } from '@/config/config.service.interface';
import { LoggerService } from '@/logger/logger.service';
import { ILoggerService } from '@/logger/logger.service.interface';
import { TYPES } from '@/types';

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
