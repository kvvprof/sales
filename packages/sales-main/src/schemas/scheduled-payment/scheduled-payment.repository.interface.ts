import { IFindManyOptions } from '@/common/find-many-options.interface';
import { ScheduledPayment } from '@/database/prisma/output';

import {
	BasicScheduledPayment,
	CreateScheduledPaymentInput,
} from '@/schemas/schema.types';

export interface IScheduledPaymentRepository {
	findMany(
		client_contract_id: number,
		options?: IFindManyOptions | null,
	): Promise<{ scheduled_payments: ScheduledPayment[]; total_count: number }>;
	create(data: CreateScheduledPaymentInput): Promise<BasicScheduledPayment>;
}
