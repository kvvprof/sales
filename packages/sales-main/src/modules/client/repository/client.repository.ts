import { inject, injectable } from 'inversify';

import {
  ClientCategory,
  CreateClientInput,
  IFindManyOptions,
  TYPES,
  UpdateClientInput,
} from '@/common';
import {
  ClientEntityProperties,
  ClientIndividualMinorProperties,
  ClientIndividualProperties,
  IDatabaseService,
} from '@/integrations';
import { IClientRepository } from '@/modules/client/repository/client.repository.interface';

@injectable()
export class ClientRepository implements IClientRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.client.findUnique({
      where: { id },
      include: {
        clientIndividualProperties: { include: { clientPassport: true } },
        clientIndividualMinorProperties: {
          include: {
            clientPassport: true,
            clientsToClientIndividualMinorProperties: {
              include: { client: true },
            },
          },
        },
        clientEntityProperties: true,
        representatives: true,
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
            {
              inn: {
                contains: options.prefix,
              },
            },
          ],
        }
      : undefined;

    const [clients, totalCount] = await Promise.all([
      this.databaseService.client.client.findMany({
        where: filter,
        orderBy: { id: 'desc' },
        take: options?.limit,
        skip: options?.offset,
        include: {
          clientIndividualProperties: { include: { clientPassport: true } },
          clientIndividualMinorProperties: {
            include: {
              clientPassport: true,
              clientsToClientIndividualMinorProperties: {
                include: { client: true },
              },
            },
          },
          clientEntityProperties: true,
          representatives: true,
        },
      }),

      this.databaseService.client.client.count({ where: filter }),
    ]);

    return { clients, totalCount };
  }

  public async create({
    clientProperties,
    clientIndividualProperties,
    clientIndividualMinorProperties,
    clientEntityProperties,
  }: CreateClientInput) {
    return this.databaseService.client.$transaction(async (prisma) => {
      let newClientIndividualProperties: ClientIndividualProperties | null =
        null;
      let newClientIndividualMinorProperties: ClientIndividualMinorProperties | null =
        null;
      let newClientEntityProperties: ClientEntityProperties | null = null;

      if (
        clientProperties.clientCategory === ClientCategory.Individual &&
        clientIndividualProperties
      ) {
        const { clientPassport, ...clientIndividualPropertiesData } =
          clientIndividualProperties;

        const createPassportRes =
          clientPassport &&
          (await prisma.clientPassport.create({
            data: clientPassport,
          }));

        newClientIndividualProperties =
          await prisma.clientIndividualProperties.create({
            data: {
              ...clientIndividualPropertiesData,
              clientPassportId: createPassportRes?.id,
            },
          });
      }

      if (
        clientProperties.clientCategory === ClientCategory.IndividualMinor &&
        clientIndividualMinorProperties
      ) {
        const {
          clientPassport,
          representativeIds,
          ...clientIndividualMinorPropertiesData
        } = clientIndividualMinorProperties;

        const createPassportRes =
          clientPassport &&
          (await prisma.clientPassport.create({
            data: clientPassport,
          }));

        newClientIndividualMinorProperties =
          await prisma.clientIndividualMinorProperties.create({
            data: {
              ...clientIndividualMinorPropertiesData,
              clientPassportId: createPassportRes?.id,
            },
          });

        if (representativeIds) {
          const newRepresentativeIds = [...new Set(representativeIds)];

          const clientToClientIndividualMinorPropertiesData: {
            clientId: number;
            clientIndividualMinorPropertiesId: number;
          }[] = [];

          for (const id of newRepresentativeIds) {
            const client = await prisma.client.findUnique({ where: { id } });

            if (client && client.clientCategory === ClientCategory.Individual) {
              clientToClientIndividualMinorPropertiesData.push({
                clientId: client.id,
                clientIndividualMinorPropertiesId:
                  newClientIndividualMinorProperties.id,
              });
            }
          }

          await prisma.clientToClientIndividualMinorProperties.createMany({
            data: clientToClientIndividualMinorPropertiesData,
          });
        }
      }

      if (
        clientProperties.clientCategory === ClientCategory.Entity &&
        clientEntityProperties
      ) {
        newClientEntityProperties = await prisma.clientEntityProperties.create({
          data: clientEntityProperties,
        });
      }

      const client = await prisma.client.create({
        data: {
          ...clientProperties,
          clientIndividualPropertiesId: newClientIndividualProperties?.id,
          clientIndividualMinorPropertiesId:
            newClientIndividualMinorProperties?.id,
          clientEntityPropertiesId: newClientEntityProperties?.id,
        },
      });

      return client;
    });
  }

  public async updateById({
    clientProperties,
    clientIndividualProperties: clientIndividualProps,
    clientIndividualMinorProperties: clientIndividualMinorProps,
    clientEntityProperties: clientEntityProps,
  }: UpdateClientInput) {
    return this.databaseService.client.$transaction(async (prisma) => {
      const client = await prisma.client.update({
        where: { id: clientProperties.id },
        data: { ...clientProperties },
        include: {
          clientIndividualProperties: { include: { clientPassport: true } },
          clientIndividualMinorProperties: {
            include: {
              clientPassport: true,
            },
          },
          clientEntityProperties: true,
        },
      });

      if (
        client.clientCategory === ClientCategory.Individual &&
        clientIndividualProps
      ) {
        const { clientPassport, ...clientIndividualPropsData } =
          clientIndividualProps;

        const upsertClientPassportRes =
          clientPassport &&
          (await prisma.clientPassport.upsert({
            where: {
              id:
                client.clientIndividualProperties?.clientPassportId ||
                undefined,
            },
            create: clientPassport,
            update: clientPassport,
          }));

        const upsertClientIndividualPropertiesRes =
          await prisma.clientIndividualProperties.upsert({
            where: { id: client.clientIndividualProperties?.id },
            create: {
              clientPassportId: upsertClientPassportRes?.id,
              ...clientIndividualPropsData,
            },
            update: {
              ...clientIndividualPropsData,
            },
          });

        await prisma.client.update({
          where: { id: clientProperties.id },
          data: {
            clientIndividualPropertiesId:
              upsertClientIndividualPropertiesRes.id,
          },
        });
      }

      if (
        client.clientCategory === ClientCategory.IndividualMinor &&
        clientIndividualMinorProps
      ) {
        const {
          clientPassport,
          representativeIds,
          ...clientIndividualMinorPropertiesData
        } = clientIndividualMinorProps;

        const upsertClientPassportRes =
          clientPassport &&
          (await prisma.clientPassport.upsert({
            where: {
              id:
                client.clientIndividualMinorProperties?.clientPassportId ||
                undefined,
            },
            create: clientPassport,
            update: clientPassport,
          }));

        const upsertClientIndividualMinorPropertiesRes =
          await prisma.clientIndividualMinorProperties.upsert({
            where: { id: client.clientIndividualMinorProperties?.id },
            create: {
              clientPassportId: upsertClientPassportRes?.id,
              ...clientIndividualMinorPropertiesData,
            },
            update: {
              ...clientIndividualMinorPropertiesData,
            },
          });

        await prisma.client.update({
          where: { id: clientProperties.id },
          data: {
            clientIndividualMinorPropertiesId:
              upsertClientIndividualMinorPropertiesRes.id,
          },
        });

        if (representativeIds) {
          await prisma.clientToClientIndividualMinorProperties.deleteMany({
            where: {
              clientIndividualMinorPropertiesId:
                upsertClientIndividualMinorPropertiesRes.id,
            },
          });

          const newRepresentativeIds = [...new Set(representativeIds)];

          const clientToClientIndividualMinorPropertiesData: {
            clientId: number;
            clientIndividualMinorPropertiesId: number;
          }[] = [];

          for (const id of newRepresentativeIds) {
            const client = await prisma.client.findUnique({ where: { id } });

            if (client && client.clientCategory === ClientCategory.Individual) {
              clientToClientIndividualMinorPropertiesData.push({
                clientId: client.id,
                clientIndividualMinorPropertiesId:
                  upsertClientIndividualMinorPropertiesRes.id,
              });
            }
          }

          await prisma.clientToClientIndividualMinorProperties.createMany({
            data: clientToClientIndividualMinorPropertiesData,
          });
        }
      }

      if (
        client.clientCategory === ClientCategory.Entity &&
        clientEntityProps
      ) {
        const upsertClientEntityProperties =
          await prisma.clientEntityProperties.upsert({
            where: { id: client.clientEntityProperties?.id },
            create: clientEntityProps,
            update: clientEntityProps,
          });

        await prisma.client.update({
          where: { id: clientProperties.id },
          data: {
            clientEntityPropertiesId: upsertClientEntityProperties.id,
          },
        });
      }

      return client;
    });
  }
}
