import { gql } from '@/__types__';

export const GET_PAYMENTS = gql(`
  query GetPaymentsInPaymentSchedule(
    $getScheduledPaymentsInput: GetScheduledPaymentsInput!,
    $getActualPaymentsInput: GetActualPaymentsInput!,
    $getClientContractInput: GetClientContractInput!
  ) {
    getScheduledPayments(input: $getScheduledPaymentsInput) {
      scheduledPayments {
        id
        date
        payment
        scheduledPaymentType
      }
    }
    getActualPayments(input: $getActualPaymentsInput) {
      actualPayments {
        id
        date
        payment
      }
    }
    getClientContract(input: $getClientContractInput) {
      clientContractProperties {
        number
        price
      }
    }
  }
`);

export const GET_ESCROW_ACCOUNTS_HISTORY_BY_DDU_NUMBER = gql(`
	query GetEscrowAccountsHistoryByDduNumberInPaymentSchedule($input: GetEscrowAccountsHistoryByDduNumberInput!) {
		getEscrowAccountsHistoryByDduNumber(input: $input) {
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
	}
`);

export const DELETE_SCHEDULED_PAYMENT = gql(`
	mutation DeleteScheduledPaymentInPaymentSchedule($input: DeleteScheduledPaymentInput!) {
		deleteScheduledPayment(input: $input) {
			isDeleted
		}
	}
`);

export const DELETE_ACTUAL_PAYMENT = gql(`
	mutation DeleteActualPaymentInPaymentSchedule($input: DeleteActualPaymentInput!) {
		deleteActualPayment(input: $input) {
			isDeleted
		}
	}
`);
