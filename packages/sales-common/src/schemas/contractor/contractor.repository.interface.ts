import { IFindManyOptions } from '@/common/find-many-options.interface';
import { contractors, accounts, banks } from '@/database/prisma/output';

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
	): Promise<{ contractors: IContractor[]; total_count: number }>;
}
