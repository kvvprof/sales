import { gql } from '@/__types__';

export const GET_PAYMENTS = gql(`
	query GetScheduledPaymentsInPaymentSchedule($getScheduledPaymentsInput: GetScheduledPaymentsInput!, $getActualPaymentsInput: GetActualPaymentsInput!) {
		getScheduledPayments(input: $getScheduledPaymentsInput) {
			scheduled_payments {
				id
				date
				payment
				scheduled_payment_type
			}
		}
		getActualPayments(input: $getActualPaymentsInput) {
			actual_payments {
				id
				date
				payment
			}
		}
	}
`);
