import { gql } from '@/__types__';

export const UPDATE_REPRESENTATIVE = gql(`
	mutation UpdateRepresentativeInNewRepresentative($input: UpdateRepresentativeInput!) {
		updateRepresentative(input: $input) {
			id
      fullName
      attorneyNumber
      attorneyDate
      authorizedBy
      authorizedRole
		}
	}	
`);
