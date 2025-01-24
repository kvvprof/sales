import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
  query GetObjectsInMipAgencyContract {
		getObjects {
      id
      name
		}
	}
`);

export const GET_MIP_AGENCY_CONTRACT = gql(`
	query GetAgencyContractInMipAgencyContract($input: GetAgencyContractInput!) {
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
			mipAgencyContractProperties {
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
  mutation CreateAgencyContractInMipAgencyContract($input: CreateAgencyContractInput!) {
		createAgencyContract(input: $input) {
			id
		}
	}
`);

export const UPDATE_AGENCY_CONTRACT = gql(`
  mutation UpdateAgencyContractInMipAgencyContract($input: UpdateAgencyContractInput!) {
		updateAgencyContract(input: $input) {
			id
		}
	}
`);
