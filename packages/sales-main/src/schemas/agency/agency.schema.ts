import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IAgencyService } from '@/schemas/agency/agency.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class AgencySchema implements ISchema {
	constructor(
		@inject(TYPES.AgencyService) private readonly agencyService: IAgencyService,
	) {}

	public getTypeDefs(): DocumentNode {
		return gql`
			type BasicAgency {
				id: PositiveInt!
				common_db_contractors_id: PositiveInt!
				name: NonEmptyString!
				inn: NonEmptyString
			}

			type Agency {
				agency: BasicAgency!
				agency_contracts: [BasicAgencyContract!]
			}

			type Agencies {
				agencies: [BasicAgency!]!
				total_count: NonNegativeInt!
			}

			type BasicAgencyContractSignatory {
				id: PositiveInt!
				full_name: NonEmptyString!
				email: NonEmptyString!
				phone: NonEmptyString!
				title: NonEmptyString!
				based_on: NonEmptyString!
			}

			input GetAgencyInput {
				id: PositiveInt!
			}

			input GetAgenciesInput {
				options: BasicOptionsInput
			}

			input CreateAgencyInput {
				name: NonEmptyString!
				common_db_contractors_id: PositiveInt!
				inn: NonEmptyString
			}

			input GetAgencyContractSignatoriesInput {
				agency_id: PositiveInt!
			}

			input CreateAgencyContractSignatoryInput {
				agency_id: PositiveInt!
				full_name: NonEmptyString!
				email: NonEmptyString!
				phone: NonEmptyString!
				title: NonEmptyString!
				based_on: NonEmptyString!
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
