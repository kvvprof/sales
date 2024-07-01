import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
  query GetObjectsInMIPAgencyContract {
		getObjects {
      id
      name
		}
	}
`);

export const GET_MIP_AGENCY_CONTRACT = gql(`
	query GetAgencyContractInMIPAgencyContract($input: GetAgencyContractInput!) {
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
			mip_agency_contract_properties {
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
  mutation CreateAgencyContractInMIPAgencyContract($input: CreateAgencyContractInput!) {
		createAgencyContract(input: $input) {
			id
		}
	}
`);

export const UPDATE_AGENCY_CONTRACT = gql(`
  mutation UpdateAgencyContractInMIPAgencyContract($input: UpdateAgencyContractInput!) {
		updateAgencyContract(input: $input) {
			id
		}
	}
`);
