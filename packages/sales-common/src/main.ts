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
import { ContractorRepository } from '@/schemas/contractor/contractor.repository';
import { IContractorRepository } from '@/schemas/contractor/contractor.repository.interface';
import { ContractorSchema } from '@/schemas/contractor/contractor.schema';
import { ContractorService } from '@/schemas/contractor/contractor.service';
import { IContractorService } from '@/schemas/contractor/contractor.service.interface';
import { EntityRepository } from '@/schemas/entity/entity.repository';
import { IEntityRepository } from '@/schemas/entity/entity.repository.interface';
import { EntitySchema } from '@/schemas/entity/entity.schema';
import { EntityService } from '@/schemas/entity/entity.service';
import { IEntityService } from '@/schemas/entity/entity.service.interface';
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
