import { BasicBank } from '@/__types__/graphql';

export interface IBankCard extends BasicBank {
  onDelete?(): void;
}
