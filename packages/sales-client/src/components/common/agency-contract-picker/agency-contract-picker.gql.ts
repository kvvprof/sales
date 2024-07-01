import { gql } from '@/__types__';

export const GET_AGENCIES = gql(`
	query GetAgenciesInAgencyContractPicker($input: GetAgenciesInput!) {
		getAgencies(input: $input) {
			agencies {
				id
				name
				common_db_contractors_id
			}
		}
	}
`);

export const GET_AGENCY_CONTRACTS = gql(`
	query GetAgencyContractsInAgencyContractPicker($input: GetAgencyContractsInput!) {
		getAgencyContracts(input: $input) {
			agency_contract_properties {
				id
				number
				date
				agency_contract_type
			}
			object {
				id
				name
				common_db_objects_id
			}
			agency {
				id
				name
				common_db_contractors_id
			}
		}
	}
`);
