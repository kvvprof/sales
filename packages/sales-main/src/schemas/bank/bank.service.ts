import { inject, injectable } from 'inversify';

import { IBankRepository } from '@/schemas/bank/bank.repository.interface';
import { IBankService } from '@/schemas/bank/bank.service.interface';
import { TYPES } from '@/types';

@injectable()
export class BankService implements IBankService {
	constructor(
		@inject(TYPES.BankRepository)
		private readonly bankRepository: IBankRepository,
	) {}

	public async getBanks() {
		return this.bankRepository.findMany();
	}
}
