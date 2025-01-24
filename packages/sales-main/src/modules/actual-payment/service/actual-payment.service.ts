import { inject, injectable } from 'inversify';

import {
  TYPES,
  CreateActualPaymentInput,
  DeleteActualPaymentInput,
  GetActualPaymentsInput,
} from '@/common';
import { IActualPaymentRepository } from '@/modules/actual-payment/repository/actual-payment.repository.interface';
import { IActualPaymentService } from '@/modules/actual-payment/service/actual-payment.service.interface';

@injectable()
export class ActualPaymentService implements IActualPaymentService {
  constructor(
    @inject(TYPES.ActualPaymentRepository)
    private readonly actualPaymentRepository: IActualPaymentRepository,
  ) {}

  public async getActualPayments({
    clientContractId,
    options,
  }: GetActualPaymentsInput) {
    return this.actualPaymentRepository.findManyByClientContractId(
      clientContractId,
      options,
    );
  }

  public async createActualPayment(input: CreateActualPaymentInput) {
    return this.actualPaymentRepository.create(input);
  }

  public async deleteActualPayment({ id }: DeleteActualPaymentInput) {
    return { isDeleted: await this.actualPaymentRepository.deleteById(id) };
  }

  public async createActualPayments(input: CreateActualPaymentInput[]) {
    return this.actualPaymentRepository.createMany(input);
  }
}
