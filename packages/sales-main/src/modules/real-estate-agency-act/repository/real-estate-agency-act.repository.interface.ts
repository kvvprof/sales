import Decimal from 'decimal.js';

import {
  BasicAgencyContract,
  IFindManyOptions,
  UpdateRealEstateAgencyActInput,
} from '@/common';
import {
  Agency,
  AgencyContractCommission,
  ClientContract,
  RealEstateAgencyAct,
  RealEstateAgencyContractProperties,
  Object as TObject,
} from '@/integrations';

export interface ICreateRealEstateAgencyAct {
  number: string;
  date: Date;
  amount: Decimal;
  retention?: Decimal | null;
  note?: string | null;
  clientContractId: number;
  agencyId: number;
  agencyContractId: number;
}

export interface IRealEstateAgencyAct extends RealEstateAgencyAct {
  agency: Agency;
  clientContract: ClientContract & { object: TObject };
  agencyContract: BasicAgencyContract & {
    realEstateAgencyContractProperties:
      | (RealEstateAgencyContractProperties & {
          agencyContractCommission: AgencyContractCommission;
        })
      | null;
  };
}

export interface IRealEstateAgencyActRepository {
  findById(id: number): Promise<IRealEstateAgencyAct | null>;
  findMany(options?: IFindManyOptions | null): Promise<{
    realEstateAgencyActs: IRealEstateAgencyAct[];
    totalCount: number;
  }>;
  findManyByAgencyId(agencyId: number): Promise<RealEstateAgencyAct[]>;
  create(data: ICreateRealEstateAgencyAct): Promise<RealEstateAgencyAct>;
  updateById(
    data: UpdateRealEstateAgencyActInput,
  ): Promise<RealEstateAgencyAct>;
}
