import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IProductService } from '@/modules/product/service/product.service.interface';

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
        oneGtId: PositiveInt
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
        productType: BasicPricingProductType
      }

      type PricingProducts {
        products: [PricingProduct!]!
        totalCount: PositiveInt!
      }

      input GetPricingProductInput {
        id: PositiveInt!
      }

      input GetPricingProductsInput {
        objectId: PositiveInt!
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
