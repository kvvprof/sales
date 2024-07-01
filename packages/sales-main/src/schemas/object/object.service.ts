import { inject, injectable } from 'inversify';

import { OBJECT_NOT_FOUND } from '@/schemas/object/object.constants';
import { IObjectRepository } from '@/schemas/object/object.repository.interface';
import { IObjectService } from '@/schemas/object/object.service.interface';
import { GetObjectInput } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ObjectService implements IObjectService {
	constructor(
		@inject(TYPES.ObjectRepository)
		private readonly objectRepository: IObjectRepository,
	) {}

	public async getObject({ id }: GetObjectInput) {
		const object = await this.objectRepository.findById(id);

		if (!object) {
			throw new Error(OBJECT_NOT_FOUND);
		}

		return object;
	}

	public async getObjects() {
		return this.objectRepository.findMany();
	}
}
