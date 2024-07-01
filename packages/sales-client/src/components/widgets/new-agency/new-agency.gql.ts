import { gql } from '@/__types__';

export const GET_CONTRACTORS = gql(`
	query GetCommonContractorsInNewAgency($input: GetCommonContractorsInput!) {
		getCommonContractors(input: $input) {
			contractors {
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
	}
`);

export const CREATE_AGENCY = gql(`
	mutation CreateAgencyInNewAgency($input: CreateAgencyInput!) {
		createAgency(input: $input) {
			id
		}
	}	
`);
