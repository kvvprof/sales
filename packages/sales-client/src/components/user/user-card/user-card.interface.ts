import { BasicUser } from '@/__types__/graphql';

export type TUserCard = Pick<BasicUser, 'id' | 'fullName'>;

export interface IUserCard extends TUserCard {
  onDelete?(): void;
}
