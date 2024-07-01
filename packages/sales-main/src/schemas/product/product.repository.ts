import { inject, injectable } from 'inversify';

import { IDatabaseService } from '@/database/database.service.interface';
import { IProductRepository } from '@/schemas/product/product.repository.interface';
import { CreateProductInput } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ProductRepository implements IProductRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findById(id: number) {
		return this.databaseService.client.product.findFirst({
			where: { id },
			include: { object: true },
		});
	}

	public async findByPricingProductsId(pricing_products_id: number) {
		return this.databaseService.client.product.findFirst({
			where: { pricing_products_id },
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
