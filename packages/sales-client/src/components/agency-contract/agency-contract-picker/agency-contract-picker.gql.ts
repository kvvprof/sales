import { gql } from '@/__types__';

export const GET_AGENCIES = gql(`
	query GetAgenciesInAgencyContractPicker($input: GetAgenciesInput!) {
		getAgencies(input: $input) {
			agencies {
				id
				name
				commonDbContractorsId
			}
		}
	}
`);

export const GET_AGENCY_CONTRACTS = gql(`
	query GetAgencyContractsInAgencyContractPicker($input: GetAgencyContractsInput!) {
		getAgencyContracts(input: $input) {
			agencyContractProperties {
				id
				number
				date
				agencyContractType
			}
			mipAgencyContractProperties {
				agencyContractCommission {
					maxDays
					percent
					threshold
				}
			}
			realEstateAgencyContractProperties {
				agencyContractCommission {
					maxDays
					percent
					threshold
				}
			}
			object {
				id
				name
				commonDbObjectsId
			}
			agency {
				id
				name
				commonDbContractorsId
			}
		}
	}
`);
