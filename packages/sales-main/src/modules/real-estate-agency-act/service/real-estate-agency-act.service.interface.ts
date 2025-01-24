import {
  BasicRealEstateAgencyAct,
  CreateRealEstateAgencyActInput,
  GetRealEstateAgencyActInput,
  GetRealEstateAgencyActsInput,
  RealEstateAgencyAct,
  RealEstateAgencyActs,
  UpdateRealEstateAgencyActInput,
} from '@/common';

export interface IRealEstateAgencyActService {
  getRealEstateAgencyAct(
    input: GetRealEstateAgencyActInput,
  ): Promise<RealEstateAgencyAct>;
  getRealEstateAgencyActs(
    input?: GetRealEstateAgencyActsInput | null,
  ): Promise<RealEstateAgencyActs>;
  createRealEstateAgencyAct(
    input: CreateRealEstateAgencyActInput,
  ): Promise<BasicRealEstateAgencyAct>;
  updateRealEstateAgencyAct(
    input: UpdateRealEstateAgencyActInput,
  ): Promise<BasicRealEstateAgencyAct>;
}
