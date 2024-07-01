import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IProductService } from '@/schemas/product/product.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ProductSchema implements ISchema {
	constructor(
		@inject(TYPES.ProductService)
		private readonly productService: IProductService,
	) {}

	public getTypeDefs(): DocumentNode {
		return gql`
			type BasicPricingProduct {
				id: PositiveInt!
				number: NonEmptyString!
				area: NonNegativeDecimal!
				price: NonNegativeDecimal!
				one_gt_id: PositiveInt
			}

			type BasicPricingObject {
				id: PositiveInt!
				name: NonEmptyString!
			}

			type BasicPricingProductCategory {
				id: PositiveInt!
				name: NonEmptyString!
			}

			type BasicPricingProductType {
				id: PositiveInt!
				name: NonEmptyString!
			}

			type PricingProduct {
				product: BasicPricingProduct!
				object: BasicPricingObject!
				category: BasicPricingProductCategory!
				product_type: BasicPricingProductType
			}

			type PricingProducts {
				products: [PricingProduct!]!
				total_count: PositiveInt!
			}

			input GetPricingProductInput {
				id: PositiveInt!
			}

			input GetPricingProductsInput {
				object_id: PositiveInt!
				options: BaseOptionsInput
			}

			type Query {
				getPricingProduct(input: GetPricingProductInput!): PricingProduct!
				getPricingProducts(input: GetPricingProductsInput!): PricingProducts!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Query: {
				getPricingProduct: async (_, { input }) => {
					return this.productService.getProduct(input);
				},
				getPricingProducts: async (_, { input }) => {
					return this.productService.getProducts(input);
				},
			},
		};
	}
}
