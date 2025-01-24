import { CreateProductInput } from '@/common';
import { Product, Object as TObject } from '@/integrations';

export interface IProduct extends Product {
  object: TObject;
}

export interface IProductRepository {
  findById(id: number): Promise<IProduct | null>;
  findByPricingProductsId(pricingProductsId: number): Promise<IProduct | null>;
  create(data: CreateProductInput): Promise<IProduct>;
}
