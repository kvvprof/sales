import {
	BasicScheduledPayment,
	CreateScheduledPaymentInput,
	GetScheduledPaymentsInput,
	ScheduledPayments,
} from '@/schemas/schema.types';

export interface IScheduledPaymentService {
	getScheduledPayments(
		input: GetScheduledPaymentsInput,
	): Promise<ScheduledPayments>;
	createScheduledPayment(
		input: CreateScheduledPaymentInput,
	): Promise<BasicScheduledPayment>;
}
