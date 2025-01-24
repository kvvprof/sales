import { gql } from '@/__types__';

export const CREATE_SCHEDULED_PAYMENTS = gql(`
	mutation CreateScheduledPaymentsInNewScheduledPayments($input: [CreateScheduledPaymentInput!]!) {
		createScheduledPayments(input: $input)
	}
`);
