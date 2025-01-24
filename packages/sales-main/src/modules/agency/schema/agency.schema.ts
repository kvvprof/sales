import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IAgencyService } from '@/modules/agency/service/agency.service.interface';

@injectable()
export class AgencySchema implements ISchema {
  constructor(
    @inject(TYPES.AgencyService) private readonly agencyService: IAgencyService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicAgency {
        id: PositiveInt!
        commonDbContractorsId: PositiveInt!
        name: NonEmptyString!
        inn: NonEmptyString
      }

      type Agency {
        agency: BasicAgency!
        agencyContracts: [BasicAgencyContract!]
      }

      type Agencies {
        agencies: [BasicAgency!]!
        totalCount: NonNegativeInt!
      }

      type BasicAgencyContractSignatory {
        id: PositiveInt!
        fullName: NonEmptyString!
        basedOn: NonEmptyString
        title: NonEmptyString
      }

      input GetAgencyInput {
        id: PositiveInt!
      }

      input GetAgenciesInput {
        options: BasicOptionsInput
      }

      input CreateAgencyInput {
        name: NonEmptyString!
        commonDbContractorsId: PositiveInt!
        inn: NonEmptyString
      }

      input GetAgencyContractSignatoriesInput {
        agencyId: PositiveInt!
      }

      input CreateAgencyContractSignatoryInput {
        agencyId: PositiveInt!
        fullName: NonEmptyString!
        basedOn: NonEmptyString
        title: NonEmptyString
      }

      type Query {
        getAgency(input: GetAgencyInput!): Agency!
        getAgencies(input: GetAgenciesInput): Agencies!
        getAgencyContractSignatories(
          input: GetAgencyContractSignatoriesInput!
        ): [BasicAgencyContractSignatory!]!
      }

      type Mutation {
        createAgency(input: CreateAgencyInput!): BasicAgency!
        createAgencyContractSignatory(
          input: CreateAgencyContractSignatoryInput!
        ): BasicAgencyContractSignatory!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getAgency: async (_, { input }) => {
          return this.agencyService.getAgency(input);
        },
        getAgencies: async (_, { input }) => {
          return this.agencyService.getAgencies(input);
        },
        getAgencyContractSignatories: async (_, { input }) => {
          return this.agencyService.getAgencyContractSignatories(input);
        },
      },
      Mutation: {
        createAgency: async (_, { input }) => {
          return this.agencyService.createAgency(input);
        },
        createAgencyContractSignatory: async (_, { input }) => {
          return this.agencyService.createAgencyContractSignatory(input);
        },
      },
    };
  }
}
