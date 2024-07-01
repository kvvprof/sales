import { Entity } from '@/schemas/schema.types';

export interface IEntityService {
	getEntities(): Promise<Entity[]>;
}
