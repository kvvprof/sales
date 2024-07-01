import { BasicEntity } from '@/__types__/graphql';

export type TEntityCard = Pick<BasicEntity, 'name'>;

export interface IEntityCard extends TEntityCard {
	onDelete?(): void;
}
