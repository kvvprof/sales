import { gql } from '@/__types__';

export const GET_CLIENTS = gql(`
	query GetClientsInClientPicker($input: GetClientsInput!) {
		getClients(input: $input) {
			clients {
				client_properties {
					id
					full_name
					client_category
				}
			}
		}
	}
`);
