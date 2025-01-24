import { BasicRepresentative } from '@/__types__/graphql';

export interface IRepresentativePicker {
  clientIds: number[];
  onSubmit(representative: BasicRepresentative): void;
}
