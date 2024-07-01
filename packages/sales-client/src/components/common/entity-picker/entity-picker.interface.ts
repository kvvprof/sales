import { BasicEntity } from '@/__types__/graphql';

export type TEntityPicker = Pick<BasicEntity, 'id' | 'name'>;

export interface IEntityPicker {
	objectId: number;
	onSubmit(entity: TEntityPicker): void;
}
