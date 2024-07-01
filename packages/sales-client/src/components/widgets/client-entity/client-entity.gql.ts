import { gql } from '@/__types__';

export const GET_CLIENT_ENTITY = gql(`
	query GetClientEntityInClientEntity($input: GetClientInput!) {
		getClient(input: $input) {
			client_properties {
				id
				full_name
				inn
				phone
				email
				address
				client_category
			}
			client_entity_properties {
				kpp
			}
		}
	}
`);

export const CREATE_CLIENT_ENTITY = gql(`
	mutation CreateClientEntityInClientEntity($input: CreateClientInput!) {
		createClient(input: $input) {
			id
		}
	}
`);

export const UPDATE_CLIENT_ENTITY = gql(`
	mutation UpdateClientEntityInClientEntity($input: UpdateClientInput!) {
		updateClient(input: $input) {
			full_name
		}
	}
`);
