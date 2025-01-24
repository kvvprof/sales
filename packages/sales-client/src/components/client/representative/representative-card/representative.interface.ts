import { BasicRepresentative } from '@/__types__/graphql';

export interface IRepresentativeCard extends BasicRepresentative {
  clientFullName?: string;
  onClick?(): void;
  onDelete?(): void;
}
