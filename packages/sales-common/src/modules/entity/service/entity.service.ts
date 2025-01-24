import { inject, injectable } from 'inversify';

import { TYPES, GetCommonEntityInput, GetCommonEntitiesInput } from '@/common';
import { ENTITY_NOT_FOUND } from '@/modules/entity/constants/entity.constants';
import { IEntityRepository } from '@/modules/entity/repository/entity.repository.interface';
import { IEntityService } from '@/modules/entity/service/entity.service.interface';

@injectable()
export class EntityService implements IEntityService {
  constructor(
    @inject(TYPES.EntityRepository)
    private readonly entityRepository: IEntityRepository,
  ) {}

  public async getEntity({ id }: GetCommonEntityInput) {
    const entity = await this.entityRepository.findById(id);

    if (!entity) {
      throw new Error(ENTITY_NOT_FOUND);
    }

    return {
      ...entity,
      strId: entity.str_id,
      shortName: entity.short_name,
      displayName: entity.display_name,
      dbName: entity.db_name,
    };
  }

  public async getEntities(input?: GetCommonEntitiesInput | null) {
    const findEntitiesRes = await this.entityRepository.findMany(
      input?.options,
    );

    const { entities, totalCount } = findEntitiesRes;

    return {
      entities: entities.map((entity) => ({
        ...entity,
        strId: entity.str_id,
        shortName: entity.short_name,
        displayName: entity.display_name,
        dbName: entity.db_name,
      })),
      totalCount,
    };
  }
}
