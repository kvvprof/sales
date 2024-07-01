import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IClientContractService } from '@/schemas/client-contract/client-contract.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ClientContractSchema implements ISchema {
	constructor(
		@inject(TYPES.ClientContractService)
		private readonly clientContractService: IClientContractService,
	) {}

	public getTypeDefs(): DocumentNode {
		return gql`
			enum ClientContractType {
				DDU
				DKP
			}

			type BasicClientContract {
				id: PositiveInt!
				number: NonEmptyString!
				date: Date!
				registration_date: Date
				price: PositiveDecimal!
				client_contract_type: ClientContractType!
			}

			type BasicDDUClientContractProperties {
				id: PositiveInt!
				is_escrow_discount: Boolean
				escrow_account_opening_date: Date
				escrow_period: Date
				escrow_account_number: NonEmptyString
				ddu_link: NonEmptyString
				return_account: NonEmptyString
			}

			type BasicClientContractToClient {
				client: BasicClient!
				is_main: Boolean!
				share: NonNegativeInt!
			}

			type AgencyContractClientContract {
				agency: BasicAgency!
				agency_contract: BasicAgencyContract!
			}

			type ClientContract {
				client_contract_properties: BasicClientContract!
				ddu_client_contract_properties: BasicDDUClientContractProperties
				clients: [BasicClientContractToClient!]!
				object: BasicObject!
				product: Product!
				manager: BasicUser
				real_estate_agent: BasicRealEstateAgent
				agency_contracts: [AgencyContractClientContract]
				bank: BasicBank
			}

			type ClientContracts {
				client_contracts: [ClientContract!]!
				total_count: NonNegativeInt!
			}

			input GetClientContractInput {
				id: PositiveInt!
			}

			input GetClientContractsInput {
				object_id: PositiveInt
				options: BasicOptionsInput
			}

			input GetClientContractsByIdsInput {
				ids: [PositiveInt!]!
			}

			input ClientContractToClientInput {
				client_id: PositiveInt!
				is_main: Boolean!
				share: NonNegativeInt!
			}

			input DDUClientContractPropertiesInput {
				ddu_link: NonEmptyString
				return_account: NonEmptyString
				escrow_account_opening_date: Date
				escrow_period: Date
				escrow_account_number: NonEmptyString
				is_escrow_discount: Boolean
			}

			input CreateClientContractPropertiesInput {
				number: NonEmptyString!
				date: Date!
				price: PositiveDecimal!
				registration_date: Date
				client_contract_type: ClientContractType!
				product_id: PositiveInt!
				manager_id: PositiveInt
				real_estate_agent_id: PositiveInt
				bank_id: PositiveInt
				clients: [ClientContractToClientInput!]!
				agency_contract_ids: [PositiveInt!]
			}

			input UpdateClientContractPropertiesInput {
				id: PositiveInt!
				number: NonEmptyString
				date: Date
				price: PositiveDecimal
				registration_date: Date
				product_id: PositiveInt
				manager_id: PositiveInt
				real_estate_agent_id: PositiveInt
				bank_id: PositiveInt
				clients: [ClientContractToClientInput!]
				agency_contract_ids: [PositiveInt!]
			}

			input CreateClientContractInput {
				client_contract_properties: CreateClientContractPropertiesInput!
				ddu_client_contract_properties: DDUClientContractPropertiesInput
			}

			input UpdateClientContractInput {
				client_contract_properties: UpdateClientContractPropertiesInput!
				ddu_client_contract_properties: DDUClientContractPropertiesInput
			}

			type Query {
				getClientContract(input: GetClientContractInput!): ClientContract!
				getClientContracts(input: GetClientContractsInput): ClientContracts!
				getClientContractsByIds(
					input: GetClientContractsByIdsInput!
				): ClientContracts!
			}

			type Mutation {
				createClientContract(
					input: CreateClientContractInput!
				): BasicClientContract!
				updateClientContract(
					input: UpdateClientContractInput!
				): BasicClientContract!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Query: {
				getClientContract: async (_, { input }) => {
					return this.clientContractService.getClientContract(input);
				},
				getClientContracts: async (_, { input }) => {
					return this.clientContractService.getClientContracts(input);
				},
				getClientContractsByIds: async (_, { input }) => {
					return this.clientContractService.getClientContractsByIds(input);
				},
			},
			Mutation: {
				createClientContract: async (_, { input }) => {
					return this.clientContractService.createClientContract(input);
				},
				updateClientContract: async (_, { input }) => {
					return this.clientContractService.updateClientContract(input);
				},
			},
		};
	}
}
