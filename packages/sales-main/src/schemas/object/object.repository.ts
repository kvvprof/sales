import { inject, injectable } from 'inversify';

import { IDatabaseService } from '@/database/database.service.interface';
import { IObjectRepository } from '@/schemas/object/object.repository.interface';
import { TYPES } from '@/types';

@injectable()
export class ObjectRepository implements IObjectRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findById(id: number) {
		return this.databaseService.client.object.findFirst({
			where: { id },
		});
	}

	public async findMany() {
		return this.databaseService.client.object.findMany();
	}
}
