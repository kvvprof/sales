import { gql } from '@/__types__';

export const CREATE_ACTUAL_PAYMENTS = gql(`
	mutation CreateActualPaymentsInNewActualPayments($input: [CreateActualPaymentInput!]!) {
		createActualPayments(input: $input)
	}
`);
