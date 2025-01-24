import { inject, injectable } from 'inversify';

import {
  CreateBankInput,
  DeleteBankInput,
  TYPES,
  UpdateBankInput,
} from '@/common';
import { BANK_IN_USE } from '@/modules/bank/constants/bank.constants';
import { IBankRepository } from '@/modules/bank/repository/bank.repository.interface';
import { IBankService } from '@/modules/bank/service/bank.service.interface';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';

@injectable()
export class BankService implements IBankService {
  constructor(
    @inject(TYPES.BankRepository)
    private readonly bankRepository: IBankRepository,
    @inject(TYPES.ClientContractRepository)
    private readonly clientContractRepository: IClientContractRepository,
  ) {}

  public async getBanks() {
    return this.bankRepository.findMany();
  }

  public async createBank(data: CreateBankInput) {
    return this.bankRepository.create(data);
  }

  public async updateBank(data: UpdateBankInput) {
    return this.bankRepository.updateById(data);
  }

  public async deleteBank({ id }: DeleteBankInput) {
    const checkContractExistsByCriteriaRes =
      await this.clientContractRepository.checkContractExistsByCriteria({
        bankId: id,
      });

    if (checkContractExistsByCriteriaRes) {
      throw new Error(BANK_IN_USE);
    }

    return this.bankRepository.deleteById(id);
  }
}
