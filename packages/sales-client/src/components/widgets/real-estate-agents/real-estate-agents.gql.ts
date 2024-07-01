import { gql } from '@/__types__';

export const GET_REAL_ESTATE_AGENTS = gql(`
	query GetRealEstateAgentsInRealEstateAgents($input: GetRealEstateAgentsInput!) {
		getRealEstateAgents(input: $input) {
			real_estate_agents {
				real_estate_agent {
					id
					full_name
					phone
				}
			}
			total_count
		}
	}
`);
