import { Product, Object as TObject } from '@/database/prisma/output';

import { CreateProductInput } from '@/schemas/schema.types';

export interface IProduct extends Product {
	object: TObject;
}

export interface IProductRepository {
	findById(id: number): Promise<IProduct | null>;
	findByPricingProductsId(
		pricing_products_id: number,
	): Promise<IProduct | null>;
	create(data: CreateProductInput): Promise<IProduct>;
}
