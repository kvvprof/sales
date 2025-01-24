import { inject, injectable } from 'inversify';

import {
  CreateRepresentativeInput,
  TYPES,
  UpdateRepresentativeInput,
} from '@/common';
import { IDatabaseService } from '@/integrations';
import { IRepresentativeRepository } from '@/modules/representative/repository/representative.repository.interface';

@injectable()
export class RepresentativeRepository implements IRepresentativeRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findManyByClientIds(data: number[]) {
    return this.databaseService.client.representative.findMany({
      where: {
        clientId: {
          in: data,
        },
      },
      include: { client: true },
    });
  }

  public async create(data: CreateRepresentativeInput) {
    return this.databaseService.client.representative.create({
      data,
    });
  }

  public async updateById({ id, ...data }: UpdateRepresentativeInput) {
    return this.databaseService.client.representative.update({
      where: { id },
      data,
    });
  }
}
