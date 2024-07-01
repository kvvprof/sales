import { inject, injectable } from 'inversify';

import { ENTITY_NOT_FOUND } from '@/schemas/entity/entity.constants';
import { IEntityRepository } from '@/schemas/entity/entity.repository.interface';
import { IEntityService } from '@/schemas/entity/entity.service.interface';
import {
	GetCommonEntityInput,
	GetCommonEntitiesInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class EntityService implements IEntityService {
	constructor(
		@inject(TYPES.EntityRepository)
		private readonly entityRepository: IEntityRepository,
	) {}

	public async getEntity({ id }: GetCommonEntityInput) {
		const entity = await this.entityRepository.find(id);

		if (!entity) {
			throw new Error(ENTITY_NOT_FOUND);
		}

		return entity;
	}

	public async getEntities(input?: GetCommonEntitiesInput | null) {
		return this.entityRepository.findMany(input?.options);
	}
}
