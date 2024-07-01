import { Product } from '@/__types__/graphql';

export interface IProductPicker {
	onSubmit(product: Product): void;
}
