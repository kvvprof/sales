import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IRealEstateAgentService } from '@/modules/real-estate-agent/service/real-estate-agent.service.interface';

@injectable()
export class RealEstateAgentSchema implements ISchema {
  constructor(
    @inject(TYPES.RealEstateAgentService)
    private readonly realEstateAgentService: IRealEstateAgentService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicRealEstateAgent {
        id: PositiveInt!
        fullName: NonEmptyString!
        phone: NonEmptyString
        oneGtId: PositiveInt
      }

      type RealEstateAgent {
        realEstateAgent: BasicRealEstateAgent!
        agencies: [BasicAgency!]!
      }

      type RealEstateAgents {
        realEstateAgents: [RealEstateAgent!]!
        totalCount: NonNegativeInt!
      }

      input GetRealEstateAgentInput {
        id: PositiveInt!
      }

      input GetRealEstateAgentsInput {
        options: BasicOptionsInput
      }

      input CreateRealEstateAgentInput {
        fullName: NonEmptyString!
        phone: NonEmptyString
        oneGtId: PositiveInt
        agencyIds: [PositiveInt!]!
      }

      input UpdateRealEstateAgentInput {
        id: PositiveInt!
        fullName: NonEmptyString
        phone: NonEmptyString
        oneGtId: PositiveInt
        agencyIds: [PositiveInt!]
      }

      type Query {
        getRealEstateAgent(input: GetRealEstateAgentInput!): RealEstateAgent!
        getRealEstateAgents(input: GetRealEstateAgentsInput): RealEstateAgents!
      }

      type Mutation {
        createRealEstateAgent(
          input: CreateRealEstateAgentInput!
        ): BasicRealEstateAgent!
        updateRealEstateAgent(
          input: UpdateRealEstateAgentInput!
        ): BasicRealEstateAgent!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getRealEstateAgent: async (_, { input }) => {
          return this.realEstateAgentService.getRealEstateAgent(input);
        },
        getRealEstateAgents: async (_, { input }) => {
          return this.realEstateAgentService.getRealEstateAgents(
            input || undefined,
          );
        },
      },
      Mutation: {
        createRealEstateAgent: async (_, { input }) => {
          return this.realEstateAgentService.createRealEstateAgent(input);
        },
        updateRealEstateAgent: async (_, { input }) => {
          return this.realEstateAgentService.updateRealEstateAgent(input);
        },
      },
    };
  }
}
