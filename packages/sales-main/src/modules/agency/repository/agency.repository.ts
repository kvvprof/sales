import { inject, injectable } from 'inversify';

import {
  TYPES,
  IFindManyOptions,
  CreateAgencyContractSignatoryInput,
  CreateAgencyInput,
} from '@/common';
import { IDatabaseService } from '@/integrations';
import { IAgencyRepository } from '@/modules/agency/repository/agency.repository.interface';

@injectable()
export class AgencyRepository implements IAgencyRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.agency.findUnique({
      where: { id },
      include: {
        agencyContracts: true,
      },
    });
  }

  public async findByCommonDbContractorsId(commonDbContractorsId: number) {
    return this.databaseService.client.agency.findUnique({
      where: { commonDbContractorsId },
    });
  }

  public async findMany(options?: IFindManyOptions | null) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              name: {
                contains: options.prefix,
              },
            },
            {
              inn: {
                contains: options.prefix,
              },
            },
          ],
        }
      : undefined;

    const [agencies, totalCount] = await Promise.all([
      this.databaseService.client.agency.findMany({
        where: filter,
        orderBy: { id: 'desc' },
        take: options?.limit,
        skip: options?.offset,
      }),

      this.databaseService.client.agency.count({ where: filter }),
    ]);

    return { agencies, totalCount };
  }

  public async create(data: CreateAgencyInput) {
    return this.databaseService.client.agency.create({ data });
  }

  public async findManyAgencyContractSignatoriesByAgencyId(agencyId: number) {
    return this.databaseService.client.agencyContractSignatory.findMany({
      where: { agencyId },
    });
  }

  public async createAgencyContractSignatory(
    data: CreateAgencyContractSignatoryInput,
  ) {
    return this.databaseService.client.agencyContractSignatory.create({ data });
  }
}
