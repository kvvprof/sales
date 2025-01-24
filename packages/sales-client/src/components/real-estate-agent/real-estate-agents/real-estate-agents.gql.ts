import { gql } from '@/__types__';

export const GET_REAL_ESTATE_AGENTS = gql(`
	query GetRealEstateAgentsInRealEstateAgents($input: GetRealEstateAgentsInput!) {
		getRealEstateAgents(input: $input) {
			realEstateAgents {
				realEstateAgent {
					id
					fullName
					phone
				}
			}
			totalCount
		}
	}
`);
