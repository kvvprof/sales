import { gql } from '@/__types__';

export const CREATE_AGENCY_CONTRACT_SIGNATORY = gql(`
	mutation CreateAgencyContractSignatoryInNewAgencyContractSignatory($input: CreateAgencyContractSignatoryInput!) {
		createAgencyContractSignatory(input: $input) {
			id
			fullName
			basedOn
			title
		}
	}	
`);
