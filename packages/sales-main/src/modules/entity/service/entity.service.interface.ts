import { Entity } from '@/common';

export interface IEntityService {
  getEntities(): Promise<Entity[]>;
}
