import { inject, injectable } from 'inversify';

import { PRODUCT_NOT_FOUND } from '@/schemas/product/product.constants';
import { IProductRepository } from '@/schemas/product/product.repository.interface';
import { IProductService } from '@/schemas/product/product.service.interface';
import {
	GetPricingProductInput,
	GetPricingProductsInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ProductService implements IProductService {
	constructor(
		@inject(TYPES.ProductRepository)
		private readonly productRepository: IProductRepository,
	) {}

	public async getProduct({ id }: GetPricingProductInput) {
		const productData = await this.productRepository.find(id);

		if (!productData) {
			throw new Error(PRODUCT_NOT_FOUND);
		}

		const { object, product_type, category, ...product } = productData;

		return { object, product_type, category, product };
	}

	public async getProducts({ object_id, options }: GetPricingProductsInput) {
		const productsData = await this.productRepository.findMany(
			object_id,
			options,
		);

		const { products, total_count } = productsData;

		return {
			products: products.map(
				({ object, product_type, category, ...product }) => ({
					object,
					product_type,
					category,
					product,
				}),
			),
			total_count,
		};
	}
}
