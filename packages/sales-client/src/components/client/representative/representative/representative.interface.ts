import { BasicRepresentative } from '@/__types__/graphql';

export interface IRepresentative {
  representative: BasicRepresentative;
  onSubmit?(representative: BasicRepresentative): void;
}
