import 'reflect-metadata';
import { Container, ContainerModule, interfaces } from 'inversify';

import { App } from '@/app';
import { BrokerService } from '@/broker/broker.service';
import { IBrokerService } from '@/broker/broker.service.interface';
import { BaseSchema } from '@/common/base.schema';
import { ISchema } from '@/common/schema.interface';
import { ConfigService } from '@/config/config.service';
import { IConfigService } from '@/config/config.service.interface';
import { DatabaseService } from '@/database/database.service';
import { IDatabaseService } from '@/database/database.service.interface';
import { LoggerService } from '@/logger/logger.service';
import { ILoggerService } from '@/logger/logger.service.interface';
import { ActualPaymentRepository } from '@/schemas/actual-payment/actual-payment.repository';
import { IActualPaymentRepository } from '@/schemas/actual-payment/actual-payment.repository.interface';
import { ActualPaymentSchema } from '@/schemas/actual-payment/actual-payment.schema';
import { ActualPaymentService } from '@/schemas/actual-payment/actual-payment.service';
import { IActualPaymentService } from '@/schemas/actual-payment/actual-payment.service.interface';
import { AgencyRepository } from '@/schemas/agency/agency.repository';
import { IAgencyRepository } from '@/schemas/agency/agency.repository.interface';
import { AgencySchema } from '@/schemas/agency/agency.schema';
import { AgencyService } from '@/schemas/agency/agency.service';
import { IAgencyService } from '@/schemas/agency/agency.service.interface';
import { AgencyContractRepository } from '@/schemas/agency-contract/agency-contract.repository';
import { IAgencyContractRepository } from '@/schemas/agency-contract/agency-contract.repository.interface';
import { AgencyContractSchema } from '@/schemas/agency-contract/agency-contract.schema';
import { AgencyContractService } from '@/schemas/agency-contract/agency-contract.service';
import { IAgencyContractService } from '@/schemas/agency-contract/agency-contract.service.interface';
import { BankRepository } from '@/schemas/bank/bank.repository';
import { IBankRepository } from '@/schemas/bank/bank.repository.interface';
import { BankSchema } from '@/schemas/bank/bank.schema';
import { BankService } from '@/schemas/bank/bank.service';
import { IBankService } from '@/schemas/bank/bank.service.interface';
import { ClientRepository } from '@/schemas/client/client.repository';
import { IClientRepository } from '@/schemas/client/client.repository.interface';
import { ClientSchema } from '@/schemas/client/client.schema';
import { ClientService } from '@/schemas/client/client.service';
import { IClientService } from '@/schemas/client/client.service.interface';
import { ClientContractRepository } from '@/schemas/client-contract/client-contract.repository';
import { IClientContractRepository } from '@/schemas/client-contract/client-contract.repository.interface';
import { ClientContractSchema } from '@/schemas/client-contract/client-contract.schema';
import { ClientContractService } from '@/schemas/client-contract/client-contract.service';
import { IClientContractService } from '@/schemas/client-contract/client-contract.service.interface';
import { EntityRepository } from '@/schemas/entity/entity.repository';
import { IEntityRepository } from '@/schemas/entity/entity.repository.interface';
import { EntitySchema } from '@/schemas/entity/entity.schema';
import { EntityService } from '@/schemas/entity/entity.service';
import { IEntityService } from '@/schemas/entity/entity.service.interface';
import { ObjectRepository } from '@/schemas/object/object.repository';
import { IObjectRepository } from '@/schemas/object/object.repository.interface';
import { ObjectSchema } from '@/schemas/object/object.schema';
import { ObjectService } from '@/schemas/object/object.service';
import { IObjectService } from '@/schemas/object/object.service.interface';
import { ProductRepository } from '@/schemas/product/product.repository';
import { IProductRepository } from '@/schemas/product/product.repository.interface';
import { ProductSchema } from '@/schemas/product/product.schema';
import { ProductService } from '@/schemas/product/product.service';
import { IProductService } from '@/schemas/product/product.service.interface';
import { RealEstateAgentRepository } from '@/schemas/real-estate-agent/real-estate-agent.repository';
import { IRealEstateAgentRepository } from '@/schemas/real-estate-agent/real-estate-agent.repository.interface';
import { RealEstateAgentSchema } from '@/schemas/real-estate-agent/real-estate-agent.schema';
import { RealEstateAgentService } from '@/schemas/real-estate-agent/real-estate-agent.service';
import { IRealEstateAgentService } from '@/schemas/real-estate-agent/real-estate-agent.service.interface';
import { ScheduledPaymentRepository } from '@/schemas/scheduled-payment/scheduled-payment.repository';
import { IScheduledPaymentRepository } from '@/schemas/scheduled-payment/scheduled-payment.repository.interface';
import { ScheduledPaymentSchema } from '@/schemas/scheduled-payment/scheduled-payment.schema';
import { ScheduledPaymentService } from '@/schemas/scheduled-payment/scheduled-payment.service';
import { IScheduledPaymentService } from '@/schemas/scheduled-payment/scheduled-payment.service.interface';
import { UserRepository } from '@/schemas/user/user.repository';
import { UserSchema } from '@/schemas/user/user.schema';
import { UserService } from '@/schemas/user/users.service';
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
	bind<IBrokerService>(TYPES.BrokerService)
		.to(BrokerService)
		.inSingletonScope();

	bind<ISchema>(TYPES.BaseSchema).to(BaseSchema);

	bind<IClientRepository>(TYPES.ClientRepository).to(ClientRepository);
	bind<IClientService>(TYPES.ClientService).to(ClientService);
	bind<ISchema>(TYPES.ClientSchema).to(ClientSchema);

	bind<IObjectRepository>(TYPES.ObjectRepository).to(ObjectRepository);
	bind<IObjectService>(TYPES.ObjectService).to(ObjectService);
	bind<ISchema>(TYPES.ObjectSchema).to(ObjectSchema);

	bind<IProductRepository>(TYPES.ProductRepository).to(ProductRepository);
	bind<IProductService>(TYPES.ProductService).to(ProductService);
	bind<ISchema>(TYPES.ProductSchema).to(ProductSchema);

	bind<IClientContractRepository>(TYPES.ClientContractRepository).to(
		ClientContractRepository,
	);
	bind<IClientContractService>(TYPES.ClientContractService).to(
		ClientContractService,
	);
	bind<ISchema>(TYPES.ClientContractSchema).to(ClientContractSchema);

	bind<IAgencyRepository>(TYPES.AgencyRepository).to(AgencyRepository);
	bind<IAgencyService>(TYPES.AgencyService).to(AgencyService);
	bind<ISchema>(TYPES.AgencySchema).to(AgencySchema);

	bind<IAgencyContractRepository>(TYPES.AgencyContractRepository).to(
		AgencyContractRepository,
	);
	bind<IAgencyContractService>(TYPES.AgencyContractService).to(
		AgencyContractService,
	);
	bind<ISchema>(TYPES.AgencyContractSchema).to(AgencyContractSchema);

	bind<IRealEstateAgentRepository>(TYPES.RealEstateAgentRepository).to(
		RealEstateAgentRepository,
	);
	bind<IRealEstateAgentService>(TYPES.RealEstateAgentService).to(
		RealEstateAgentService,
	);
	bind<ISchema>(TYPES.RealEstateAgentSchema).to(RealEstateAgentSchema);

	bind<UserRepository>(TYPES.UserRepository).to(UserRepository);
	bind<UserService>(TYPES.UserService).to(UserService);
	bind<ISchema>(TYPES.UserSchema).to(UserSchema);

	bind<IBankRepository>(TYPES.BankRepository).to(BankRepository);
	bind<IBankService>(TYPES.BankService).to(BankService);
	bind<ISchema>(TYPES.BankSchema).to(BankSchema);

	bind<IScheduledPaymentRepository>(TYPES.ScheduledPaymentRepository).to(
		ScheduledPaymentRepository,
	);
	bind<IScheduledPaymentService>(TYPES.ScheduledPaymentService).to(
		ScheduledPaymentService,
	);
	bind<ISchema>(TYPES.ScheduledPaymentSchema).to(ScheduledPaymentSchema);

	bind<IActualPaymentRepository>(TYPES.ActualPaymentRepository).to(
		ActualPaymentRepository,
	);
	bind<IActualPaymentService>(TYPES.ActualPaymentService).to(
		ActualPaymentService,
	);
	bind<ISchema>(TYPES.ActualPaymentSchema).to(ActualPaymentSchema);

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
