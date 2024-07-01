import { gql } from '@/__types__';

export const GET_REAL_ESTATE_AGENT = gql(`
	query GetRealEstateAgentInRealEstateAgent($input: GetRealEstateAgentInput!) {
		getRealEstateAgent(input: $input) {
			real_estate_agent {
				id
				full_name
				phone
			}
			agencies {
				id
				common_db_contractors_id
				name
				inn
			}
		}
	}
`);

export const CREATE_REAL_ESTATE_AGENT = gql(`
	mutation CreateRealEstateAgentInNewRealEstateAgent($input: CreateRealEstateAgentInput!) {
		createRealEstateAgent(input: $input) {
			id
		}
	}
`);

export const UPDATE_REAL_ESTATE_AGENT = gql(`
	mutation UpdateRealEstateAgentInRealEstateAgent($input: UpdateRealEstateAgentInput!) {
		updateRealEstateAgent(input: $input) {
			id
			full_name
		}
	}
`);
