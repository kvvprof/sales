import { gql } from '@/__types__';

export const GET_CLIENT_INDIVIDUAL = gql(`
	query GetClientIndividualInClientIndividual($input: GetClientInput!) {
		getClient(input: $input) {
			clientProperties {
				id
				fullName
				inn
				phone
				email
				address
				clientCategory
			}
			clientIndividualProperties {
				dob
				snils
				clientPassport {
					number
					issued
					code
					placeOfBirth
					registrationAddress
				}
			}
			representatives {
        id
        fullName
        attorneyNumber
        attorneyDate
        authorizedBy
        authorizedRole
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
			fullName
		}
	}
`);
