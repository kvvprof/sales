import { BasicObject } from '@/__types__/graphql';

export type TObjectPicker = Pick<BasicObject, 'id' | 'name'>;

export interface IObjectPicker {
	onSubmit(object: TObjectPicker): void;
}
