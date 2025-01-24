import { inject, injectable } from 'inversify';

import {
  AgencyContractType,
  CreateRealEstateAgencyActInput,
  GetRealEstateAgencyActInput,
  GetRealEstateAgencyActsInput,
  TYPES,
  UpdateRealEstateAgencyActInput,
} from '@/common';
import { AGENCY_CONTRACT_NOT_FOUND } from '@/modules/agency-contract/constants/agency-contract.constants';
import { CLIENT_CONTRACT_NOT_FOUND } from '@/modules/client-contract/constants/client-contract.constants';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';
import { REAL_ESTATE_AGENCY_ACT_NOT_FOUND } from '@/modules/real-estate-agency-act/constants/real-estate-agency-act.constants';
import { IRealEstateAgencyActRepository } from '@/modules/real-estate-agency-act/repository/real-estate-agency-act.repository.interface';
import { IRealEstateAgencyActService } from '@/modules/real-estate-agency-act/service/real-estate-agency-act.service.interface';

@injectable()
export class RealEstateAgencyActService implements IRealEstateAgencyActService {
  constructor(
    @inject(TYPES.RealEstateAgencyActRepository)
    private readonly realEstateAgencyActRepository: IRealEstateAgencyActRepository,
    @inject(TYPES.ClientContractRepository)
    private readonly clientContractRepository: IClientContractRepository,
  ) {}

  public async getRealEstateAgencyAct({ id }: GetRealEstateAgencyActInput) {
    const findRealEstateAgencyActByIdRes =
      await this.realEstateAgencyActRepository.findById(id);

    if (!findRealEstateAgencyActByIdRes) {
      throw new Error(REAL_ESTATE_AGENCY_ACT_NOT_FOUND);
    }

    const {
      agency,
      clientContract: { object, ...clientContract },
      agencyContract: { realEstateAgencyContractProperties, ...agencyContract },
      ...realEstateAgencyActData
    } = findRealEstateAgencyActByIdRes;

    return {
      realEstateAgencyAct: realEstateAgencyActData,
      agency,
      clientContract: { clientContract, object },
      agencyContract: {
        agencyContract: agencyContract,
        realEstateAgencyContractProperties,
      },
    };
  }

  public async getRealEstateAgencyActs(
    input?: GetRealEstateAgencyActsInput | null,
  ) {
    const findRealEstateAgencyActsRes =
      await this.realEstateAgencyActRepository.findMany(input?.options);

    const { realEstateAgencyActs, totalCount } = findRealEstateAgencyActsRes;

    return {
      realEstateAgencyActs: realEstateAgencyActs.map(
        ({
          agency,
          clientContract: { object, ...clientContract },
          agencyContract: {
            realEstateAgencyContractProperties,
            ...agencyContract
          },
          ...realEstateAgencyAct
        }) => ({
          realEstateAgencyAct,
          agency,
          clientContract: { clientContract, object },
          agencyContract: {
            agencyContract,
            realEstateAgencyContractProperties,
          },
        }),
      ),
      totalCount,
    };
  }

  public async createRealEstateAgencyAct(
    input: CreateRealEstateAgencyActInput,
  ) {
    const findClientContractByIdRes =
      await this.clientContractRepository.findById(input.clientContractId);

    if (!findClientContractByIdRes) {
      throw new Error(CLIENT_CONTRACT_NOT_FOUND);
    }

    const agencyContract =
      findClientContractByIdRes.clientContractsToAgencyContracts.find(
        ({ agencyContract }) =>
          agencyContract.agencyContractType ===
          AgencyContractType.RealEstateAgencyContract,
      );

    if (!agencyContract) {
      throw new Error(AGENCY_CONTRACT_NOT_FOUND);
    }

    const amount = findClientContractByIdRes.price.mul(
      agencyContract.agencyContract
        .realEstateAgencyContractProperties!.agencyContractCommission.percent.div(
          100,
        )
        .toDecimalPlaces(2),
    );

    return this.realEstateAgencyActRepository.create({
      ...input,
      amount,
      number: findClientContractByIdRes.number,
      agencyContractId: agencyContract.agencyContract.id,
      agencyId: agencyContract.agencyContract.agencyId,
    });
  }

  public updateRealEstateAgencyAct(input: UpdateRealEstateAgencyActInput) {
    return this.realEstateAgencyActRepository.updateById(input);
  }
}
