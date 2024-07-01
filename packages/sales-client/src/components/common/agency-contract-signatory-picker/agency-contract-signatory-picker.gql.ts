import { gql } from '@/__types__';

export const GET_AGENCY_CONTRACT_SIGNATORIES = gql(`
	query GetAgencyContractSignatoriesInAgencyContractSignatoryPicker($input: GetAgencyContractSignatoriesInput!) {
		getAgencyContractSignatories(input: $input) {
			id
			full_name
			email
			phone
			title
			based_on
		}
	}
`);
