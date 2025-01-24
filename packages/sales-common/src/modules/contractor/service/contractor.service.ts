import { inject, injectable } from 'inversify';

import {
  TYPES,
  GetCommonContractorInput,
  GetCommonContractorsInput,
} from '@/common';
import { AGENCY_NOT_FOUND } from '@/modules/contractor/constants/contractor.constants';
import { IContractorRepository } from '@/modules/contractor/repository/contractor.repository.interface';
import { IContractorService } from '@/modules/contractor/service/contractor.service.interface';

@injectable()
export class ContractorService implements IContractorService {
  constructor(
    @inject(TYPES.ContractorRepository)
    private readonly contractorRepository: IContractorRepository,
  ) {}

  public async getContractor({ id }: GetCommonContractorInput) {
    const findContractorByIdRes = await this.contractorRepository.findById(id);

    if (!findContractorByIdRes) {
      throw new Error(AGENCY_NOT_FOUND);
    }

    const { accounts, ...contractor } = findContractorByIdRes;

    return {
      contractor: {
        ...contractor,
        shortName: contractor.short_name,
        legalAddress: contractor.legal_address,
        actualAddress: contractor.actual_address,
        reconciliationLink: contractor.reconciliation_link,
        isActive: contractor.is_active,
        propogatedAt: contractor.propogated_at,
      },
      accounts: accounts.map(({ banks, ...account }) => ({
        ...account,
        bank: { ...banks, correspondentNumber: banks.correspondent_number },
      })),
    };
  }

  public async getContractors(input?: GetCommonContractorsInput | null) {
    const findContractorsRes = await this.contractorRepository.findMany(
      input?.options,
    );

    const { contractors, totalCount } = findContractorsRes;

    return {
      contractors: contractors.map(({ accounts, ...contractor }) => ({
        accounts: accounts.map(({ banks, ...account }) => ({
          ...account,
          bank: { ...banks, correspondentNumber: banks.correspondent_number },
        })),
        contractor: {
          ...contractor,
          shortName: contractor.short_name,
          legalAddress: contractor.legal_address,
          actualAddress: contractor.actual_address,
          reconciliationLink: contractor.reconciliation_link,
          isActive: contractor.is_active,
          propogatedAt: contractor.propogated_at,
        },
      })),
      totalCount,
    };
  }
}
