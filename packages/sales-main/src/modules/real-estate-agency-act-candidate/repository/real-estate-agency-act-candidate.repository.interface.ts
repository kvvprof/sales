import {
  Agency,
  AgencyContract,
  AgencyContractCommission,
  ClientContract,
  RealEstateAgencyContractProperties,
} from '@/integrations';

export interface IRealEstateAgencyActCandidate extends ClientContract {
  clientContractsToAgencyContracts: {
    agencyContract: AgencyContract & {
      realEstateAgencyContractProperties:
        | (RealEstateAgencyContractProperties & {
            agencyContractCommission: AgencyContractCommission;
          })
        | null;
      agency: Agency;
    };
  }[];
}

export interface IRealEstateAgencyActCandidateRepository {
  getRealEstateActCandidates(): Promise<IRealEstateAgencyActCandidate[]>;
}
