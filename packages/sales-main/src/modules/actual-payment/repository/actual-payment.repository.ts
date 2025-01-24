import { inject, injectable } from 'inversify';

import { TYPES, IFindManyOptions, CreateActualPaymentInput } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IActualPaymentRepository } from '@/modules/actual-payment/repository/actual-payment.repository.interface';

@injectable()
export class ActualPaymentRepository implements IActualPaymentRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findManyByClientContractId(
    clientContractId: number,
    options?: IFindManyOptions | null,
  ) {
    const [actualPayments, totalCount] = await Promise.all([
      this.databaseService.client.actualPayment.findMany({
        where: { clientContractId },
        orderBy: { date: 'asc' },
        take: options?.limit,
        skip: options?.offset,
      }),

      this.databaseService.client.actualPayment.count({
        where: { clientContractId },
      }),
    ]);

    return { actualPayments, totalCount };
  }

  public async create(data: CreateActualPaymentInput) {
    return this.databaseService.client.actualPayment.create({ data });
  }

  public async deleteById(id: number) {
    return !!(await this.databaseService.client.actualPayment.delete({
      where: { id },
    }));
  }

  public async createMany(data: CreateActualPaymentInput[]) {
    return !!(await this.databaseService.client.actualPayment.createMany({
      data,
    }));
  }
}
