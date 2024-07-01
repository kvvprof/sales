import { BasicUser } from '@/__types__/graphql';

export type TUserPicker = Pick<BasicUser, 'id' | 'full_name'>;

export interface IUserPicker {
	onSubmit(user: TUserPicker): void;
}
