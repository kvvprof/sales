import { inject, injectable } from 'inversify';

import { IDatabaseService } from '@/database/database.service.interface';
import { IBankRepository } from '@/schemas/bank/bank.repository.interface';
import { TYPES } from '@/types';

@injectable()
export class BankRepository implements IBankRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findMany() {
		return this.databaseService.client.bank.findMany();
	}
}
