import { BasicClient } from '@/__types__/graphql';

export type TClientCard = Pick<
	BasicClient,
	'id' | 'full_name' | 'client_category'
>;

export interface IClientCard<T> extends TClientCard {
	payload: T;
	onDelete?(): void;
}
