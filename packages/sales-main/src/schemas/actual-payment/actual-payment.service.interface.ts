import {
	ActualPayments,
	BasicActualPayment,
	CreateActualPaymentInput,
	GetActualPaymentsInput,
} from '@/schemas/schema.types';

export interface IActualPaymentService {
	getActualPayments(input: GetActualPaymentsInput): Promise<ActualPayments>;
	createActualPayment(
		input: CreateActualPaymentInput,
	): Promise<BasicActualPayment>;
}
