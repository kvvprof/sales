import {
  ActualPayments,
  BasicActualPayment,
  CreateActualPaymentInput,
  DeleteActualPaymentInput,
  GetActualPaymentsInput,
  IsDeleted,
} from '@/common';

export interface IActualPaymentService {
  getActualPayments(input: GetActualPaymentsInput): Promise<ActualPayments>;
  createActualPayment(
    input: CreateActualPaymentInput,
  ): Promise<BasicActualPayment>;
  deleteActualPayment(input: DeleteActualPaymentInput): Promise<IsDeleted>;
  createActualPayments(input: CreateActualPaymentInput[]): Promise<boolean>;
}
