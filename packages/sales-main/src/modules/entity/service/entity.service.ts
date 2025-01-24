import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { IEntityRepository } from '@/modules/entity/repository/entity.repository.interface';
import { IEntityService } from '@/modules/entity/service/entity.service.interface';

@injectable()
export class EntityService implements IEntityService {
  constructor(
    @inject(TYPES.EntityRepository)
    private readonly entityRepository: IEntityRepository,
  ) {}

  public async getEntities() {
    const findEntitiesRes = await this.entityRepository.findMany();
    return findEntitiesRes.map(({ objects, ...entity }) => ({
      entity,
      objects,
    }));
  }
}
