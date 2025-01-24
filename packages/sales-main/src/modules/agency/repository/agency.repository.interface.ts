import {
  CreateAgencyContractSignatoryInput,
  CreateAgencyInput,
  IFindManyOptions,
} from '@/common';

import {
  Agency,
  AgencyContract,
  AgencyContractSignatory,
} from '@/integrations';

export interface IAgency extends Agency {
  agencyContracts: AgencyContract[];
}

export interface IAgencyRepository {
  findById(id: number): Promise<IAgency | null>;
  findByCommonDbContractorsId(
    commonContractorsId: number,
  ): Promise<Agency | null>;
  findMany(
    options?: IFindManyOptions | null,
  ): Promise<{ agencies: Agency[]; totalCount: number }>;
  create(data: CreateAgencyInput): Promise<Agency>;
  findManyAgencyContractSignatoriesByAgencyId(
    agency_id: number,
  ): Promise<AgencyContractSignatory[]>;
  createAgencyContractSignatory(
    data: CreateAgencyContractSignatoryInput,
  ): Promise<AgencyContractSignatory>;
}
