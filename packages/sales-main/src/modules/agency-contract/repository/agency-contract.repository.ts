import { format } from 'date-fns';
import { inject, injectable } from 'inversify';

import {
  TYPES,
  AgencyContractType,
  CreateAgencyContractInput,
  UpdateAgencyContractInput,
} from '@/common';
import { IDatabaseService } from '@/integrations';
import {
  RealEstateAgencyContractProperties,
  MipAgencyContractProperties,
} from '@/integrations';
import { IAgencyContractRepository } from '@/modules/agency-contract/repository/agency-contract.repository.interface';

@injectable()
export class AgencyContractRepository implements IAgencyContractRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.agencyContract.findUnique({
      where: { id },
      include: {
        entity: true,
        object: true,
        agency: true,
        responsibleUser: true,
        agencyContractSignatory: true,
        realEstateAgencyContractProperties: {
          include: { agencyContractCommission: true },
        },
        mipAgencyContractProperties: {
          include: { agencyContractCommission: true },
        },
      },
    });
  }

  public async findManyByAgencyIdAndObjectId(
    agencyId: number,
    objectId?: number,
  ) {
    return this.databaseService.client.agencyContract.findMany({
      where: { agencyId, objectId },
      include: {
        entity: true,
        object: true,
        agency: true,
        responsibleUser: true,
        agencyContractSignatory: true,
        realEstateAgencyContractProperties: {
          include: { agencyContractCommission: true },
        },
        mipAgencyContractProperties: {
          include: { agencyContractCommission: true },
        },
      },
    });
  }

  public async create({
    agencyContractProperties,
    realEstateAgencyContractProperties,
    mipAgencyContractProperties,
  }: CreateAgencyContractInput) {
    return this.databaseService.client.$transaction(async (prisma) => {
      let newRealEstateAgencyContractProperties: RealEstateAgencyContractProperties | null =
        null;
      let newMipAgencyContractProperties: MipAgencyContractProperties | null =
        null;

      if (
        realEstateAgencyContractProperties &&
        agencyContractProperties.agencyContractType ===
          AgencyContractType.RealEstateAgencyContract
      ) {
        const {
          agencyContractCommission,
          ...realEstateAgencyContractPropertiesData
        } = realEstateAgencyContractProperties;

        const createAgencyContractCommissionRes =
          await prisma.agencyContractCommission.create({
            data: agencyContractCommission,
          });

        newRealEstateAgencyContractProperties =
          await prisma.realEstateAgencyContractProperties.create({
            data: {
              agencyContractCommissionId: createAgencyContractCommissionRes.id,
              ...realEstateAgencyContractPropertiesData,
            },
          });
      }

      if (
        mipAgencyContractProperties &&
        agencyContractProperties.agencyContractType ===
          AgencyContractType.MipAgencyContract
      ) {
        const { agencyContractCommission, ...mipAgencyContractPropertiesData } =
          mipAgencyContractProperties;

        const createAgencyContractCommissionRes =
          await prisma.agencyContractCommission.create({
            data: agencyContractCommission,
          });

        newMipAgencyContractProperties =
          await prisma.mipAgencyContractProperties.create({
            data: {
              agencyContractCommissionId: createAgencyContractCommissionRes.id,
              ...mipAgencyContractPropertiesData,
            },
          });
      }

      const agencyContract = await prisma.agencyContract.create({
        data: {
          realEstateAgencyContractPropertiesId:
            newRealEstateAgencyContractProperties?.id,
          mipAgencyContractPropertiesId: newMipAgencyContractProperties?.id,
          number: String(agencyContractProperties.date),
          ...agencyContractProperties,
        },
      });

      const updatedAgencyContract = await prisma.agencyContract.update({
        where: { id: agencyContract.id },
        data: {
          number: `${format(agencyContract.date, 'dd/MM-yyyy')}-${agencyContract.id}`,
        },
      });

      return updatedAgencyContract;
    });
  }

  public async updateById({
    agencyContractProperties,
    realEstateAgencyContractProperties: realEstateAgencyContractProps,
    mipAgencyContractProperties: mipAgencyContractProps,
  }: UpdateAgencyContractInput) {
    return this.databaseService.client.$transaction(async (prisma) => {
      const agencyContract = await prisma.agencyContract.update({
        where: { id: agencyContractProperties.id },
        data: agencyContractProperties,
        include: {
          realEstateAgencyContractProperties: true,
          mipAgencyContractProperties: true,
        },
      });

      if (
        realEstateAgencyContractProps &&
        agencyContract.agencyContractType ===
          AgencyContractType.RealEstateAgencyContract
      ) {
        const {
          agencyContractCommission,
          ...realEstateAgencyContractPropsData
        } = realEstateAgencyContractProps;

        const upsertAgencyContractCommissionRes =
          await prisma.agencyContractCommission.upsert({
            where: {
              id:
                agencyContract.realEstateAgencyContractProperties
                  ?.agencyContractCommissionId || undefined,
            },
            create: agencyContractCommission,
            update: agencyContractCommission,
          });

        const upsertRealEstateAgencyContractPropertiesRes =
          await prisma.realEstateAgencyContractProperties.upsert({
            where: {
              id:
                agencyContract.realEstateAgencyContractPropertiesId ||
                undefined,
            },
            create: {
              agencyContractCommissionId: upsertAgencyContractCommissionRes.id,
              ...realEstateAgencyContractPropsData,
            },
            update: {
              agencyContractCommissionId: upsertAgencyContractCommissionRes.id,
              ...realEstateAgencyContractPropsData,
            },
          });

        await prisma.agencyContract.update({
          where: { id: agencyContractProperties.id },
          data: {
            realEstateAgencyContractPropertiesId:
              upsertRealEstateAgencyContractPropertiesRes.id,
          },
        });
      }

      if (
        mipAgencyContractProps &&
        agencyContract.agencyContractType ===
          AgencyContractType.MipAgencyContract
      ) {
        const { agencyContractCommission, ...mipAgencyContractPropsData } =
          mipAgencyContractProps;

        const upsertAgencyContractCommissionRes =
          await prisma.agencyContractCommission.upsert({
            where: {
              id:
                agencyContract.mipAgencyContractProperties
                  ?.agencyContractCommissionId || undefined,
            },
            create: agencyContractCommission,
            update: agencyContractCommission,
          });

        const upsertMipAgencyContractPropertiesRes =
          await prisma.mipAgencyContractProperties.upsert({
            where: {
              id: agencyContract.mipAgencyContractPropertiesId || undefined,
            },
            create: {
              agencyContractCommissionId: upsertAgencyContractCommissionRes.id,
              ...mipAgencyContractPropsData,
            },
            update: {
              agencyContractCommissionId: upsertAgencyContractCommissionRes.id,
              ...mipAgencyContractPropsData,
            },
          });

        await prisma.agencyContract.update({
          where: { id: agencyContractProperties.id },
          data: {
            mipAgencyContractPropertiesId:
              upsertMipAgencyContractPropertiesRes.id,
          },
        });
      }

      return agencyContract;
    });
  }
}
