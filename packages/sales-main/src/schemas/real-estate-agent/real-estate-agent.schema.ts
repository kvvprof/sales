import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IRealEstateAgentService } from '@/schemas/real-estate-agent/real-estate-agent.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

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
				full_name: NonEmptyString!
				phone: NonEmptyString
			}

			type RealEstateAgent {
				real_estate_agent: BasicRealEstateAgent!
				agencies: [BasicAgency!]!
			}

			type RealEstateAgents {
				real_estate_agents: [RealEstateAgent!]!
				total_count: NonNegativeInt!
			}

			input GetRealEstateAgentInput {
				id: PositiveInt!
			}

			input GetRealEstateAgentsInput {
				options: BasicOptionsInput
			}

			input CreateRealEstateAgentInput {
				full_name: NonEmptyString!
				phone: NonEmptyString
				agency_ids: [PositiveInt!]!
			}

			input UpdateRealEstateAgentInput {
				id: PositiveInt!
				full_name: NonEmptyString
				phone: NonEmptyString
				agency_ids: [PositiveInt!]
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
