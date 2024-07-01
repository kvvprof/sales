import { gql } from '@/__types__';

export const GET_CLIENT_INDIVIDUAL = gql(`
	query GetClientIndividualInClientIndividual($input: GetClientInput!) {
		getClient(input: $input) {
			client_properties {
				id
				full_name
				inn
				phone
				email
				address
				client_category
			}
			client_individual_properties {
				dob
				snils
				client_passport {
					number
					issued
					code
					place_of_birth
					registration_address
				}
			}
		}
	}
`);

export const CREATE_CLIENT_INDIVIDUAL = gql(`
	mutation CreateClientIndividualInClientIndividual($input: CreateClientInput!) {
		createClient(input: $input) {
			id
		}
	}
`);

export const UPDATE_CLIENT_INDIVIDUAL = gql(`
	mutation UpdateClientIndividualInClientIndividual($input: UpdateClientInput!) {
		updateClient(input: $input) {
			full_name
		}
	}
`);
