import {
  BasicEscrowAccountHistory,
  EscrowAccountHistoryInput,
  EscrowAccountsHistory,
  GetEscrowAccountsHistoryByDduNumberInput,
  GetEscrowAccountsHistoryInput,
} from '@/common';

export interface IEscrowAccountHistoryService {
  createEscrowAccountsHistory(
    input: EscrowAccountHistoryInput[],
  ): Promise<boolean>;
  getEscrowAccountsHistory(
    input?: GetEscrowAccountsHistoryInput | null,
  ): Promise<EscrowAccountsHistory>;
  getEscrowAccountsHistoryByDduNumber(
    input: GetEscrowAccountsHistoryByDduNumberInput,
  ): Promise<BasicEscrowAccountHistory[]>;
}
