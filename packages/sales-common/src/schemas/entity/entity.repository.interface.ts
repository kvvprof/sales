import { IFindManyOptions } from '@/common/find-many-options.interface';
import { entities } from '@/database/prisma/output';

export interface IEntityRepository {
	find(id: number): Promise<entities | null>;
	findMany(
		options?: IFindManyOptions | null,
	): Promise<{ entities: entities[]; total_count: number }>;
}
