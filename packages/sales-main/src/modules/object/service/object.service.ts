import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { GetObjectInput } from '@/common';
import { OBJECT_NOT_FOUND } from '@/modules/object/constants/object.constants';
import { IObjectRepository } from '@/modules/object/repository/object.repository.interface';
import { IObjectService } from '@/modules/object/service/object.service.interface';

@injectable()
export class ObjectService implements IObjectService {
  constructor(
    @inject(TYPES.ObjectRepository)
    private readonly objectRepository: IObjectRepository,
  ) {}

  public async getObject({ id }: GetObjectInput) {
    const findObjectByIdRes = await this.objectRepository.findById(id);

    if (!findObjectByIdRes) {
      throw new Error(OBJECT_NOT_FOUND);
    }

    return findObjectByIdRes;
  }

  public async getObjects() {
    return this.objectRepository.findMany();
  }
}
