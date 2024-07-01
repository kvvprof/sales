import { gql } from '@/__types__';

export const GET_CLIENT_CONTRACT = gql(`
	query GetClientContractInDDUClientContract($input: GetClientContractInput!) {
		getClientContract(input: $input) {
			agency_contracts {
				agency_contract {
					id
					number
					date
					agency_contract_type
				}
				agency {
					id
					name
					common_db_contractors_id
				}
			}
			bank {
				id
				name
			}
			client_contract_properties {
				id
				number
				date
				registration_date
				price
				client_contract_type
			}
			clients {
				client {
					id
					full_name
					client_category
				}
				is_main
				share
			}
			ddu_client_contract_properties {
				id
				is_escrow_discount
				escrow_account_opening_date
				escrow_period
				escrow_account_number
				ddu_link
				return_account
			}
			manager {
				id
				full_name
			}
			object {
				id
				name
				common_db_objects_id
			}
			product {
				object {
					id
					common_db_objects_id
					name
				}
				product {
					id
					pricing_products_id
					number
					product_category
				}
			}
			real_estate_agent {
				id
				full_name
			}
		}
	}
`);

export const CREATE_CLIENT_CONTRACT = gql(`
	mutation CreateClientContractInDDUClientContract($input: CreateClientContractInput!) {
		createClientContract(input: $input) {
			id
		}
	}
`);

export const UPDATE_CLIENT_CONTRACT = gql(`
	mutation UpdateClientContractInDDUClientContract($input: UpdateClientContractInput!) {
		updateClientContract(input: $input) {
			id
			number
		}
	}
`);
