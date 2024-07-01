import { gql } from '@/__types__';

export const GET_AGENCIES = gql(`
	query GetAgenciesInAgencies($input: GetAgenciesInput!) {
		getAgencies(input: $input) {
			agencies {
				id
				name
			}
			total_count
		}
	}
`);
