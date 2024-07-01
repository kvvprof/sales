import { inject, injectable } from 'inversify';

import { AGENCY_NOT_FOUND } from '@/schemas/contractor/contractor.constants';
import { IContractorRepository } from '@/schemas/contractor/contractor.repository.interface';
import { IContractorService } from '@/schemas/contractor/contractor.service.interface';
import {
	GetCommonContractorInput,
	GetCommonContractorsInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ContractorService implements IContractorService {
	constructor(
		@inject(TYPES.ContractorRepository)
		private readonly contractorRepository: IContractorRepository,
	) {}

	public async getContractor({ id }: GetCommonContractorInput) {
		const contractorData = await this.contractorRepository.findById(id);

		if (!contractorData) {
			throw new Error(AGENCY_NOT_FOUND);
		}

		const { accounts, ...contractor } = contractorData;

		return {
			contractor,
			accounts: accounts.map(({ banks, ...account }) => ({
				...account,
				bank: banks,
			})),
		};
	}

	public async getContractors(input?: GetCommonContractorsInput | null) {
		const contractorsData = await this.contractorRepository.findMany(
			input?.options,
		);

		const { contractors, total_count } = contractorsData;

		return {
			contractors: contractors.map(({ accounts, ...contractor }) => ({
				accounts: accounts.map(({ banks, ...account }) => ({
					...account,
					bank: banks,
				})),
				contractor,
			})),
			total_count,
		};
	}
}
