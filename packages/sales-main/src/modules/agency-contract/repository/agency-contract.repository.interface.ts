import { CreateAgencyContractInput, UpdateAgencyContractInput } from '@/common';
import {
  Agency,
  AgencyContract,
  AgencyContractCommission,
  AgencyContractSignatory,
  Entity,
  Object as TObject,
  User,
} from '@/integrations';

export interface IAgencyContract extends AgencyContract {
  entity: Entity;
  object: TObject;
  agency: Agency;
  responsibleUser: User | null;
  agencyContractSignatory: AgencyContractSignatory | null;
  realEstateAgencyContractProperties: {
    agencyContractCommission: AgencyContractCommission;
  } | null;
  mipAgencyContractProperties: {
    agencyContractCommission: AgencyContractCommission;
  } | null;
}

export interface IAgencyContractRepository {
  findById(id: number): Promise<IAgencyContract | null>;
  findManyByAgencyIdAndObjectId(
    agency_id: number,
    object_id?: number,
  ): Promise<IAgencyContract[]>;
  create(data: CreateAgencyContractInput): Promise<AgencyContract>;
  updateById(data: UpdateAgencyContractInput): Promise<AgencyContract>;
}
