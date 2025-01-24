import { gql } from '@/__types__';

export const GET_REAL_ESTATE_AGENCY_ACTS = gql(`
	query getRealEstateAgencyActsInRealEstateAgencyActs ($input: GetRealEstateAgencyActsInput) {
		getRealEstateAgencyActs(input: $input) {
			realEstateAgencyActs {
				agency {
					id
					inn
					name
					commonDbContractorsId
				}
				realEstateAgencyAct {
					id
					number
					date
					amount
					link
					retention
				}
				clientContract {
					clientContract {
						id
						number
					}
				}
				agencyContract {
					agencyContract {
						id
						number
						agencyContractType
					}
				}
			}
			totalCount
		}
	}
`);
