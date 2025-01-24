import { BasicUser } from '@/__types__/graphql';

export type TUserPicker = Pick<BasicUser, 'id' | 'fullName'>;

export interface IUserPicker {
  onSubmit(user: TUserPicker): void;
}
