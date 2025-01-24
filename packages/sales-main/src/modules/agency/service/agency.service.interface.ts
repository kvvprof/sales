import {
  Agency,
  Agencies,
  BasicAgency,
  CreateAgencyInput,
  GetAgenciesInput,
  GetAgencyInput,
  CreateAgencyContractSignatoryInput,
  BasicAgencyContractSignatory,
  GetAgencyContractSignatoriesInput,
} from '@/common';

export interface IAgencyService {
  getAgency(input: GetAgencyInput): Promise<Agency>;
  getAgencies(input?: GetAgenciesInput | null): Promise<Agencies>;
  createAgency(input: CreateAgencyInput): Promise<BasicAgency>;
  getAgencyContractSignatories(
    input: GetAgencyContractSignatoriesInput,
  ): Promise<BasicAgencyContractSignatory[]>;
  createAgencyContractSignatory(
    input: CreateAgencyContractSignatoryInput,
  ): Promise<BasicAgencyContractSignatory>;
}
