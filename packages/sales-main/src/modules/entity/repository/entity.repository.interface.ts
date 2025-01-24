import { Entity, Object as TObject } from '@/integrations';

export interface IEntity extends Entity {
  objects: TObject[];
}

export interface IEntityRepository {
  findMany(): Promise<IEntity[]>;
}
