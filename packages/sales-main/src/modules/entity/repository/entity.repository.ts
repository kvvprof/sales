import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IEntityRepository } from '@/modules/entity/repository/entity.repository.interface';

@injectable()
export class EntityRepository implements IEntityRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findMany() {
    return this.databaseService.client.entity.findMany({
      include: { objects: true },
    });
  }
}
