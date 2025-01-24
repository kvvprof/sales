import { gql } from '@/__types__';

export const CREATE_NEW_REAL_ESTATE_AGENCY_ACT = gql(`
	mutation CreateRealEstateAgencyActInNewRealEstateAgencyAct($input: CreateRealEstateAgencyActInput!) {
    createRealEstateAgencyAct(input: $input) {
      id
    }
  }
`);
