import { inject, injectable } from 'inversify';

import { IScheduledPaymentRepository } from '@/schemas/scheduled-payment/scheduled-payment.repository.interface';
import { IScheduledPaymentService } from '@/schemas/scheduled-payment/scheduled-payment.service.interface';
import {
	CreateScheduledPaymentInput,
	GetScheduledPaymentsInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ScheduledPaymentService implements IScheduledPaymentService {
	constructor(
		@inject(TYPES.ScheduledPaymentRepository)
		private readonly scheduledPaymentRepository: IScheduledPaymentRepository,
	) {}

	public async getScheduledPayments({
		client_contract_id,
		options,
	}: GetScheduledPaymentsInput) {
		return this.scheduledPaymentRepository.findMany(
			client_contract_id,
			options,
		);
	}

	public async createScheduledPayment(input: CreateScheduledPaymentInput) {
		return this.scheduledPaymentRepository.create(input);
	}
}
