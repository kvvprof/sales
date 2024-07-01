import { inject, injectable } from 'inversify';

import { IProductRepository } from '@/schemas/product/product.repository.interface';
import { IProductService } from '@/schemas/product/product.service.interface';
import { CreateProductInput } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ProductService implements IProductService {
	constructor(
		@inject(TYPES.ProductRepository)
		private readonly productRepository: IProductRepository,
	) {}

	public async createProduct(input: CreateProductInput) {
		let productData = await this.productRepository.findByPricingProductsId(
			input.pricing_products_id,
		);

		if (!productData) {
			productData = await this.productRepository.create(input);
		}

		const { object, ...product } = productData;

		return { object, product };
	}
}
