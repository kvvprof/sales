import {
  BasicClientContract,
  ClientContract,
  ClientContracts,
  CreateClientContractInput,
  GetClientContractInput,
  GetClientContractsByIdsInput,
  GetClientContractsInput,
  UpdateClientContractInput,
} from '@/common';

export interface IClientContractService {
  getClientContract(input: GetClientContractInput): Promise<ClientContract>;
  getClientContracts(
    input?: GetClientContractsInput | null,
  ): Promise<ClientContracts>;
  getClientContractsWithoutTransferAct(
    input?: GetClientContractsInput | null,
  ): Promise<ClientContracts>;
  getClientContractsByIds(
    input: GetClientContractsByIdsInput,
  ): Promise<ClientContracts>;
  createClientContract(
    input: CreateClientContractInput,
  ): Promise<BasicClientContract>;
  updateClientContract(
    input: UpdateClientContractInput,
  ): Promise<BasicClientContract>;
}
