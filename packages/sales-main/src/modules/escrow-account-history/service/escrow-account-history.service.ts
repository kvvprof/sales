import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import {
  EscrowAccountHistoryInput,
  GetEscrowAccountsHistoryByDduNumberInput,
  GetEscrowAccountsHistoryInput,
} from '@/common';
import { ESCROW_ACCOUNTS_HISTORY_NOT_FOUND } from '@/modules/escrow-account-history/constants/escrow-account-history.constants';
import { IEscrowAccountHistoryRepository } from '@/modules/escrow-account-history/repository/escrow-account-history.repository.interface';
import { IEscrowAccountHistoryService } from '@/modules/escrow-account-history/service/escrow-account-history.service.interface';

@injectable()
export class EscrowAccountHistoryService
  implements IEscrowAccountHistoryService
{
  constructor(
    @inject(TYPES.EscrowAccountHistoryRepository)
    private readonly escrowAccountHistoryRepository: IEscrowAccountHistoryRepository,
  ) {}

  public async createEscrowAccountsHistory(input: EscrowAccountHistoryInput[]) {
    if (!input.length) {
      throw new Error(ESCROW_ACCOUNTS_HISTORY_NOT_FOUND);
    }

    const escrowAccountHistory = input.map((input) => ({
      ...input,
      depositorInn: input.depositorInn || null,
      closingDate: input.closingDate || null,
      loanAgreementNumber:
        input.loanAgreementNumber && input.loanAgreementNumber !== '-'
          ? input.loanAgreementNumber
          : null,
      loanAgreementDate:
        input.loanAgreementDate && input.loanAgreementDate !== '-'
          ? input.loanAgreementDate
          : null,
    }));

    return this.escrowAccountHistoryRepository.create(escrowAccountHistory);
  }

  public async getEscrowAccountsHistory(
    input?: GetEscrowAccountsHistoryInput | null,
  ) {
    return this.escrowAccountHistoryRepository.findMany(input?.options);
  }

  public async getEscrowAccountsHistoryByDduNumber(
    input: GetEscrowAccountsHistoryByDduNumberInput,
  ) {
    return this.escrowAccountHistoryRepository.findManyByDduNumber(
      input.dduNumber,
    );
  }
}
