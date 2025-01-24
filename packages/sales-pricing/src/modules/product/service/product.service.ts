import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { GetPricingProductInput, GetPricingProductsInput } from '@/common';
import { PRODUCT_NOT_FOUND } from '@/modules/product/constants/product.constants';
import { IProductRepository } from '@/modules/product/repository/product.repository.interface';
import { IProductService } from '@/modules/product/service/product.service.interface';

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(TYPES.ProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  public async getProduct({ id }: GetPricingProductInput) {
    const findProductByIdRes = await this.productRepository.findById(id);

    if (!findProductByIdRes) {
      throw new Error(PRODUCT_NOT_FOUND);
    }

    const { objects, product_types, product_categories, ...product } =
      findProductByIdRes;

    return {
      object: objects,
      productType: product_types,
      category: product_categories,
      product,
    };
  }

  public async getProducts({ objectId, options }: GetPricingProductsInput) {
    const findProductsByObjectId =
      await this.productRepository.findManyByObjectId(objectId, options);

    const { products, totalCount } = findProductsByObjectId;

    return {
      products: products.map(
        ({ objects, product_types, product_categories, ...product }) => ({
          object: objects,
          productType: product_types,
          category: product_categories,
          product,
        }),
      ),
      totalCount,
    };
  }
}
