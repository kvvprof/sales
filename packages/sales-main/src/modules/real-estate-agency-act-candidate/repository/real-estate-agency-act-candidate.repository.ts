import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { AgencyContractType, IDatabaseService } from '@/integrations';
import { IRealEstateAgencyActCandidateRepository } from '@/modules/real-estate-agency-act-candidate/repository/real-estate-agency-act-candidate.repository.interface';

@injectable()
export class RealEstateAgencyActCandidateRepository
  implements IRealEstateAgencyActCandidateRepository
{
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async getRealEstateActCandidates() {
    return this.databaseService.client.clientContract.findMany({
      where: {
        isRealEstateAgencyActDisabled: false,
        realEstateAgencyActs: {
          none: {},
        },
        clientContractsToAgencyContracts: {
          some: {
            agencyContract: {
              agencyContractType:
                AgencyContractType.REAL_ESTATE_AGENCY_CONTRACT,
            },
          },
        },
      },
      include: {
        clientContractsToAgencyContracts: {
          include: {
            agencyContract: {
              include: {
                agency: true,
                realEstateAgencyContractProperties: {
                  include: { agencyContractCommission: true },
                },
              },
            },
          },
        },
      },
    });
  }
}
