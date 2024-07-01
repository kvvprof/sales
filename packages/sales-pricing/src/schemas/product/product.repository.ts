import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { IProductRepository } from '@/schemas/product/product.repository.interface';
import { TYPES } from '@/types';

@injectable()
export class ProductRepository implements IProductRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async find(id: number) {
		return this.databaseService.client.product.findFirst({
			where: { id },
			include: { category: true, product_type: true, object: true },
		});
	}

	public async findMany(object_id: number, options?: IFindManyOptions | null) {
		const filter = {
			AND: [
				{
					object_id,
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

		const [products, total_count] = await Promise.all([
			this.databaseService.client.product.findMany({
				where: filter,
				orderBy: { id: 'asc' },
				take: options?.limit,
				skip: options?.offset,
				include: { category: true, product_type: true, object: true },
			}),

			this.databaseService.client.product.count({
				where: filter,
			}),
		]);

		return { products, total_count };
	}
}
