import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
	query GetObjectsInTransferActCandidates{
		getObjects {
			id
			name
			commonDbObjectsId
		}
	}
`);

export const GET_CLIENT_CONTRACTS_WITHOUT_TRANSFER_ACT = gql(`
	query GetClientContractsWithoutTransferActInTransferActCandidates($input: GetClientContractsInput!) {
		getClientContractsWithoutTransferAct(input: $input) {
			clientContracts {
				clientContractProperties {
					id
					number
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
			}
			totalCount
		}
	}
`);
