import Decimal from 'decimal.js';

import { IFindManyOptions } from '@/common';
import { EscrowAccountHistory } from '@/integrations';

export interface IEscrowAccountHistoryRepository {
  create(
    escrowAccountsHistory: Omit<
      EscrowAccountHistory,
      'id' | 'createdAt' | 'updatedAt'
    >[],
  ): Promise<boolean>;
  findMany(options?: IFindManyOptions | null): Promise<{
    escrowAccountsHistory: EscrowAccountHistory[];
    totalCount: number;
  }>;
  findManyByDduNumber(dduNumber: string): Promise<EscrowAccountHistory[]>;
  countTransactionsByDduNumbers(dduNumbers: string[]): Promise<
    {
      dduNumber: string;
      mostRecentTransactionDate: Date | null;
      totalTransactionAmount: Decimal;
    }[]
  >;
}
