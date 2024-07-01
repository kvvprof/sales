import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
	query GetObjectsInClientContracts {
		getObjects {
			id
			name
			common_db_objects_id
		}
	}
`);

export const GET_CLIENT_CONTRACTS = gql(`
	query GetClientContractsInClientContracts($input: GetClientContractsInput!) {
		getClientContracts(input: $input) {
			client_contracts {
				client_contract_properties {
					id
					number
					price
					date
					client_contract_type
				}
				clients {
					client {
						id
						full_name
					}
				}
				product {
					product {
						id
						number
						product_category
					}
				}
				object {
					id
					name
				}
			}
			total_count
		}
	}
`);
