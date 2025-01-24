import { gql } from '@/__types__';

export const GET_REAL_ESTATE_AGENCY_ACT = gql(`
  query GetRealEstateAgencyActInRealEstateAgencyAct($input: GetRealEstateAgencyActInput!) {
    getRealEstateAgencyAct(input: $input) {
      agency {
        id
        name
        commonDbContractorsId
      }
      clientContract {
        clientContract {
          id
          number
          price
          clientContractType
        }
        object {
          id
          name
          commonDbObjectsId
        }
      }
      realEstateAgencyAct {
        id
        number
        date
        amount
        link
        retention
        note
      }
      agencyContract {
				agencyContract {
					id
					number
					date
					agencyContractType
				}
				realEstateAgencyContractProperties {
					agencyContractCommission {
						maxDays
						percent
						threshold
					}
				}
			}
    }
  }  
`);

export const UPDATE_REAL_ESTATE_AGENCY_ACT = gql(`
  mutation UpdateRealEstateAgencyActInRealEstateAgencyAct($input: UpdateRealEstateAgencyActInput!) {
    updateRealEstateAgencyAct(input: $input) {
      id
    }
  }  
`);
