import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { IEntityRepository } from '@/schemas/entity/entity.repository.interface';
import { TYPES } from '@/types';

@injectable()
export class EntityRepository implements IEntityRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async find(id: number) {
		return this.databaseService.client.entities.findFirst({
			where: { id },
		});
	}

	public async findMany(options?: IFindManyOptions | null) {
		const filter = options?.prefix
			? {
					OR: [
						{
							short_name: {
								contains: options.prefix,
							},
						},
					],
				}
			: undefined;

		const [entities, total_count] = await Promise.all([
			this.databaseService.client.entities.findMany({
				where: filter,
				orderBy: { id: 'asc' },
				take: options?.limit,
				skip: options?.offset,
			}),

			this.databaseService.client.entities.count({
				where: filter,
			}),
		]);

		return { entities, total_count };
	}
}
