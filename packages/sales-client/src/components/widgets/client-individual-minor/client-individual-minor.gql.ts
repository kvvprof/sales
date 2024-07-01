import { gql } from '@/__types__';

export const GET_CLIENT_INDIVIDUAL_MINOR = gql(`
	query GetClientIndividualMinorInClientIndividualMinor($input: GetClientInput!) {
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
			client_individual_minor_properties {
				dob
				snils
				birth_certificate
				client_passport {
					number
					issued
					code
					place_of_birth
					registration_address
				}
				representatives {
					id
					full_name
					client_category
				}
			}
		}
	}
`);

export const CREATE_CLIENT_INDIVIDUAL_MINOR = gql(`
	mutation CreateClientIndividualMinorInClientIndividualMinor($input: CreateClientInput!) {
		createClient(input: $input) {
			id
		}
	}
`);

export const UPDATE_CLIENT_INDIVIDUAL_MINOR = gql(`
	mutation UpdateClientIndividualMinorInClientIndividualMinor($input: UpdateClientInput!) {
		updateClient(input: $input) {
			full_name
		}
	}
`);
