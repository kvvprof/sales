import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IClientService } from '@/schemas/client/client.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ClientSchema implements ISchema {
	constructor(
		@inject(TYPES.ClientService) private readonly clientService: IClientService,
	) {}

	public getTypeDefs(): DocumentNode {
		return gql`
			enum ClientCategory {
				INDIVIDUAL
				INDIVIDUAL_MINOR
				ENTITY
			}

			type BasicClient {
				id: PositiveInt!
				full_name: NonEmptyString!
				inn: NonEmptyString
				phone: NonEmptyString
				email: NonEmptyString
				address: NonEmptyString
				client_category: ClientCategory!
			}

			type BasicClientPassport {
				number: NonEmptyString
				issued: NonEmptyString
				code: NonEmptyString
				place_of_birth: NonEmptyString
				registration_address: NonEmptyString
			}

			type BasicClientIndividualProperties {
				dob: Date
				snils: NonEmptyString
				client_passport: BasicClientPassport
			}

			type BasicClientIndividualMinorProperties {
				dob: Date
				snils: NonEmptyString
				birth_certificate: NonEmptyString
				client_passport: BasicClientPassport
				representatives: [BasicClient!]
			}

			type BasicClientEntityProperties {
				kpp: NonEmptyString
			}

			type Client {
				client_properties: BasicClient!
				client_individual_properties: BasicClientIndividualProperties
				client_individual_minor_properties: BasicClientIndividualMinorProperties
				client_entity_properties: BasicClientEntityProperties
			}

			type Clients {
				clients: [Client!]!
				total_count: NonNegativeInt!
			}

			input CreateClientPropertiesInput {
				full_name: NonEmptyString!
				inn: NonEmptyString
				phone: NonEmptyString
				address: NonEmptyString
				email: NonEmptyString
				client_category: ClientCategory!
			}

			input UpdateClientPropertiesInput {
				id: PositiveInt!
				full_name: NonEmptyString
				inn: NonEmptyString
				phone: NonEmptyString
				address: NonEmptyString
				email: NonEmptyString
			}

			input ClientPassportPropertiesInput {
				number: NonEmptyString
				issued: NonEmptyString
				code: NonEmptyString
				place_of_birth: NonEmptyString
				registration_address: NonEmptyString
			}

			input ClientIndividualPropertiesInput {
				dob: Date
				snils: NonEmptyString
				client_passport: ClientPassportPropertiesInput
			}

			input ClientIndividualMinorPropertiesInput {
				dob: Date
				snils: NonEmptyString
				birth_certificate: NonEmptyString
				client_passport: ClientPassportPropertiesInput
				representative_ids: [PositiveInt!]
			}

			input ClientEntityPropertiesInput {
				kpp: NonEmptyString
			}

			input GetClientInput {
				id: PositiveInt!
			}

			input GetClientsInput {
				options: BasicOptionsInput
			}

			input CreateClientInput {
				client_properties: CreateClientPropertiesInput!
				client_individual_properties: ClientIndividualPropertiesInput
				client_individual_minor_properties: ClientIndividualMinorPropertiesInput
				client_entity_properties: ClientEntityPropertiesInput
			}

			input UpdateClientInput {
				client_properties: UpdateClientPropertiesInput!
				client_individual_properties: ClientIndividualPropertiesInput
				client_individual_minor_properties: ClientIndividualMinorPropertiesInput
				client_entity_properties: ClientEntityPropertiesInput
			}

			type Query {
				getClient(input: GetClientInput!): Client!
				getClients(input: GetClientsInput): Clients!
			}

			type Mutation {
				createClient(input: CreateClientInput!): BasicClient!
				updateClient(input: UpdateClientInput!): BasicClient!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Query: {
				getClient: async (_, { input }) => {
					return this.clientService.getClient(input);
				},
				getClients: async (_, { input }) => {
					return this.clientService.getClients(input);
				},
			},
			Mutation: {
				createClient: async (_, { input }) => {
					return this.clientService.createClient(input);
				},
				updateClient: async (_, { input }) => {
					return this.clientService.updateClient(input);
				},
			},
		};
	}
}
