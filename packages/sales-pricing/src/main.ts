import { Container, ContainerModule, interfaces } from 'inversify';
import 'reflect-metadata';

import { App } from '@/app';
import {
  ConfigService,
  IConfigService,
  TYPES,
  LoggerService,
  ILoggerService,
  BaseSchema,
  ISchema,
} from '@/common';
import { DatabaseService, IDatabaseService } from '@/integrations';
import { ProductRepository } from '@/modules/product/repository/product.repository';
import { IProductRepository } from '@/modules/product/repository/product.repository.interface';
import { ProductSchema } from '@/modules/product/schema/product.schema';
import { ProductService } from '@/modules/product/service/product.service';
import { IProductService } from '@/modules/product/service/product.service.interface';

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
