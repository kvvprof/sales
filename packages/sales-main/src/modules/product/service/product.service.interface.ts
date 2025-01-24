import { CreateProductInput, Product } from '@/common';

export interface IProductService {
  createProduct(input: CreateProductInput): Promise<Product>;
}
