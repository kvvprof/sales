import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
	query GetObjectsInClientContracts {
		getObjects {
			id
			name
			commonDbObjectsId
		}
	}
`);

export const GET_CLIENT_CONTRACTS = gql(`
	query GetClientContractsInClientContracts($input: GetClientContractsInput!) {
		getClientContracts(input: $input) {
			clientContracts {
				clientContractProperties {
					id
					number
					price
					date
					clientContractType
				}
				clients {
					client {
						id
						fullName
					}
				}
				product {
					product {
						id
						number
						productCategory
					}
				}
				object {
					id
					name
				}
				agencyContracts {
            agencyContract {
              agencyContractType
          }
        }
			}
			totalCount
		}
	}
`);
