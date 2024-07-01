import { gql } from '@/__types__';

export const CREATE_ACTUAL_PAYMENT = gql(`
	mutation CreateActualPaymentInNewActualPayment($input: CreateActualPaymentInput!) {
		createActualPayment(input: $input) {
			id
		}
	}
`);
