import { BasicUser } from '@/__types__/graphql';

export type TUserCard = Pick<BasicUser, 'id' | 'full_name'>;

export interface IUserCard extends TUserCard {
	onDelete?(): void;
}
