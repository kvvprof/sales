import { inject, injectable } from 'inversify';

import {
  CreateRepresentativeInput,
  GetRepresentativesByClientIdsInput,
  TYPES,
  UpdateRepresentativeInput,
} from '@/common';
import { IRepresentativeRepository } from '@/modules/representative/repository/representative.repository.interface';
import { IRepresentativeService } from '@/modules/representative/service/representative.service.interface';

@injectable()
export class RepresentativeService implements IRepresentativeService {
  constructor(
    @inject(TYPES.RepresentativeRepository)
    private readonly representativeRepository: IRepresentativeRepository,
  ) {}

  public async getRepresentativesByClientIds({
    clientIds,
  }: GetRepresentativesByClientIdsInput) {
    const findRepresentativesByClientIdsRes =
      await this.representativeRepository.findManyByClientIds(clientIds);

    return findRepresentativesByClientIdsRes.map(
      ({ client, ...representative }) => ({
        representative,
        client,
      }),
    );
  }

  public async createRepresentative(input: CreateRepresentativeInput) {
    return this.representativeRepository.create(input);
  }

  public async updateRepresentative(input: UpdateRepresentativeInput) {
    return this.representativeRepository.updateById(input);
  }
}
