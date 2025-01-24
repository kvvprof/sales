import { gql } from '@/__types__';

export const GET_REAL_ESTATE_AGENCY_ACT_CANDIDATES = gql(`
	query GetRealEstateAgencyActCandidatesInRealEstateAgencyActCandidates {
		getRealEstateAgencyActCandidates {
			clientContractId
			clientContractNumber
			clientContractType
			clientContractPrice
			agencyContractId
			agencyContractNumber
			agencyContractPercent
			agencyContractThreshold
			agencyContractMaxDays
			agencyId
			agencyName
			transactionAmount
			paymentPercentage
			payAmount
			mostRecentTransactionDate
			daysElapsed
		}
	}
`);

export const CREATE_REAL_ESTATE_AGENCY_ACT = gql(`
	mutation CreateRealEstateAgencyActInRealEstateAgencyActCandidates($input: CreateRealEstateAgencyActInput!) {
		createRealEstateAgencyAct(input: $input) {
			id
		}
	}
`);
