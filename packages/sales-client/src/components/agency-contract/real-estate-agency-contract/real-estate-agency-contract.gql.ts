import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
  query GetObjectsInNewAgencyContract {
		getObjects {
      id
      name
		}
	}
`);

export const GET_REAL_ESTATE_AGENCY_CONTRACT = gql(`
	query GetAgencyContractInRealEstateAgencyContract($input: GetAgencyContractInput!) {
		getAgencyContract(input: $input) {
			agencyContractProperties {
				id
				number
				date
				agencyContractType
				link
			}
			agencyContractSignatory {
				id
				fullName
				basedOn
				title
			}
			realEstateAgencyContractProperties {
				agencyContractCommission {
					percent
					threshold
					maxDays
				}
			}
			entity {
				id
				name
			}
			object {
				id
				name
			}
			agency {
				id
				name
			}
			responsibleUser {
				id
				fullName
			}
		}
	}
`);

export const CREATE_AGENCY_CONTRACT = gql(`
  mutation CreateAgencyContractInNewAgencyContract($input: CreateAgencyContractInput!) {
		createAgencyContract(input: $input) {
			id
		}
	}
`);

export const UPDATE_AGENCY_CONTRACT = gql(`
  mutation UpdateAgencyContractInNewAgencyContract($input: UpdateAgencyContractInput!) {
		updateAgencyContract(input: $input) {
			id
		}
	}
`);
