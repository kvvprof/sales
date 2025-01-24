import { gql } from '@/__types__';

export const CREATE_REPRESENTATIVE = gql(`
	mutation CreateRepresentativeInNewRepresentative($input: CreateRepresentativeInput!) {
		createRepresentative(input: $input) {
			id
      fullName
      attorneyNumber
      attorneyDate
      authorizedBy
      authorizedRole
		}
	}	
`);
