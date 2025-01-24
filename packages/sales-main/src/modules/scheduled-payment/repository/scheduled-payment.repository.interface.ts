import {
  IFindManyOptions,
  BasicScheduledPayment,
  CreateScheduledPaymentInput,
} from '@/common';
import { ScheduledPayment } from '@/integrations';

export interface IScheduledPaymentRepository {
  findManyByClientContractId(
    clientContractId: number,
    options?: IFindManyOptions | null,
  ): Promise<{ scheduledPayments: ScheduledPayment[]; totalCount: number }>;
  create(data: CreateScheduledPaymentInput): Promise<BasicScheduledPayment>;
  deleteById(id: number): Promise<boolean>;
  createMany(data: CreateScheduledPaymentInput[]): Promise<boolean>;
}
