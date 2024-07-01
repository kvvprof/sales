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
			agency_contract_properties {
				id
				number
				date
				agency_contract_type
			}
			agency_contract_signatory {
				id
				full_name
				email
				phone
				title
				based_on
			}
			real_estate_agency_contract_properties {
				agency_contract_commission {
					percent
					threshold
					max_days
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
			responsible_user {
				id
				full_name
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
