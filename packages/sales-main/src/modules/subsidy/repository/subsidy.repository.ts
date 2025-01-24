import { inject, injectable } from 'inversify';

import { CreateSubsidyInput, TYPES, UpdateSubsidyInput } from '@/common';
import { IDatabaseService } from '@/integrations';
import { ISubsidyRepository } from '@/modules/subsidy/repository/subsidy.repository.interface';

@injectable()
export class SubsidyRepository implements ISubsidyRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findMany() {
    return this.databaseService.client.subsidy.findMany({
      orderBy: { id: 'desc' },
    });
  }

  public async create(data: CreateSubsidyInput) {
    return this.databaseService.client.subsidy.create({ data });
  }

  public async updateById({ id, ...data }: UpdateSubsidyInput) {
    return this.databaseService.client.subsidy.update({
      where: { id },
      data: { ...data, isVisible: data.isVisible ?? undefined },
    });
  }

  public async deleteById(id: number) {
    return !!(await this.databaseService.client.subsidy.delete({
      where: { id },
    }));
  }
}
