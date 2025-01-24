import { Product } from '@/__types__/graphql';

export type TProductCard = Pick<Product, 'product' | 'object'>;

export interface IProductCard extends TProductCard {
  onClick?(): void;
  onDelete?(): void;
}
