import { inject, injectable } from 'inversify';

import {
  ClientContractType,
  CreateClientContractInput,
  IFindManyOptions,
  TYPES,
  UpdateClientContractInput,
} from '@/common';
import {
  ClientContract,
  DduClientContractProperties,
  DkpClientContractProperties,
  IDatabaseService,
} from '@/integrations';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';

@injectable()
export class ClientContractRepository implements IClientContractRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.clientContract.findUnique({
      where: { id },
      include: {
        object: true,
        manager: true,
        realEstateAgent: true,
        bank: true,
        subsidy: true,
        clientContractsToClients: { include: { client: true } },
        product: { include: { object: true } },
        clientContractsToAgencyContracts: {
          include: {
            agencyContract: {
              include: {
                agency: true,
                realEstateAgencyContractProperties: {
                  include: { agencyContractCommission: true },
                },
                mipAgencyContractProperties: {
                  include: { agencyContractCommission: true },
                },
              },
            },
          },
        },
        dduClientContractProperties: true,
        dkpClientContractProperties: true,
      },
    });
  }

  public async findByProductId(productId: number) {
    return this.databaseService.client.clientContract.findUnique({
      where: { productId },
    });
  }

  public async findManyByObjectId(
    objectId?: number | null,
    options?: IFindManyOptions | null,
  ) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              number: {
                equals: options.prefix,
              },
            },
            {
              clientContractsToClients: {
                some: {
                  client: { fullName: { contains: options.prefix } },
                },
              },
            },
            {
              product: {
                number: {
                  equals: options.prefix,
                },
              },
            },
          ],
        }
      : undefined;

    const [clientContracts, totalCount] = await Promise.all([
      this.databaseService.client.clientContract.findMany({
        where: {
          objectId: objectId || undefined,
          ...filter,
        },
        orderBy: { date: 'desc' },
        take: options?.limit,
        skip: options?.offset,
        include: {
          object: true,
          manager: true,
          realEstateAgent: true,
          bank: true,
          subsidy: true,
          clientContractsToClients: { include: { client: true } },
          product: { include: { object: true } },
          clientContractsToAgencyContracts: {
            include: {
              agencyContract: {
                include: {
                  agency: true,
                  realEstateAgencyContractProperties: {
                    include: { agencyContractCommission: true },
                  },
                  mipAgencyContractProperties: {
                    include: { agencyContractCommission: true },
                  },
                },
              },
            },
          },
          dduClientContractProperties: true,
          dkpClientContractProperties: true,
        },
      }),

      this.databaseService.client.clientContract.count({
        where: {
          objectId: objectId || undefined,
          ...filter,
        },
      }),
    ]);

    return { clientContracts, totalCount };
  }

  public async findManyByObjectIdWithoutTransferAct(
    objectId?: number | null,
    options?: IFindManyOptions | null,
  ) {
    const filter = options?.prefix
      ? {
          OR: [
            {
              number: {
                equals: options.prefix,
              },
            },
            {
              clientContractsToClients: {
                some: {
                  client: { fullName: { contains: options.prefix } },
                },
              },
            },
            {
              product: {
                number: {
                  equals: options.prefix,
                },
              },
            },
          ],
        }
      : undefined;

    const [clientContracts, totalCount] = await Promise.all([
      this.databaseService.client.clientContract.findMany({
        where: {
          objectId: objectId || undefined,
          transferAct: { is: null },
          isTransferActDisabled: false,
          ...filter,
        },
        orderBy: { date: 'desc' },
        take: options?.limit,
        skip: options?.offset,
        include: {
          object: true,
          manager: true,
          realEstateAgent: true,
          bank: true,
          subsidy: true,
          clientContractsToClients: { include: { client: true } },
          product: { include: { object: true } },
          clientContractsToAgencyContracts: {
            include: {
              agencyContract: {
                include: {
                  agency: true,
                  realEstateAgencyContractProperties: {
                    include: { agencyContractCommission: true },
                  },
                  mipAgencyContractProperties: {
                    include: { agencyContractCommission: true },
                  },
                },
              },
            },
          },
          dduClientContractProperties: true,
          dkpClientContractProperties: true,
        },
      }),

      this.databaseService.client.clientContract.count({
        where: {
          objectId: objectId || undefined,
          transferAct: { is: null },
          isTransferActDisabled: false,
          ...filter,
        },
      }),
    ]);

    return { clientContracts, totalCount };
  }

  public async findManyByIds(ids: number[]) {
    const [clientContracts, totalCount] = await Promise.all([
      this.databaseService.client.clientContract.findMany({
        where: {
          id: {
            in: ids,
          },
        },
        orderBy: { date: 'desc' },
        include: {
          object: true,
          manager: true,
          realEstateAgent: true,
          bank: true,
          subsidy: true,
          clientContractsToClients: { include: { client: true } },
          product: { include: { object: true } },
          clientContractsToAgencyContracts: {
            include: {
              agencyContract: {
                include: {
                  agency: true,
                  realEstateAgencyContractProperties: {
                    include: { agencyContractCommission: true },
                  },
                  mipAgencyContractProperties: {
                    include: { agencyContractCommission: true },
                  },
                },
              },
            },
          },
          dduClientContractProperties: true,
          dkpClientContractProperties: true,
        },
      }),

      this.databaseService.client.clientContract.count({
        where: {
          id: {
            in: ids,
          },
        },
      }),
    ]);

    return { clientContracts, totalCount };
  }

  public async create(
    objectId: number,
    {
      clientContractProperties: {
        clients,
        agencyContractIds,
        ...clientContractProperties
      },
      dduClientContractProperties,
      dkpClientContractProperties,
    }: CreateClientContractInput,
  ) {
    return this.databaseService.client.$transaction(async (prisma) => {
      let newDduClientContractProperties: DduClientContractProperties | null =
        null;
      let newDkpClientContractProperties: DkpClientContractProperties | null =
        null;

      if (
        dduClientContractProperties &&
        clientContractProperties.clientContractType === ClientContractType.Ddu
      ) {
        newDduClientContractProperties =
          await prisma.dduClientContractProperties.create({
            data: dduClientContractProperties,
          });
      }

      if (
        dkpClientContractProperties &&
        clientContractProperties.clientContractType === ClientContractType.Dkp
      ) {
        newDkpClientContractProperties =
          await prisma.dkpClientContractProperties.create({
            data: dkpClientContractProperties,
          });
      }

      const clientContract = await prisma.clientContract.create({
        data: {
          objectId,
          dduClientContractPropertiesId: newDduClientContractProperties?.id,
          dkpClientContractPropertiesId: newDkpClientContractProperties?.id,
          ...clientContractProperties,
        },
      });

      const clientContractToClientData = [...new Set(clients)].map(
        (client) => ({
          clientContractId: clientContract.id,
          ...client,
        }),
      );

      const clientContractToAgencyContractData = [
        ...new Set(agencyContractIds),
      ]?.map((agencyContractId) => ({
        clientContractId: clientContract.id,
        agencyContractId,
      }));

      await Promise.all([
        prisma.clientContractToClient.createMany({
          data: clientContractToClientData,
        }),
        prisma.clientContractToAgencyContract.createMany({
          data: clientContractToAgencyContractData,
        }),
      ]);

      return clientContract;
    });
  }

  public async updateById(
    objectId: number,
    {
      clientContractProperties: {
        clients,
        agencyContractIds,
        ...clientContractProperties
      },
      dduClientContractProperties,
      dkpClientContractProperties,
    }: UpdateClientContractInput,
  ) {
    return this.databaseService.client.$transaction(async (prisma) => {
      const clientContract = await prisma.clientContract.update({
        where: { id: clientContractProperties.id },
        data: {
          objectId,
          ...clientContractProperties,
        },
      });

      if (
        dduClientContractProperties &&
        clientContract.clientContractType === ClientContractType.Ddu
      ) {
        const newDduClientContractProperties =
          await prisma.dduClientContractProperties.upsert({
            where: {
              id: clientContract.dduClientContractPropertiesId || undefined,
            },
            create: dduClientContractProperties,
            update: dduClientContractProperties,
          });

        await prisma.clientContract.update({
          where: { id: clientContractProperties.id },
          data: {
            dduClientContractPropertiesId: newDduClientContractProperties.id,
          },
        });
      }

      if (
        dkpClientContractProperties &&
        clientContract.clientContractType === ClientContractType.Dkp
      ) {
        const newDkpClientContractProperties =
          await prisma.dkpClientContractProperties.upsert({
            where: {
              id: clientContract.dkpClientContractPropertiesId || undefined,
            },
            create: dkpClientContractProperties,
            update: dkpClientContractProperties,
          });

        await prisma.clientContract.update({
          where: { id: clientContractProperties.id },
          data: {
            dkpClientContractPropertiesId: newDkpClientContractProperties.id,
          },
        });
      }

      const clientContractToClientData = [...new Set(clients)].map(
        (client) => ({
          clientContractId: clientContract.id,
          ...client,
        }),
      );

      const clientContractToAgencyContractData = [
        ...new Set(agencyContractIds),
      ]?.map((agencyContractId) => ({
        clientContractId: clientContract.id,
        agencyContractId,
      }));

      await Promise.all([
        prisma.clientContractToClient.deleteMany({
          where: { clientContractId: clientContract.id },
        }),
        prisma.clientContractToAgencyContract.deleteMany({
          where: { clientContractId: clientContract.id },
        }),
      ]);

      await Promise.all([
        prisma.clientContractToClient.createMany({
          data: clientContractToClientData,
        }),
        prisma.clientContractToAgencyContract.createMany({
          data: clientContractToAgencyContractData,
        }),
      ]);

      return clientContract;
    });
  }

  public async checkContractExistsByCriteria(criteria: ClientContract) {
    return (
      (await this.databaseService.client.clientContract.count({
        where: criteria,
      })) > 0
    );
  }
}
