import Decimal from 'decimal.js';
import { inject, injectable } from 'inversify';

import { TYPES, IFindManyOptions } from '@/common';
import { IDatabaseService } from '@/integrations';
import { EscrowAccountHistory } from '@/integrations';
import { IEscrowAccountHistoryRepository } from '@/modules/escrow-account-history/repository/escrow-account-history.repository.interface';

@injectable()
export class EscrowAccountHistoryRepository
  implements IEscrowAccountHistoryRepository
{
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async create(
    escrowAccountsHistory: Omit<
      EscrowAccountHistory,
      'id' | 'createdAt' | 'updatedAt'
    >[],
  ) {
    return this.databaseService.client.$transaction(async (prisma) => {
      await prisma.escrowAccountHistory.deleteMany({
        where: { builderInn: escrowAccountsHistory[0].builderInn },
      });

      await prisma.escrowAccountHistory.createMany({
        data: escrowAccountsHistory,
      });

      return true;
    });
  }

  public async findMany(options?: IFindManyOptions | null) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              dduNumber: {
                startsWith: options.prefix,
              },
            },
            {
              builderInn: {
                equals: options.prefix,
              },
            },
          ],
        }
      : undefined;

    const [escrowAccountsHistory, totalCount] = await Promise.all([
      this.databaseService.client.escrowAccountHistory.findMany({
        where: filter,
        orderBy: { dateOfTransaction: 'desc' },
        take: options?.limit,
        skip: options?.offset,
      }),

      this.databaseService.client.escrowAccountHistory.count({ where: filter }),
    ]);

    return { escrowAccountsHistory, totalCount };
  }

  public async findManyByDduNumber(dduNumber: string) {
    return this.databaseService.client.escrowAccountHistory.findMany({
      where: { dduNumber },
    });
  }

  public async countTransactionsByDduNumbers(dduNumbers: string[]) {
    return this.databaseService.client.escrowAccountHistory
      .groupBy({
        by: ['dduNumber'],
        where: {
          dduNumber: {
            in: dduNumbers,
          },
        },
        _sum: {
          transactionAmount: true,
        },
        _max: {
          dateOfTransaction: true,
        },
      })
      .then((res) => {
        return res.map((res) => ({
          dduNumber: res.dduNumber,
          mostRecentTransactionDate: res._max?.dateOfTransaction || null,
          totalTransactionAmount: new Decimal(res._sum?.transactionAmount || 0),
        }));
      });
  }
}
