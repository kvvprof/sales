import { gql } from '@/__types__';

export const GET_CLIENTS = gql(`
	query GetClientsInClientPicker($input: GetClientsInput!) {
		getClients(input: $input) {
			clients {
				clientProperties {
					id
					fullName
					clientCategory
				}
			}
		}
	}
`);
