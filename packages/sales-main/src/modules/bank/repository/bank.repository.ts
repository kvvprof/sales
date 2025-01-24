import { inject, injectable } from 'inversify';

import { CreateBankInput, TYPES, UpdateBankInput } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IBankRepository } from '@/modules/bank/repository/bank.repository.interface';

@injectable()
export class BankRepository implements IBankRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findMany() {
    return this.databaseService.client.bank.findMany({
      orderBy: { id: 'desc' },
    });
  }

  public async create(data: CreateBankInput) {
    return this.databaseService.client.bank.create({ data });
  }

  public async updateById({ id, ...data }: UpdateBankInput) {
    return this.databaseService.client.bank.update({
      where: { id },
      data: { ...data, isVisible: data.isVisible ?? undefined },
    });
  }

  public async deleteById(id: number) {
    return !!(await this.databaseService.client.bank.delete({
      where: { id },
    }));
  }
}
