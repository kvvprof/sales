import { BasicClient } from '@/__types__/graphql';

export type TClientCard = Pick<
  BasicClient,
  'id' | 'fullName' | 'clientCategory'
>;

export interface IClientCard<T> extends TClientCard {
  payload: T;
  onDelete?(): void;
}
