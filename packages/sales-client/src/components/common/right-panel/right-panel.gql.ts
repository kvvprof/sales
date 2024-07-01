import { gql } from '@/__types__';

export const GET_CLIENT_CONTRACTS_BY_IDS = gql(`
	query GetClientContractsByIdsInRightPanel($input: GetClientContractsByIdsInput!) {
		getClientContractsByIds(input: $input) {
			client_contracts {
				client_contract_properties {
					id
					date
					number
					price
					client_contract_type
				}
				product {
					product {
						number
						product_category
					}
					object {
						name
					}
				}
			}
		}
	}
`);
