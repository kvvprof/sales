import { gql } from '@/__types__';

export const GET_CLIENT_CONTRACTS_BY_IDS = gql(`
	query GetClientContractsByIdsInRightPanel($input: GetClientContractsByIdsInput!) {
		getClientContractsByIds(input: $input) {
			clientContracts {
				clientContractProperties {
					id
					date
					number
					price
					clientContractType
				}
				product {
					product {
						number
						productCategory
					}
					object {
						name
					}
				}
			}
		}
	}
`);
