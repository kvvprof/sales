import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IAgencyContractService } from '@/schemas/agency-contract/agency-contract.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

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
				agency_contract_type: AgencyContractType!
			}

			type BasicAgencyContractCommission {
				percent: NonNegativeDecimal!
				threshold: NonNegativeDecimal!
				max_days: NonNegativeInt!
			}

			type BasicRealEstateAgencyContractProperties {
				agency_contract_commission: BasicAgencyContractCommission!
			}

			type BasicMIPAgencyContractProperties {
				agency_contract_commission: BasicAgencyContractCommission!
			}

			type AgencyContract {
				entity: BasicEntity!
				object: BasicObject!
				agency: BasicAgency!
				responsible_user: BasicUser
				agency_contract_properties: BasicAgencyContract!
				agency_contract_signatory: BasicAgencyContractSignatory
				real_estate_agency_contract_properties: BasicRealEstateAgencyContractProperties
				mip_agency_contract_properties: BasicMIPAgencyContractProperties
			}

			input GetAgencyContractInput {
				id: PositiveInt!
			}

			input GetAgencyContractsInput {
				agency_id: PositiveInt!
				object_id: PositiveInt
			}

			input CreateAgencyContractPropertiesInput {
				agency_id: PositiveInt!
				object_id: PositiveInt!
				entity_id: PositiveInt!
				responsible_user_id: PositiveInt!
				agency_contract_type: AgencyContractType!
				agency_contract_signatory_id: PositiveInt
			}

			input UpdateAgencyContractPropertiesInput {
				id: PositiveInt!
				agency_id: PositiveInt
				object_id: PositiveInt
				entity_id: PositiveInt
				responsible_user_id: PositiveInt
				agency_contract_signatory_id: PositiveInt
			}

			input AgencyContractCommissionInput {
				percent: NonNegativeDecimal!
				threshold: NonNegativeDecimal!
				max_days: NonNegativeInt!
			}

			input RealEstateAgencyContractPropertiesInput {
				agency_contract_commission: AgencyContractCommissionInput!
			}

			input MIPAgencyContractPropertiesInput {
				agency_contract_commission: AgencyContractCommissionInput!
			}

			input CreateAgencyContractInput {
				agency_contract_properties: CreateAgencyContractPropertiesInput!
				real_estate_agency_contract_properties: RealEstateAgencyContractPropertiesInput
				mip_agency_contract_properties: MIPAgencyContractPropertiesInput
			}

			input UpdateAgencyContractInput {
				agency_contract_properties: UpdateAgencyContractPropertiesInput!
				real_estate_agency_contract_properties: RealEstateAgencyContractPropertiesInput
				mip_agency_contract_properties: MIPAgencyContractPropertiesInput
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
