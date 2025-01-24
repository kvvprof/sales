import { inject, injectable } from 'inversify';

import { TYPES, IFindManyOptions } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IContractorRepository } from '@/modules/contractor/repository/contractor.repository.interface';

@injectable()
export class ContractorRepository implements IContractorRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.contractors.findUnique({
      where: { id },
      include: { accounts: { include: { banks: true } } },
    });
  }

  public async findMany(options: IFindManyOptions | null) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              inn: {
                contains: options.prefix,
              },
            },
          ],
        }
      : undefined;

    const [contractors, totalCount] = await Promise.all([
      this.databaseService.client.contractors.findMany({
        where: filter,
        orderBy: { id: 'asc' },
        take: options?.limit,
        skip: options?.offset,
        include: { accounts: { include: { banks: true } } },
      }),

      this.databaseService.client.contractors.count({
        where: filter,
      }),
    ]);

    return { contractors, totalCount };
  }
}
