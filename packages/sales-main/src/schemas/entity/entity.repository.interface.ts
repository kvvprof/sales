import { Entity, Object as TObject } from '@/database/prisma/output';

export interface IEntity extends Entity {
	objects: TObject[];
}

export interface IEntityRepository {
	findMany(): Promise<IEntity[]>;
}
