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
import { IDatabaseService, DatabaseService } from '@/integrations';
import { ContractorRepository } from '@/modules/contractor/repository/contractor.repository';
import { IContractorRepository } from '@/modules/contractor/repository/contractor.repository.interface';
import { ContractorSchema } from '@/modules/contractor/schema/contractor.schema';
import { ContractorService } from '@/modules/contractor/service/contractor.service';
import { IContractorService } from '@/modules/contractor/service/contractor.service.interface';
import { EntityRepository } from '@/modules/entity/repository/entity.repository';
import { IEntityRepository } from '@/modules/entity/repository/entity.repository.interface';
import { EntitySchema } from '@/modules/entity/schema/entity.schema';
import { EntityService } from '@/modules/entity/service/entity.service';
import { IEntityService } from '@/modules/entity/service/entity.service.interface';

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
  bind<IContractorRepository>(TYPES.ContractorRepository).to(
    ContractorRepository,
  );
  bind<IContractorService>(TYPES.ContractorService).to(ContractorService);
  bind<ISchema>(TYPES.ContractorSchema).to(ContractorSchema);
  bind<IEntityRepository>(TYPES.EntityRepository).to(EntityRepository);
  bind<IEntityService>(TYPES.EntityService).to(EntityService);
  bind<ISchema>(TYPES.EntitySchema).to(EntitySchema);
});

const bootstrap = async () => {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<App>(TYPES.App);
  await app.init();
  return { appContainer, app };
};

export const boot = bootstrap();
