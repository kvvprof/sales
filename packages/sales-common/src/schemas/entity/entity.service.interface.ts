import {
	BasicCommonEntity,
	CommonEntities,
	GetCommonEntityInput,
	GetCommonEntitiesInput,
} from '@/schemas/schema.types';

export interface IEntityService {
	getEntity(input: GetCommonEntityInput): Promise<BasicCommonEntity>;
	getEntities(input?: GetCommonEntitiesInput | null): Promise<CommonEntities>;
}
