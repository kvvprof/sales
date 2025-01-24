import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { CreateProductInput } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IProductRepository } from '@/modules/product/repository/product.repository.interface';

@injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.product.findUnique({
      where: { id },
      include: { object: true },
    });
  }

  public async findByPricingProductsId(pricingProductsId: number) {
    return this.databaseService.client.product.findUnique({
      where: { pricingProductsId },
      include: { object: true },
    });
  }

  public async create(data: CreateProductInput) {
    return this.databaseService.client.product.create({
      data,
      include: { object: true },
    });
  }
}
