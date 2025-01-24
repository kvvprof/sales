import { inject, injectable } from 'inversify';

import {
  TYPES,
  IFindManyOptions,
  CreateRealEstateAgentInput,
  UpdateRealEstateAgentInput,
} from '@/common';
import { IDatabaseService } from '@/integrations';
import { IRealEstateAgentRepository } from '@/modules/real-estate-agent/repository/real-estate-agent.repository.interface';

@injectable()
export class RealEstateAgentRepository implements IRealEstateAgentRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public findById(id: number) {
    return this.databaseService.client.realEstateAgent.findUnique({
      where: { id },
      include: {
        agenciesToRealEstateAgents: { include: { agency: true } },
      },
    });
  }

  public async findMany(options?: IFindManyOptions | null) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              fullName: {
                contains: options.prefix,
              },
            },
          ],
        }
      : undefined;

    const [realEstateAgents, totalCount] = await Promise.all([
      this.databaseService.client.realEstateAgent.findMany({
        where: filter,
        orderBy: { id: 'desc' },
        take: options?.limit,
        skip: options?.offset,
        include: {
          agenciesToRealEstateAgents: { include: { agency: true } },
        },
      }),

      this.databaseService.client.realEstateAgent.count({ where: filter }),
    ]);

    return { realEstateAgents, totalCount };
  }

  public async create({ agencyIds, ...data }: CreateRealEstateAgentInput) {
    return this.databaseService.client.$transaction(async (prisma) => {
      const createRealEstateAgentRes = await prisma.realEstateAgent.create({
        data,
      });

      const agencyToRealEstateAgent = [...new Set(agencyIds)].map(
        (agencyId) => ({
          agencyId,
          realEstateAgentId: createRealEstateAgentRes.id,
        }),
      );

      await prisma.agencyToRealEstateAgent.createMany({
        data: agencyToRealEstateAgent,
      });

      return createRealEstateAgentRes;
    });
  }

  public async updateById({
    id,
    agencyIds,
    ...data
  }: UpdateRealEstateAgentInput) {
    return this.databaseService.client.$transaction(async (prisma) => {
      const updateRealEstateAgentRes = await prisma.realEstateAgent.update({
        where: { id },
        data,
      });

      const agencyToRealEstateAgent = [...new Set(agencyIds)].map(
        (agencyId) => ({
          agencyId,
          realEstateAgentId: updateRealEstateAgentRes.id,
        }),
      );

      await prisma.agencyToRealEstateAgent.deleteMany({
        where: { realEstateAgentId: updateRealEstateAgentRes.id },
      });

      await prisma.agencyToRealEstateAgent.createMany({
        data: agencyToRealEstateAgent,
      });

      return updateRealEstateAgentRes;
    });
  }
}
