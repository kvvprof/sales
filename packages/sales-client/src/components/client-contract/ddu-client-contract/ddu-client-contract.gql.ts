import { gql } from '@/__types__';

export const GET_CLIENT_CONTRACT = gql(`
	query GetClientContractInDduClientContract($input: GetClientContractInput!) {
		getClientContract(input: $input) {
			agencyContracts {
				agencyContract {
					id
					number
					date
					agencyContractType
				}
				mipAgencyContractProperties {
					agencyContractCommission {
						maxDays
						percent
						threshold
					}
				}
				realEstateAgencyContractProperties {
					agencyContractCommission {
						maxDays
						percent
						threshold
					}
				}
				agency {
					id
					name
					commonDbContractorsId
				}
			}
			bank {
				id
				name
				isVisible
			}
			subsidy {
				id
				name
				isVisible
			}
			clientContractProperties {
				id
				number
				date
				registrationDate
				price
				clientContractType
				comment
				link
			}
			clients {
				client {
					id
					fullName
					clientCategory
				}
				isMain
				share
			}
			manager {
				id
				fullName
			}
			object {
				id
				name
				commonDbObjectsId
			}
			product {
				object {
					id
					commonDbObjectsId
					name
				}
				product {
					id
					pricingProductsId
					number
					productCategory
				}
			}
			realEstateAgent {
				id
				fullName
			}
			dduClientContractProperties {
				id
				isEscrowDiscount
				escrowAccountOpeningDate
				escrowPeriod
				escrowAccountNumber
				dduLink
				returnAccount
			}
		}
	}
`);

export const CREATE_CLIENT_CONTRACT = gql(`
	mutation CreateClientContractIDduClientContract($input: CreateClientContractInput!) {
		createClientContract(input: $input) {
			id
		}
	}
`);

export const UPDATE_CLIENT_CONTRACT = gql(`
	mutation UpdateClientContractInDduClientContract($input: UpdateClientContractInput!) {
		updateClientContract(input: $input) {
			id
			number
		}
	}
`);
