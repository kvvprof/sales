import { inject, injectable } from 'inversify';

import { IFindManyOptions, TYPES } from '@/common';
import { IDatabaseService } from '@/integrations';
import {
  ICreateTransferAct,
  ITransferActRepository,
  IUpdateTransferAct,
} from '@/modules/transfer-act/repository/transfer-act.repository.interface';

@injectable()
export class TransferActRepository implements ITransferActRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public findById(id: number) {
    return this.databaseService.client.transferAct.findUnique({
      where: { id },
      include: {
        object: true,
        product: true,
        clientContract: {
          include: { clientContractsToClients: { include: { client: true } } },
        },
        transferActsToRepresentatives: {
          include: { representative: { include: { client: true } } },
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

    const [transferActs, totalCount] = await Promise.all([
      this.databaseService.client.transferAct.findMany({
        where: filter,
        include: {
          object: true,
          product: true,
          clientContract: {
            include: {
              clientContractsToClients: { include: { client: true } },
            },
          },
          transferActsToRepresentatives: {
            include: { representative: { include: { client: true } } },
          },
        },
        orderBy: { id: 'desc' },
        take: options?.limit,
        skip: options?.offset,
      }),

      this.databaseService.client.transferAct.count({ where: filter }),
    ]);

    return { transferActs, totalCount };
  }

  public async create({
    representativeIds,
    ...transferAct
  }: ICreateTransferAct) {
    return this.databaseService.client.$transaction(async (prisma) => {
      const createTransferActRes = await prisma.transferAct.create({
        data: transferAct,
      });

      if (representativeIds) {
        await prisma.transferActToRepresentative.createMany({
          data: [...new Set(representativeIds)].map((representativeId) => ({
            transferActId: createTransferActRes.id,
            representativeId,
          })),
        });
      }

      return createTransferActRes;
    });
  }

  public async updateById({
    id,
    representativeIds,
    ...transferAct
  }: IUpdateTransferAct) {
    return this.databaseService.client.$transaction(async (prisma) => {
      const updateTransferActRes = await prisma.transferAct.update({
        where: { id },
        data: transferAct,
      });

      if (representativeIds) {
        await prisma.transferActToRepresentative.deleteMany({
          where: { transferActId: updateTransferActRes.id },
        });

        await prisma.transferActToRepresentative.createMany({
          data: [...new Set(representativeIds)].map((representativeId) => ({
            transferActId: updateTransferActRes.id,
            representativeId,
          })),
        });
      }

      return updateTransferActRes;
    });
  }
}
