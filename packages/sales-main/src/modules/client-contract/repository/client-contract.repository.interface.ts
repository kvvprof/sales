import {
  CreateClientContractInput,
  IFindManyOptions,
  UpdateClientContractInput,
} from '@/common';
import {
  Agency,
  AgencyContract,
  AgencyContractCommission,
  Bank,
  Client,
  ClientContract,
  ClientContractToClient,
  DduClientContractProperties,
  DkpClientContractProperties,
  RealEstateAgent,
  Subsidy,
  Object as TObject,
  User,
} from '@/integrations';

import { IProduct } from '@/modules/product/repository/product.repository.interface';

export interface IClientContractToClient extends ClientContractToClient {
  client: Client;
}

export interface IClientContract extends ClientContract {
  dduClientContractProperties: DduClientContractProperties | null;
  dkpClientContractProperties: DkpClientContractProperties | null;
  clientContractsToClients: IClientContractToClient[];
  object: TObject;
  product: IProduct;
  manager: User | null;
  realEstateAgent: RealEstateAgent | null;
  clientContractsToAgencyContracts: {
    agencyContract: AgencyContract & {
      realEstateAgencyContractProperties: {
        agencyContractCommission: AgencyContractCommission;
      } | null;
      mipAgencyContractProperties: {
        agencyContractCommission: AgencyContractCommission;
      } | null;

      agency: Agency;
    };
  }[];
  bank: Bank | null;
  subsidy: Subsidy | null;
}

export interface IClientContractRepository {
  findById(id: number): Promise<IClientContract | null>;
  findByProductId(productId: number): Promise<ClientContract | null>;
  findManyByObjectId(
    objectId?: number | null,
    options?: IFindManyOptions | null,
  ): Promise<{ clientContracts: IClientContract[]; totalCount: number }>;
  findManyByObjectIdWithoutTransferAct(
    objectId?: number | null,
    options?: IFindManyOptions | null,
  ): Promise<{ clientContracts: IClientContract[]; totalCount: number }>;
  findManyByIds(
    ids: number[],
  ): Promise<{ clientContracts: IClientContract[]; totalCount: number }>;
  create(
    objectId: number,
    data: CreateClientContractInput,
  ): Promise<ClientContract>;
  updateById(
    objectId: number,
    data: UpdateClientContractInput,
  ): Promise<ClientContract>;
  checkContractExistsByCriteria(
    criteria: Partial<ClientContract>,
  ): Promise<boolean>;
}
