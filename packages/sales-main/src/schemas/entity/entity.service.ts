import { inject, injectable } from 'inversify';

import { IEntityRepository } from '@/schemas/entity/entity.repository.interface';
import { IEntityService } from '@/schemas/entity/entity.service.interface';
import { TYPES } from '@/types';

@injectable()
export class EntityService implements IEntityService {
	constructor(
		@inject(TYPES.EntityRepository)
		private readonly entityRepository: IEntityRepository,
	) {}

	public async getEntities() {
		const entities = await this.entityRepository.findMany();

		return entities.map(({ objects, ...entity }) => ({ entity, objects }));
	}
}
