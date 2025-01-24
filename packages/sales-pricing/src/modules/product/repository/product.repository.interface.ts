import { IFindManyOptions } from '@/common';
import {
  products,
  product_categories,
  product_types,
  objects,
} from '@/integrations';

export interface IProduct extends products {
  product_categories: product_categories;
  product_types: product_types | null;
  objects: objects;
}

export interface IProductRepository {
  findById(id: number): Promise<IProduct | null>;
  findManyByObjectId(
    objectId: number,
    options?: IFindManyOptions | null,
  ): Promise<{ products: IProduct[]; totalCount: number }>;
}
