import { gql } from '@/__types__';

export const GET_AGENCIES = gql(`
	query GetAgenciesInAgencyPicker($input: GetAgenciesInput!) {
		getAgencies(input: $input) {
			agencies {
				id
				name
			}
		}
	}
`);
