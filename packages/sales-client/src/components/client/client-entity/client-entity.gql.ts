import { gql } from '@/__types__';

export const GET_CLIENT_ENTITY = gql(`
	query GetClientEntityInClientEntity($input: GetClientInput!) {
		getClient(input: $input) {
			clientProperties {
				id
				fullName
				inn
				phone
				email
				address
				clientCategory
			}
			clientEntityProperties {
				kpp
			}
			representatives {
        id
        fullName
        attorneyNumber
        attorneyDate
        authorizedBy
        authorizedRole
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
			fullName
		}
	}
`);
