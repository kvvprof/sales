import { IFindManyOptions } from '@/common';
import { contractors, accounts, banks } from '@/integrations';

export interface IAccount extends accounts {
  banks: banks;
}

export interface IContractor extends contractors {
  accounts: IAccount[];
}

export interface IContractorRepository {
  findById(id: number): Promise<IContractor | null>;
  findMany(
    options?: IFindManyOptions | null,
  ): Promise<{ contractors: IContractor[]; totalCount: number }>;
}
