import { gql } from '@/__types__';

export const CREATE_SCHEDULED_PAYMENT = gql(`
	mutation CreateScheduledPaymentInNewPaymentSchedule($input: CreateScheduledPaymentInput!) {
		createScheduledPayment(input: $input) {
			id
		}
	}
`);
