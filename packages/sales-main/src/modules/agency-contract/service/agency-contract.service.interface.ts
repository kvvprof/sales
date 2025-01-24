import {
  AgencyContract,
  BasicAgencyContract,
  CreateAgencyContractInput,
  GetAgencyContractInput,
  GetAgencyContractsInput,
  UpdateAgencyContractInput,
} from '@/common';

export interface IAgencyContractService {
  getAgencyContract(input: GetAgencyContractInput): Promise<AgencyContract>;
  getAgencyContracts(input: GetAgencyContractsInput): Promise<AgencyContract[]>;
  createAgencyContract(
    input: CreateAgencyContractInput,
  ): Promise<BasicAgencyContract>;
  updateAgencyContract(
    input: UpdateAgencyContractInput,
  ): Promise<BasicAgencyContract>;
}
