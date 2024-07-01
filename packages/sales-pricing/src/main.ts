import 'reflect-metadata';
import { Container, ContainerModule, interfaces } from 'inversify';

import { App } from '@/app';
import { BaseSchema } from '@/common/base.schema';
import { ISchema } from '@/common/schema.interface';
import { ConfigService } from '@/config/config.service';
import { IConfigService } from '@/config/config.service.interface';
import { DatabaseService } from '@/database/database.service';
import { IDatabaseService } from '@/database/database.service.interface';
import { LoggerService } from '@/logger/logger.service';
import { ILoggerService } from '@/logger/logger.service.interface';
import { ProductRepository } from '@/schemas/product/product.repository';
import { IProductRepository } from '@/schemas/product/product.repository.interface';
import { ProductSchema } from '@/schemas/product/product.schema';
import { ProductService } from '@/schemas/product/product.service';
import { IProductService } from '@/schemas/product/product.service.interface';
import { TYPES } from '@/types';

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
	bind<App>(TYPES.App).to(App);

	bind<IDatabaseService>(TYPES.DatabaseService)
		.to(DatabaseService)
		.inSingletonScope();
	bind<IConfigService>(TYPES.ConfigService)
		.to(ConfigService)
		.inSingletonScope();
	bind<ILoggerService>(TYPES.LoggerService)
		.to(LoggerService)
		.inSingletonScope();

	bind<ISchema>(TYPES.BaseSchema).to(BaseSchema);

	bind<IProductRepository>(TYPES.ProductRepository).to(ProductRepository);
	bind<IProductService>(TYPES.ProductService).to(ProductService);
	bind<ISchema>(TYPES.ProductSchema).to(ProductSchema);
});

const bootstrap = async () => {
	const appContainer = new Container();
	appContainer.load(appBindings);
	const app = appContainer.get<App>(TYPES.App);
	await app.init();
	return { appContainer, app };
};

export const boot = bootstrap();
