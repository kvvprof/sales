import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { CreateProductInput } from '@/common';
import { IProductRepository } from '@/modules/product/repository/product.repository.interface';
import { IProductService } from '@/modules/product/service/product.service.interface';

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(TYPES.ProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  public async createProduct(input: CreateProductInput) {
    let findProductByPricingProductsIdRes =
      await this.productRepository.findByPricingProductsId(
        input.pricingProductsId,
      );

    if (!findProductByPricingProductsIdRes) {
      findProductByPricingProductsIdRes =
        await this.productRepository.create(input);
    }

    const { object, ...product } = findProductByPricingProductsIdRes;

    return { object, product };
  }
}
