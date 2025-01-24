import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IRealEstateAgencyActService } from '@/modules/real-estate-agency-act/service/real-estate-agency-act.service.interface';

@injectable()
export class RealEstateAgencyActSchema implements ISchema {
  constructor(
    @inject(TYPES.RealEstateAgencyActService)
    private readonly realEstateAgencyActService: IRealEstateAgencyActService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicRealEstateAgencyAct {
        id: PositiveInt!
        number: NonEmptyString!
        date: Date!
        amount: NonNegativeDecimal!
        link: NonEmptyString
        retention: NonNegativeDecimal
        note: NonEmptyString
      }

      type AgencyContractWithRealEstateAgencyProperties {
        agencyContract: BasicAgencyContract!
        realEstateAgencyContractProperties: BasicRealEstateAgencyContractProperties
      }

      type ClientContractWithObject {
        clientContract: BasicClientContract!
        object: BasicObject!
      }

      type RealEstateAgencyAct {
        realEstateAgencyAct: BasicRealEstateAgencyAct!
        agency: BasicAgency!
        clientContract: ClientContractWithObject!
        agencyContract: AgencyContractWithRealEstateAgencyProperties!
      }

      type RealEstateAgencyActs {
        realEstateAgencyActs: [RealEstateAgencyAct!]!
        totalCount: NonNegativeInt!
      }

      input CreateRealEstateAgencyActInput {
        date: Date!
        retention: NonNegativeDecimal
        note: NonEmptyString
        clientContractId: PositiveInt!
      }

      input UpdateRealEstateAgencyActInput {
        id: PositiveInt!
        date: Date
        retention: NonNegativeDecimal
        note: NonEmptyString
      }

      input GetRealEstateAgencyActInput {
        id: PositiveInt!
      }

      input GetRealEstateAgencyActsInput {
        options: BasicOptionsInput
      }

      type Query {
        getRealEstateAgencyAct(
          input: GetRealEstateAgencyActInput!
        ): RealEstateAgencyAct!
        getRealEstateAgencyActs(
          input: GetRealEstateAgencyActsInput
        ): RealEstateAgencyActs!
      }

      type Mutation {
        createRealEstateAgencyAct(
          input: CreateRealEstateAgencyActInput!
        ): BasicRealEstateAgencyAct!
        updateRealEstateAgencyAct(
          input: UpdateRealEstateAgencyActInput!
        ): BasicRealEstateAgencyAct!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getRealEstateAgencyAct: async (_, { input }) => {
          return this.realEstateAgencyActService.getRealEstateAgencyAct(input);
        },
        getRealEstateAgencyActs: async (_, { input }) => {
          return this.realEstateAgencyActService.getRealEstateAgencyActs(input);
        },
      },
      Mutation: {
        createRealEstateAgencyAct: async (_, { input }) => {
          return this.realEstateAgencyActService.createRealEstateAgencyAct(
            input,
          );
        },
        updateRealEstateAgencyAct: async (_, { input }) => {
          return this.realEstateAgencyActService.updateRealEstateAgencyAct(
            input,
          );
        },
      },
    };
  }
}
