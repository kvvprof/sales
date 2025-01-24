import { gql } from '@/__types__';

export const GET_REPRESENTATIVES_BY_CLIENT_IDS = gql(`
	query GetRepresentativesByClientIdsInRepresentativePicker($input: GetRepresentativesByClientIdsInput!) {
    getRepresentativesByClientIds(input: $input) {
      representative {
        id
        fullName
        attorneyNumber
        attorneyDate
        authorizedBy
        authorizedRole
      }
      client {
        id
        fullName
      }
    }
  }
`);
