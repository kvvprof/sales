import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import {
  CreateScheduledPaymentInput,
  DeleteScheduledPaymentInput,
  GetScheduledPaymentsInput,
} from '@/common';
import { IScheduledPaymentRepository } from '@/modules/scheduled-payment/repository/scheduled-payment.repository.interface';
import { IScheduledPaymentService } from '@/modules/scheduled-payment/service/scheduled-payment.service.interface';

@injectable()
export class ScheduledPaymentService implements IScheduledPaymentService {
  constructor(
    @inject(TYPES.ScheduledPaymentRepository)
    private readonly scheduledPaymentRepository: IScheduledPaymentRepository,
  ) {}

  public async getScheduledPayments({
    clientContractId,
    options,
  }: GetScheduledPaymentsInput) {
    return this.scheduledPaymentRepository.findManyByClientContractId(
      clientContractId,
      options,
    );
  }

  public async createScheduledPayment(input: CreateScheduledPaymentInput) {
    return this.scheduledPaymentRepository.create(input);
  }

  public async deleteScheduledPayment({ id }: DeleteScheduledPaymentInput) {
    return { isDeleted: await this.scheduledPaymentRepository.deleteById(id) };
  }

  public async createScheduledPayments(input: CreateScheduledPaymentInput[]) {
    return this.scheduledPaymentRepository.createMany(input);
  }
}
