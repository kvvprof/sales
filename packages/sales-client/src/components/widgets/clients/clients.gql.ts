import { gql } from '@/__types__';

export const GET_CLIENTS = gql(`
	query GetClientsInClients($input: GetClientsInput!) {
		getClients(input: $input) {
			clients {
				client_properties {
					id
					full_name
					client_category
				}
			}
			total_count
		}
	}
`);
