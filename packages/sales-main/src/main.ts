import { Container, ContainerModule, interfaces } from 'inversify';
import 'reflect-metadata';

import { App } from '@/app';
import {
  BaseSchema,
  ConfigService,
  IConfigService,
  ILoggerService,
  ISchema,
  LoggerService,
  TYPES,
} from '@/common';
import { DatabaseService, IDatabaseService } from '@/integrations';
import { ActualPaymentRepository } from '@/modules/actual-payment/repository/actual-payment.repository';
import { IActualPaymentRepository } from '@/modules/actual-payment/repository/actual-payment.repository.interface';
import { ActualPaymentSchema } from '@/modules/actual-payment/schema/actual-payment.schema';
import { ActualPaymentService } from '@/modules/actual-payment/service/actual-payment.service';
import { IActualPaymentService } from '@/modules/actual-payment/service/actual-payment.service.interface';
import { AgencyRepository } from '@/modules/agency/repository/agency.repository';
import { IAgencyRepository } from '@/modules/agency/repository/agency.repository.interface';
import { AgencySchema } from '@/modules/agency/schema/agency.schema';
import { AgencyService } from '@/modules/agency/service/agency.service';
import { IAgencyService } from '@/modules/agency/service/agency.service.interface';
import { AgencyContractRepository } from '@/modules/agency-contract/repository/agency-contract.repository';
import { IAgencyContractRepository } from '@/modules/agency-contract/repository/agency-contract.repository.interface';
import { AgencyContractSchema } from '@/modules/agency-contract/schema/agency-contract.schema';
import { AgencyContractService } from '@/modules/agency-contract/service/agency-contract.service';
import { IAgencyContractService } from '@/modules/agency-contract/service/agency-contract.service.interface';
import { AssignmentRepository } from '@/modules/assignment/repository/assignment.repository';
import { IAssignmentRepository } from '@/modules/assignment/repository/assignment.repository.interface';
import { AssignmentSchema } from '@/modules/assignment/schema/assignment.schema';
import { AssignmentService } from '@/modules/assignment/service/assignment.service';
import { IAssignmentService } from '@/modules/assignment/service/assignment.service.interface';
import { BankRepository } from '@/modules/bank/repository/bank.repository';
import { IBankRepository } from '@/modules/bank/repository/bank.repository.interface';
import { BankSchema } from '@/modules/bank/schema/bank.schema';
import { BankService } from '@/modules/bank/service/bank.service';
import { IBankService } from '@/modules/bank/service/bank.service.interface';
import { ClientRepository } from '@/modules/client/repository/client.repository';
import { IClientRepository } from '@/modules/client/repository/client.repository.interface';
import { ClientSchema } from '@/modules/client/schema/client.schema';
import { ClientService } from '@/modules/client/service/client.service';
import { IClientService } from '@/modules/client/service/client.service.interface';
import { ClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';
import { ClientContractSchema } from '@/modules/client-contract/schema/client-contract.schema';
import { ClientContractService } from '@/modules/client-contract/service/client-contract.service';
import { IClientContractService } from '@/modules/client-contract/service/client-contract.service.interface';
import { EntityRepository } from '@/modules/entity/repository/entity.repository';
import { IEntityRepository } from '@/modules/entity/repository/entity.repository.interface';
import { EntitySchema } from '@/modules/entity/schema/entity.schema';
import { EntityService } from '@/modules/entity/service/entity.service';
import { IEntityService } from '@/modules/entity/service/entity.service.interface';
import { EscrowAccountHistoryRepository } from '@/modules/escrow-account-history/repository/escrow-account-history.repository';
import { IEscrowAccountHistoryRepository } from '@/modules/escrow-account-history/repository/escrow-account-history.repository.interface';
import { EscrowAccountHistorySchema } from '@/modules/escrow-account-history/schema/escrow-account-history.schema';
import { EscrowAccountHistoryService } from '@/modules/escrow-account-history/service/escrow-account-history.service';
import { IEscrowAccountHistoryService } from '@/modules/escrow-account-history/service/escrow-account-history.service.interface';
import { ObjectRepository } from '@/modules/object/repository/object.repository';
import { IObjectRepository } from '@/modules/object/repository/object.repository.interface';
import { ObjectSchema } from '@/modules/object/schema/object.schema';
import { ObjectService } from '@/modules/object/service/object.service';
import { IObjectService } from '@/modules/object/service/object.service.interface';
import { ProductRepository } from '@/modules/product/repository/product.repository';
import { IProductRepository } from '@/modules/product/repository/product.repository.interface';
import { ProductSchema } from '@/modules/product/schema/product.schema';
import { ProductService } from '@/modules/product/service/product.service';
import { IProductService } from '@/modules/product/service/product.service.interface';
import { RealEstateAgencyActRepository } from '@/modules/real-estate-agency-act/repository/real-estate-agency-act.repository';
import { IRealEstateAgencyActRepository } from '@/modules/real-estate-agency-act/repository/real-estate-agency-act.repository.interface';
import { RealEstateAgencyActSchema } from '@/modules/real-estate-agency-act/schema/real-estate-agency-act.schema';
import { RealEstateAgencyActService } from '@/modules/real-estate-agency-act/service/real-estate-agency-act.service';
import { IRealEstateAgencyActService } from '@/modules/real-estate-agency-act/service/real-estate-agency-act.service.interface';
import { RealEstateAgencyActCandidateRepository } from '@/modules/real-estate-agency-act-candidate/repository/real-estate-agency-act-candidate.repository';
import { IRealEstateAgencyActCandidateRepository } from '@/modules/real-estate-agency-act-candidate/repository/real-estate-agency-act-candidate.repository.interface';
import { RealEstateAgencyActCandidateSchema } from '@/modules/real-estate-agency-act-candidate/schema/real-estate-agency-act-candidate.schema';
import { RealEstateAgencyActCandidateService } from '@/modules/real-estate-agency-act-candidate/service/real-estate-agency-act-candidate.service';
import { IRealEstateAgencyActCandidateService } from '@/modules/real-estate-agency-act-candidate/service/real-estate-agency-act-candidate.service.interface';
import { RealEstateAgentRepository } from '@/modules/real-estate-agent/repository/real-estate-agent.repository';
import { IRealEstateAgentRepository } from '@/modules/real-estate-agent/repository/real-estate-agent.repository.interface';
import { RealEstateAgentSchema } from '@/modules/real-estate-agent/schema/real-estate-agent.schema';
import { RealEstateAgentService } from '@/modules/real-estate-agent/service/real-estate-agent.service';
import { IRealEstateAgentService } from '@/modules/real-estate-agent/service/real-estate-agent.service.interface';
import { RepresentativeRepository } from '@/modules/representative/repository/representative.repository';
import { IRepresentativeRepository } from '@/modules/representative/repository/representative.repository.interface';
import { RepresentativeSchema } from '@/modules/representative/schema/representative.schema';
import { RepresentativeService } from '@/modules/representative/service/representative.service';
import { IRepresentativeService } from '@/modules/representative/service/representative.service.interface';
import { ScheduledPaymentRepository } from '@/modules/scheduled-payment/repository/scheduled-payment.repository';
import { IScheduledPaymentRepository } from '@/modules/scheduled-payment/repository/scheduled-payment.repository.interface';
import { ScheduledPaymentSchema } from '@/modules/scheduled-payment/schema/scheduled-payment.schema';
import { ScheduledPaymentService } from '@/modules/scheduled-payment/service/scheduled-payment.service';
import { IScheduledPaymentService } from '@/modules/scheduled-payment/service/scheduled-payment.service.interface';
import { SubsidyRepository } from '@/modules/subsidy/repository/subsidy.repository';
import { ISubsidyRepository } from '@/modules/subsidy/repository/subsidy.repository.interface';
import { SubsidySchema } from '@/modules/subsidy/schema/subsidy.schema';
import { SubsidyService } from '@/modules/subsidy/service/subsidy.service';
import { ISubsidyService } from '@/modules/subsidy/service/subsidy.service.interface';
import { TransferActRepository } from '@/modules/transfer-act/repository/transfer-act.repository';
import { ITransferActRepository } from '@/modules/transfer-act/repository/transfer-act.repository.interface';
import { TransferActSchema } from '@/modules/transfer-act/schema/transfer-act.schema';
import { TransferActService } from '@/modules/transfer-act/service/transfer-act.service';
import { ITransferActService } from '@/modules/transfer-act/service/transfer-act.service.interface';
import { UserRepository } from '@/modules/user/repository/user.repository';
import { UserSchema } from '@/modules/user/schema/user.schema';
import { UserService } from '@/modules/user/service/user.service';

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
  bind<IEscrowAccountHistoryRepository>(
    TYPES.EscrowAccountHistoryRepository,
  ).to(EscrowAccountHistoryRepository);
  bind<IEscrowAccountHistoryService>(TYPES.EscrowAccountHistoryService).to(
    EscrowAccountHistoryService,
  );
  bind<ISchema>(TYPES.EscrowAccountHistorySchema).to(
    EscrowAccountHistorySchema,
  );
  bind<IRealEstateAgencyActRepository>(TYPES.RealEstateAgencyActRepository).to(
    RealEstateAgencyActRepository,
  );
  bind<IRealEstateAgencyActService>(TYPES.RealEstateAgencyActService).to(
    RealEstateAgencyActService,
  );
  bind<ISchema>(TYPES.RealEstateAgencyActSchema).to(RealEstateAgencyActSchema);
  bind<ISubsidyRepository>(TYPES.SubsidyRepository).to(SubsidyRepository);
  bind<ISubsidyService>(TYPES.SubsidyService).to(SubsidyService);
  bind<ISchema>(TYPES.SubsidySchema).to(SubsidySchema);
  bind<IAssignmentRepository>(TYPES.AssignmentRepository).to(
    AssignmentRepository,
  );
  bind<IAssignmentService>(TYPES.AssignmentService).to(AssignmentService);
  bind<ISchema>(TYPES.AssignmentSchema).to(AssignmentSchema);
  bind<IRealEstateAgencyActCandidateRepository>(
    TYPES.RealEstateAgencyActCandidateRepository,
  ).to(RealEstateAgencyActCandidateRepository);
  bind<IRealEstateAgencyActCandidateService>(
    TYPES.RealEstateAgencyActCandidateService,
  ).to(RealEstateAgencyActCandidateService);
  bind<ISchema>(TYPES.RealEstateAgencyActCandidateSchema).to(
    RealEstateAgencyActCandidateSchema,
  );
  bind<ITransferActRepository>(TYPES.TransferActRepository).to(
    TransferActRepository,
  );
  bind<ITransferActService>(TYPES.TransferActService).to(TransferActService);
  bind<ISchema>(TYPES.TransferActSchema).to(TransferActSchema);
  bind<IRepresentativeRepository>(TYPES.RepresentativeRepository).to(
    RepresentativeRepository,
  );
  bind<IRepresentativeService>(TYPES.RepresentativeService).to(
    RepresentativeService,
  );
  bind<ISchema>(TYPES.RepresentativeSchema).to(RepresentativeSchema);
});

const bootstrap = async () => {
  const appContainer = new Container();
  appContainer.load(appBindings);
  const app = appContainer.get<App>(TYPES.App);
  await app.init();
  return { appContainer, app };
};

export const boot = bootstrap();
