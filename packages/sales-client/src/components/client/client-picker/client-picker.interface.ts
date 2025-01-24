import { BasicClient } from '@/__types__/graphql';

export type TClientPicker = Pick<
  BasicClient,
  'id' | 'fullName' | 'clientCategory'
>;

export interface IClientPicker {
  onSubmit(client: TClientPicker): void;
}
