import {
  BasicRepresentative,
  CreateRepresentativeInput,
  GetRepresentativesByClientIdsInput,
  Representative,
  UpdateRepresentativeInput,
} from '@/common';

export interface IRepresentativeService {
  getRepresentativesByClientIds(
    input: GetRepresentativesByClientIdsInput,
  ): Promise<Representative[]>;
  createRepresentative(
    input: CreateRepresentativeInput,
  ): Promise<BasicRepresentative>;
  updateRepresentative(
    input: UpdateRepresentativeInput,
  ): Promise<BasicRepresentative>;
}
