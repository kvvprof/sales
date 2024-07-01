import { gql } from '@/__types__';

export const CREATE_AGENCY_CONTRACT_SIGNATORY = gql(`
	mutation CreateAgencyContractSignatoryInNewAgencyContractSignatory($input: CreateAgencyContractSignatoryInput!) {
		createAgencyContractSignatory(input: $input) {
			id
			full_name
			email
			based_on
			phone
			title
		}
	}	
`);
