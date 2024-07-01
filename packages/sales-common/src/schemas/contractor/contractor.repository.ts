import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { IContractorRepository } from '@/schemas/contractor/contractor.repository.interface';
import { TYPES } from '@/types';

@injectable()
export class ContractorRepository implements IContractorRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findById(id: number) {
		return this.databaseService.client.contractors.findFirst({
			where: { id },
			include: { accounts: { include: { banks: true } } },
		});
	}

	public async findMany(options: IFindManyOptions | null) {
		const filter = options?.prefix
			? {
					OR: [
						{
							inn: {
								contains: options.prefix,
							},
						},
					],
				}
			: undefined;

		const [contractors, total_count] = await Promise.all([
			this.databaseService.client.contractors.findMany({
				where: filter,
				orderBy: { id: 'asc' },
				take: options?.limit,
				skip: options?.offset,
				include: { accounts: { include: { banks: true } } },
			}),

			this.databaseService.client.contractors.count({
				where: filter,
			}),
		]);

		return { contractors, total_count };
	}
}
