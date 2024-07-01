import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { IActualPaymentRepository } from '@/schemas/actual-payment/actual-payment.repository.interface';
import { CreateActualPaymentInput } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ActualPaymentRepository implements IActualPaymentRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findMany(
		client_contract_id: number,
		options?: IFindManyOptions | null,
	) {
		const [actual_payments, total_count] = await Promise.all([
			this.databaseService.client.actualPayment.findMany({
				where: { client_contract_id },
				orderBy: { date: 'asc' },
				take: options?.limit,
				skip: options?.offset,
			}),

			this.databaseService.client.actualPayment.count({
				where: { client_contract_id },
			}),
		]);

		return { actual_payments, total_count };
	}

	public async create(data: CreateActualPaymentInput) {
		return this.databaseService.client.actualPayment.create({ data });
	}
}
