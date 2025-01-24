import { gql } from '@/__types__';

export const GET_CLIENT_INDIVIDUAL_MINOR = gql(`
	query GetClientIndividualMinorInClientIndividualMinor($input: GetClientInput!) {
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
			clientIndividualMinorProperties {
				dob
				snils
				birthCertificate
				clientPassport {
					number
					issued
					code
					placeOfBirth
					registrationAddress
				}
				representatives {
					id
					fullName
					clientCategory
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
			fullName
		}
	}
`);
