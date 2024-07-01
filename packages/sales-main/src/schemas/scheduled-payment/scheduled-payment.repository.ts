import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { IScheduledPaymentRepository } from '@/schemas/scheduled-payment/scheduled-payment.repository.interface';
import { CreateScheduledPaymentInput } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ScheduledPaymentRepository implements IScheduledPaymentRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findMany(
		client_contract_id: number,
		options?: IFindManyOptions | null,
	) {
		const [scheduled_payments, total_count] = await Promise.all([
			this.databaseService.client.scheduledPayment.findMany({
				where: { client_contract_id },
				orderBy: { date: 'asc' },
				take: options?.limit,
				skip: options?.offset,
			}),

			this.databaseService.client.scheduledPayment.count({
				where: { client_contract_id },
			}),
		]);

		return { scheduled_payments, total_count };
	}

	public async create(data: CreateScheduledPaymentInput) {
		return this.databaseService.client.scheduledPayment.create({ data });
	}
}
