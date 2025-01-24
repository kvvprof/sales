import {
  BasicScheduledPayment,
  CreateScheduledPaymentInput,
  DeleteScheduledPaymentInput,
  GetScheduledPaymentsInput,
  IsDeleted,
  ScheduledPayments,
} from '@/common';

export interface IScheduledPaymentService {
  getScheduledPayments(
    input: GetScheduledPaymentsInput,
  ): Promise<ScheduledPayments>;
  createScheduledPayment(
    input: CreateScheduledPaymentInput,
  ): Promise<BasicScheduledPayment>;
  deleteScheduledPayment(
    input: DeleteScheduledPaymentInput,
  ): Promise<IsDeleted>;
  createScheduledPayments(
    inout: CreateScheduledPaymentInput[],
  ): Promise<boolean>;
}
