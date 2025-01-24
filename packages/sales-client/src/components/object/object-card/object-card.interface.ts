import { BasicObject } from '@/__types__/graphql';

export type TObjectCard = Pick<BasicObject, 'name'>;

export interface IObjectCard extends TObjectCard {
  onDelete?(): void;
}
