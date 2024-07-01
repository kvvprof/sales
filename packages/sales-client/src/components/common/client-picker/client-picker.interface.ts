import { BasicClient } from '@/__types__/graphql';

export type TClientPicker = Pick<
	BasicClient,
	'id' | 'full_name' | 'client_category'
>;

export interface IClientPicker {
	onSubmit(client: TClientPicker): void;
}
