import { IFindManyOptions } from '@/common';
import { entities } from '@/integrations';

export interface IEntityRepository {
  findById(id: number): Promise<entities | null>;
  findMany(
    options?: IFindManyOptions | null,
  ): Promise<{ entities: entities[]; totalCount: number }>;
}
