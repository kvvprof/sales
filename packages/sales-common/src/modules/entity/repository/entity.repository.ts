import { inject, injectable } from 'inversify';

import { TYPES, IFindManyOptions } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IEntityRepository } from '@/modules/entity/repository/entity.repository.interface';

@injectable()
export class EntityRepository implements IEntityRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.entities.findUnique({
      where: { id },
    });
  }

  public async findMany(options?: IFindManyOptions | null) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              short_name: {
                contains: options.prefix,
              },
            },
          ],
        }
      : undefined;

    const [entities, totalCount] = await Promise.all([
      this.databaseService.client.entities.findMany({
        where: filter,
        orderBy: { id: 'asc' },
        take: options?.limit,
        skip: options?.offset,
      }),

      this.databaseService.client.entities.count({
        where: filter,
      }),
    ]);

    return { entities, totalCount };
  }
}
