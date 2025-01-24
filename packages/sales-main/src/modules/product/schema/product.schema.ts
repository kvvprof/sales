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
      enum ProductCategory {
        FLAT
        OFFICE
        APARTMENT
        STORAGE_ROOM
        PARKING_SPACE
      }

      type BasicProduct {
        id: PositiveInt!
        pricingProductsId: PositiveInt!
        number: NonEmptyString!
        productCategory: ProductCategory!
      }

      type Product {
        product: BasicProduct!
        object: BasicObject!
      }

      input CreateProductInput {
        pricingProductsId: PositiveInt!
        number: NonEmptyString!
        objectId: PositiveInt!
        productCategory: ProductCategory!
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
