import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IObjectRepository } from '@/modules/object/repository/object.repository.interface';

@injectable()
export class ObjectRepository implements IObjectRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.object.findUnique({
      where: { id },
    });
  }

  public async findMany() {
    return this.databaseService.client.object.findMany();
  }
}
