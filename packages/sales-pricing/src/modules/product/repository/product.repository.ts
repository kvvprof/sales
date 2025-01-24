import { inject, injectable } from 'inversify';

import { TYPES, IFindManyOptions } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IProductRepository } from '@/modules/product/repository/product.repository.interface';

@injectable()
export class ProductRepository implements IProductRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findById(id: number) {
    return this.databaseService.client.products.findUnique({
      where: { id },
      include: { product_categories: true, product_types: true, objects: true },
    });
  }

  public async findManyByObjectId(
    objectId: number,
    options?: IFindManyOptions | null,
  ) {
    const filter = {
      AND: [
        {
          object_id: objectId,
        },
        {
          OR: [
            {
              number: {
                equals: options?.prefix,
              },
            },
          ],
        },
      ],
    };

    const [products, totalCount] = await Promise.all([
      this.databaseService.client.products.findMany({
        where: filter,
        orderBy: { id: 'asc' },
        take: options?.limit,
        skip: options?.offset,
        include: {
          product_categories: true,
          product_types: true,
          objects: true,
        },
      }),

      this.databaseService.client.products.count({
        where: filter,
      }),
    ]);

    return { products, totalCount };
  }
}
