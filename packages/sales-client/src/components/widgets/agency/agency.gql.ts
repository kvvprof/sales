import { gql } from '@/__types__';

export const GET_AGENCY_AND_AGENCY_CONTRACTS = gql(`
	query GetAgencyAndAgencyContractsInAgency(
		$agencyInput: GetAgencyInput!
		$agencyContractsInput:GetAgencyContractsInput!
	) {
		getAgency(input: $agencyInput) {
			agency {
				id
				name
				inn
				common_db_contractors_id
			}
		}
		getAgencyContracts(input: $agencyContractsInput) {
			agency_contract_properties {
				id
				number
				date
				agency_contract_type
			}
			object {
				id
				common_db_objects_id
				name
			}
		}
	}
`);

export const GET_COMMON_CONTRACTOR = gql(`
	query GetCommonContractorInAgency($input: GetCommonContractorInput!) {
		getCommonContractor(input: $input) {
			contractor {
				id
				name
				short_name
				inn
				kpp
				ogrn
				legal_address
				actual_address
				contacts
				reconciliation_link
				is_active
				propogated_at
				phone
			}
			accounts {
				id
				number
				bank {
					id
					name
					city
					bik
					correspondent_number
				}
			}
		}
	}
`);
