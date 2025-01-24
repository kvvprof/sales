import { inject, injectable } from 'inversify';

import {
  IFindManyOptions,
  TYPES,
  UpdateRealEstateAgencyActInput,
} from '@/common';
import { IDatabaseService } from '@/integrations';
import {
  ICreateRealEstateAgencyAct,
  IRealEstateAgencyActRepository,
} from '@/modules/real-estate-agency-act/repository/real-estate-agency-act.repository.interface';

@injectable()
export class RealEstateAgencyActRepository
  implements IRealEstateAgencyActRepository
{
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public findById(id: number) {
    return this.databaseService.client.realEstateAgencyAct.findUnique({
      where: { id },
      include: {
        agency: true,
        clientContract: { include: { object: true } },
        agencyContract: {
          include: {
            realEstateAgencyContractProperties: {
              include: { agencyContractCommission: true },
            },
          },
        },
      },
    });
  }

  public async findMany(options?: IFindManyOptions | null) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              number: {
                startsWith: options.prefix,
              },
            },
          ],
        }
      : undefined;

    const [realEstateAgencyActs, totalCount] = await Promise.all([
      this.databaseService.client.realEstateAgencyAct.findMany({
        where: filter,
        include: {
          agency: true,
          clientContract: { include: { object: true } },
          agencyContract: {
            include: {
              realEstateAgencyContractProperties: {
                include: { agencyContractCommission: true },
              },
            },
          },
        },
        orderBy: { id: 'desc' },
        take: options?.limit,
        skip: options?.offset,
      }),

      this.databaseService.client.realEstateAgencyAct.count({ where: filter }),
    ]);

    return { realEstateAgencyActs, totalCount };
  }

  public async findManyByAgencyId(agencyId: number) {
    return this.databaseService.client.realEstateAgencyAct.findMany({
      where: { agencyId },
    });
  }

  public async create(data: ICreateRealEstateAgencyAct) {
    return this.databaseService.client.realEstateAgencyAct.create({ data });
  }

  public async updateById({ id, ...data }: UpdateRealEstateAgencyActInput) {
    return this.databaseService.client.realEstateAgencyAct.update({
      where: { id },
      data,
    });
  }
}
