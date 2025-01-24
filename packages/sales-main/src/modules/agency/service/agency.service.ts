import { inject, injectable } from 'inversify';

import {
  TYPES,
  CreateAgencyContractSignatoryInput,
  CreateAgencyInput,
  GetAgenciesInput,
  GetAgencyContractSignatoriesInput,
  GetAgencyInput,
} from '@/common';
import {
  AGENCY_ALREADY_EXISTS,
  AGENCY_NOT_FOUND,
} from '@/modules/agency/constants/agency.constants';
import { IAgencyRepository } from '@/modules/agency/repository/agency.repository.interface';
import { IAgencyService } from '@/modules/agency/service/agency.service.interface';

@injectable()
export class AgencyService implements IAgencyService {
  constructor(
    @inject(TYPES.AgencyRepository)
    private readonly agencyRepository: IAgencyRepository,
  ) {}

  public async getAgency({ id }: GetAgencyInput) {
    const findAgencyByIdRes = await this.agencyRepository.findById(id);

    if (!findAgencyByIdRes) {
      throw new Error(AGENCY_NOT_FOUND);
    }

    const { agencyContracts, ...agency } = findAgencyByIdRes;

    return { agencyContracts, agency };
  }

  public async getAgencies(input?: GetAgenciesInput | null) {
    return this.agencyRepository.findMany(input?.options);
  }

  public async createAgency(input: CreateAgencyInput) {
    const findAgencyByCommonDbContractorsIdRes =
      await this.agencyRepository.findByCommonDbContractorsId(
        input.commonDbContractorsId,
      );

    if (findAgencyByCommonDbContractorsIdRes) {
      throw new Error(AGENCY_ALREADY_EXISTS);
    }

    return this.agencyRepository.create(input);
  }

  public async getAgencyContractSignatories(
    input: GetAgencyContractSignatoriesInput,
  ) {
    return this.agencyRepository.findManyAgencyContractSignatoriesByAgencyId(
      input.agencyId,
    );
  }

  public async createAgencyContractSignatory(
    input: CreateAgencyContractSignatoryInput,
  ) {
    return this.agencyRepository.createAgencyContractSignatory(input);
  }
}
