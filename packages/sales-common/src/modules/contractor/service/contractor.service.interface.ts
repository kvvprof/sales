import {
  CommonContractor,
  CommonContractors,
  GetCommonContractorInput,
  GetCommonContractorsInput,
} from '@/common';

export interface IContractorService {
  getContractor(input: GetCommonContractorInput): Promise<CommonContractor>;
  getContractors(
    input?: GetCommonContractorsInput | null,
  ): Promise<CommonContractors>;
}
