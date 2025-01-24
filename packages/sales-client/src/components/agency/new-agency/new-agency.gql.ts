import { gql } from '@/__types__';

export const GET_CONTRACTORS = gql(`
	query GetCommonContractorsInNewAgency($input: GetCommonContractorsInput!) {
		getCommonContractors(input: $input) {
			contractors {
				contractor {
					id
					name
					shortName
					inn
					kpp
					ogrn
					legalAddress
					actualAddress
					contacts
					reconciliationLink
					isActive
					propogatedAt
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
						correspondentNumber
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
