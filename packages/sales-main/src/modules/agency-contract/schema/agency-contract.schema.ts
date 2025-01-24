import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IAgencyContractService } from '@/modules/agency-contract/service/agency-contract.service.interface';

@injectable()
export class AgencyContractSchema implements ISchema {
  constructor(
    @inject(TYPES.AgencyContractService)
    private readonly agencyContractService: IAgencyContractService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      enum AgencyContractType {
        REAL_ESTATE_AGENCY_CONTRACT
        MIP_AGENCY_CONTRACT
      }

      type BasicAgencyContract {
        id: PositiveInt!
        number: NonEmptyString!
        date: Date!
        agencyContractType: AgencyContractType!
        link: NonEmptyString
      }

      type BasicAgencyContractCommission {
        percent: NonNegativeDecimal!
        threshold: NonNegativeDecimal!
        maxDays: NonNegativeInt!
      }

      type BasicRealEstateAgencyContractProperties {
        agencyContractCommission: BasicAgencyContractCommission!
      }

      type BasicMipAgencyContractProperties {
        agencyContractCommission: BasicAgencyContractCommission!
      }

      type AgencyContract {
        entity: BasicEntity!
        object: BasicObject!
        agency: BasicAgency!
        responsibleUser: BasicUser
        agencyContractProperties: BasicAgencyContract!
        agencyContractSignatory: BasicAgencyContractSignatory
        realEstateAgencyContractProperties: BasicRealEstateAgencyContractProperties
        mipAgencyContractProperties: BasicMipAgencyContractProperties
      }

      input GetAgencyContractInput {
        id: PositiveInt!
      }

      input GetAgencyContractsInput {
        agencyId: PositiveInt!
        objectId: PositiveInt
      }

      input CreateAgencyContractPropertiesInput {
        date: Date!
        agencyId: PositiveInt!
        objectId: PositiveInt!
        entityId: PositiveInt!
        responsibleUserId: PositiveInt!
        agencyContractType: AgencyContractType!
        agencyContractSignatoryId: PositiveInt
      }

      input UpdateAgencyContractPropertiesInput {
        id: PositiveInt!
        number: NonEmptyString
        date: Date
        agencyId: PositiveInt
        objectId: PositiveInt
        entityId: PositiveInt
        responsibleUserId: PositiveInt
        agencyContractSignatoryId: PositiveInt
      }

      input AgencyContractCommissionInput {
        percent: NonNegativeDecimal!
        threshold: NonNegativeDecimal!
        maxDays: NonNegativeInt!
      }

      input RealEstateAgencyContractPropertiesInput {
        agencyContractCommission: AgencyContractCommissionInput!
      }

      input MipAgencyContractPropertiesInput {
        agencyContractCommission: AgencyContractCommissionInput!
      }

      input CreateAgencyContractInput {
        agencyContractProperties: CreateAgencyContractPropertiesInput!
        realEstateAgencyContractProperties: RealEstateAgencyContractPropertiesInput
        mipAgencyContractProperties: MipAgencyContractPropertiesInput
      }

      input UpdateAgencyContractInput {
        agencyContractProperties: UpdateAgencyContractPropertiesInput!
        realEstateAgencyContractProperties: RealEstateAgencyContractPropertiesInput
        mipAgencyContractProperties: MipAgencyContractPropertiesInput
      }

      type Query {
        getAgencyContract(input: GetAgencyContractInput!): AgencyContract!
        getAgencyContracts(input: GetAgencyContractsInput!): [AgencyContract!]!
      }

      type Mutation {
        createAgencyContract(
          input: CreateAgencyContractInput!
        ): BasicAgencyContract!
        updateAgencyContract(
          input: UpdateAgencyContractInput!
        ): BasicAgencyContract!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getAgencyContract: async (_, { input }) => {
          return this.agencyContractService.getAgencyContract(input);
        },
        getAgencyContracts: async (_, { input }) => {
          return this.agencyContractService.getAgencyContracts(input);
        },
      },
      Mutation: {
        createAgencyContract: async (_, { input }) => {
          return this.agencyContractService.createAgencyContract(input);
        },
        updateAgencyContract: async (_, { input }) => {
          return this.agencyContractService.updateAgencyContract(input);
        },
      },
    };
  }
}
