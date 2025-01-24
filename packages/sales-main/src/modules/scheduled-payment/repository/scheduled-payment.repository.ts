import { inject, injectable } from 'inversify';

import { TYPES, IFindManyOptions, CreateScheduledPaymentInput } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IScheduledPaymentRepository } from '@/modules/scheduled-payment/repository/scheduled-payment.repository.interface';

@injectable()
export class ScheduledPaymentRepository implements IScheduledPaymentRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findManyByClientContractId(
    clientContractId: number,
    options?: IFindManyOptions | null,
  ) {
    const [scheduledPayments, totalCount] = await Promise.all([
      this.databaseService.client.scheduledPayment.findMany({
        where: { clientContractId },
        orderBy: { date: 'asc' },
        take: options?.limit,
        skip: options?.offset,
      }),

      this.databaseService.client.scheduledPayment.count({
        where: { clientContractId },
      }),
    ]);

    return { scheduledPayments, totalCount };
  }

  public async create(data: CreateScheduledPaymentInput) {
    return this.databaseService.client.scheduledPayment.create({ data });
  }

  public async deleteById(id: number) {
    return !!(await this.databaseService.client.scheduledPayment.delete({
      where: { id },
    }));
  }

  public async createMany(data: CreateScheduledPaymentInput[]) {
    return !!(await this.databaseService.client.scheduledPayment.createMany({
      data,
    }));
  }
}
