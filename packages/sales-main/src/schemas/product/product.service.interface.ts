import { CreateProductInput, Product } from '@/schemas/schema.types';

export interface IProductService {
	createProduct(input: CreateProductInput): Promise<Product>;
}
