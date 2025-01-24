import { gql } from '@/__types__';

export const GET_AGENCY_AND_AGENCY_CONTRACTS = gql(`
	query GetAgencyAndAgencyContractsInAgency(
		$agencyInput: GetAgencyInput!
		$agencyContractsInput:GetAgencyContractsInput!
	) {
		getAgency(input: $agencyInput) {
			agency {
				id
				name
				inn
				commonDbContractorsId
			}
		}
		getAgencyContracts(input: $agencyContractsInput) {
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
				commonDbObjectsId
				name
			}
		}
	}
`);

export const GET_COMMON_CONTRACTOR = gql(`
	query GetCommonContractorInAgency($input: GetCommonContractorInput!) {
		getCommonContractor(input: $input) {
			contractor {
				id
				name
				shortName
				inn
				kpp
				ogrn
				legalAddress
				actualAddress
				contacts
				reconciliationLink
				isActive
				propogatedAt
				phone
			}
			accounts {
				id
				number
				bank {
					id
					name
					city
					bik
					correspondentNumber
				}
			}
		}
	}
`);
