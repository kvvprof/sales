import { inject, injectable } from 'inversify';

import { IActualPaymentRepository } from '@/schemas/actual-payment/actual-payment.repository.interface';
import { IActualPaymentService } from '@/schemas/actual-payment/actual-payment.service.interface';
import {
	CreateActualPaymentInput,
	GetActualPaymentsInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ActualPaymentService implements IActualPaymentService {
	constructor(
		@inject(TYPES.ActualPaymentRepository)
		private readonly actualPaymentRepository: IActualPaymentRepository,
	) {}

	public async getActualPayments({
		client_contract_id,
		options,
	}: GetActualPaymentsInput) {
		return this.actualPaymentRepository.findMany(client_contract_id, options);
	}

	public async createActualPayment(input: CreateActualPaymentInput) {
		return this.actualPaymentRepository.create(input);
	}
}
