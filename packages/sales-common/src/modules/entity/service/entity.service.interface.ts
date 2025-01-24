import {
  BasicCommonEntity,
  CommonEntities,
  GetCommonEntityInput,
  GetCommonEntitiesInput,
} from '@/common';

export interface IEntityService {
  getEntity(input: GetCommonEntityInput): Promise<BasicCommonEntity>;
  getEntities(input?: GetCommonEntitiesInput | null): Promise<CommonEntities>;
}
