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
			enum ProductCategory {
				FLAT
				OFFICE
				APARTMENT
				STORAGE_ROOM
				PARKING_SPACE
			}

			type BasicProduct {
				id: PositiveInt!
				pricing_products_id: PositiveInt!
				number: NonEmptyString!
				product_category: ProductCategory!
			}

			type Product {
				product: BasicProduct!
				object: BasicObject!
			}

			input CreateProductInput {
				pricing_products_id: PositiveInt!
				number: NonEmptyString!
				object_id: PositiveInt!
				product_category: ProductCategory!
			}

			type Mutation {
				createProduct(input: CreateProductInput!): Product!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Mutation: {
				createProduct: async (_, { input }) => {
					return this.productService.createProduct(input);
				},
			},
		};
	}
}
