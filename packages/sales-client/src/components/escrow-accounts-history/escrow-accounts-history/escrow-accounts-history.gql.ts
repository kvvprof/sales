import { gql } from '@/__types__';

export const CREATE_ESCROW_ACCOUNTS_HISTORY = gql(`
	mutation CreateEscrowAccountsHistory($input: [EscrowAccountHistoryInput!]!) {
		createEscrowAccountsHistory(input: $input)
	}
`);

export const GET_ESCROW_ACCOUNTS_HISTORY = gql(`
	query GetEscrowAccountsHistory($input: GetEscrowAccountsHistoryInput) {
		getEscrowAccountsHistory(input: $input) {
			escrowAccountsHistory {
				id
				status
				number
				openingDate
				depositedAmount
				incomingBalance
				dateOfTransaction
				transactionAmount
				outgoingBalance
				expirationDate
				depositor
				depositorInn
				dduNumber
				dduDate
				loanAgreementNumber
				loanAgreementDate
				closingDate
				builderInn
			}
			totalCount
		}
	}
`);
