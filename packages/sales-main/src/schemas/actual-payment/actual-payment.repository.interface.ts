import { IFindManyOptions } from '@/common/find-many-options.interface';
import { ActualPayment } from '@/database/prisma/output';

import {
	BasicActualPayment,
	CreateActualPaymentInput,
} from '@/schemas/schema.types';

export interface IActualPaymentRepository {
	findMany(
		client_contract_id: number,
		options?: IFindManyOptions | null,
	): Promise<{ actual_payments: ActualPayment[]; total_count: number }>;
	create(data: CreateActualPaymentInput): Promise<BasicActualPayment>;
}
