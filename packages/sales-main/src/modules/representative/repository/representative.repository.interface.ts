import { CreateRepresentativeInput, UpdateRepresentativeInput } from '@/common';
import { Client, Representative } from '@/integrations';

export interface IRepresentativeRepository {
  findManyByClientIds(
    data: number[],
  ): Promise<(Representative & { client: Client })[]>;
  create(data: CreateRepresentativeInput): Promise<Representative>;
  updateById(data: UpdateRepresentativeInput): Promise<Representative>;
}
