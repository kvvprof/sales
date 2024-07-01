import { inject, injectable } from 'inversify';

import { IDatabaseService } from '@/database/database.service.interface';
import { IEntityRepository } from '@/schemas/entity/entity.repository.interface';
import { TYPES } from '@/types';

@injectable()
export class EntityRepository implements IEntityRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findMany() {
		return this.databaseService.client.entity.findMany({
			include: { objects: true },
		});
	}
}
