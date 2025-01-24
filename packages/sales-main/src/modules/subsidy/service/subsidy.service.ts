import { inject, injectable } from 'inversify';

import {
  CreateSubsidyInput,
  DeleteSubsidyInput,
  TYPES,
  UpdateSubsidyInput,
} from '@/common';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';
import { SUBSIDY_IN_USE } from '@/modules/subsidy/constants/subsidy.constants';
import { ISubsidyRepository } from '@/modules/subsidy/repository/subsidy.repository.interface';
import { ISubsidyService } from '@/modules/subsidy/service/subsidy.service.interface';

@injectable()
export class SubsidyService implements ISubsidyService {
  constructor(
    @inject(TYPES.SubsidyRepository)
    private readonly subsidyRepository: ISubsidyRepository,
    @inject(TYPES.ClientContractRepository)
    private readonly clientContractRepository: IClientContractRepository,
  ) {}

  public async getSubsidies() {
    return this.subsidyRepository.findMany();
  }

  public async createSubsidy(data: CreateSubsidyInput) {
    return this.subsidyRepository.create(data);
  }

  public async updateSubsidy(data: UpdateSubsidyInput) {
    return this.subsidyRepository.updateById(data);
  }

  public async deleteSubsidy({ id }: DeleteSubsidyInput) {
    const checkContractExistsByCriteriaRes =
      await this.clientContractRepository.checkContractExistsByCriteria({
        subsidyId: id,
      });

    if (checkContractExistsByCriteriaRes) {
      throw new Error(SUBSIDY_IN_USE);
    }

    return this.subsidyRepository.deleteById(id);
  }
}
