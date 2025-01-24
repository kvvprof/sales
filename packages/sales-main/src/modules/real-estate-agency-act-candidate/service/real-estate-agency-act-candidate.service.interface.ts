import { CandidateType } from '@/common';

export interface IRealEstateAgencyActCandidateService {
  getRealEstateAgencyActCandidates(): Promise<CandidateType[]>;
}
