import { inject, injectable } from 'inversify';

import {
  TYPES,
  CreateAgencyContractInput,
  GetAgencyContractInput,
  GetAgencyContractsInput,
  UpdateAgencyContractInput,
} from '@/common';
import { AGENCY_CONTRACT_NOT_FOUND } from '@/modules/agency-contract/constants/agency-contract.constants';
import { IAgencyContractRepository } from '@/modules/agency-contract/repository/agency-contract.repository.interface';
import { IAgencyContractService } from '@/modules/agency-contract/service/agency-contract.service.interface';

@injectable()
export class AgencyContractService implements IAgencyContractService {
  constructor(
    @inject(TYPES.AgencyContractRepository)
    private readonly agencyContractRepository: IAgencyContractRepository,
  ) {}

  public async getAgencyContract({ id }: GetAgencyContractInput) {
    const findAgencyContractByIdRes =
      await this.agencyContractRepository.findById(id);

    if (!findAgencyContractByIdRes) {
      throw new Error(AGENCY_CONTRACT_NOT_FOUND);
    }

    const {
      object,
      agency,
      entity,
      responsibleUser,
      realEstateAgencyContractProperties,
      mipAgencyContractProperties,
      agencyContractSignatory,
      ...agencyContractProperties
    } = findAgencyContractByIdRes;

    return {
      object,
      agency,
      entity,
      responsibleUser,
      agencyContractProperties,
      agencyContractSignatory,
      realEstateAgencyContractProperties,
      mipAgencyContractProperties,
    };
  }

  public async getAgencyContracts({
    agencyId,
    objectId,
  }: GetAgencyContractsInput) {
    const findAgencyContractsByAgencyIdAndObjectIdRes =
      await this.agencyContractRepository.findManyByAgencyIdAndObjectId(
        agencyId,
        objectId,
      );

    return findAgencyContractsByAgencyIdAndObjectIdRes.map(
      ({
        object,
        agency,
        entity,
        responsibleUser,
        realEstateAgencyContractProperties,
        mipAgencyContractProperties,
        agencyContractSignatory,
        ...agencyContractProperties
      }) => ({
        object,
        agency,
        entity,
        responsibleUser,
        agencyContractProperties,
        agencyContractSignatory,
        realEstateAgencyContractProperties,
        mipAgencyContractProperties,
      }),
    );
  }

  public async createAgencyContract(input: CreateAgencyContractInput) {
    return this.agencyContractRepository.create(input);
  }

  public async updateAgencyContract(input: UpdateAgencyContractInput) {
    return this.agencyContractRepository.updateById(input);
  }
}
