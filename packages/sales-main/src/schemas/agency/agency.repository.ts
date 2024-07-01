import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { IAgencyRepository } from '@/schemas/agency/agency.repository.interface';
import {
	CreateAgencyContractSignatoryInput,
	CreateAgencyInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class AgencyRepository implements IAgencyRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findById(id: number) {
		return this.databaseService.client.agency.findFirst({
			where: { id },
			include: {
				agency_contracts: true,
			},
		});
	}

	public async findByCommonDBContractorsId(common_db_contractors_id: number) {
		return this.databaseService.client.agency.findFirst({
			where: { common_db_contractors_id },
		});
	}

	public async findMany(options?: IFindManyOptions | null) {
		const filter = options?.prefix
			? {
					OR: [
						{
							name: {
								contains: options.prefix,
							},
						},
						{
							inn: {
								contains: options.prefix,
							},
						},
					],
				}
			: undefined;

		const [agencies, total_count] = await Promise.all([
			this.databaseService.client.agency.findMany({
				where: filter,
				orderBy: { id: 'desc' },
				take: options?.limit,
				skip: options?.offset,
			}),

			this.databaseService.client.agency.count({ where: filter }),
		]);

		return { agencies, total_count };
	}

	public async create(data: CreateAgencyInput) {
		return this.databaseService.client.agency.create({ data });
	}

	public async findManyAgencyContractSignatories(agency_id: number) {
		return this.databaseService.client.agencyContractSignatory.findMany({
			where: { agency_id },
		});
	}

	public async createAgencyContractSignatory(
		data: CreateAgencyContractSignatoryInput,
	) {
		return this.databaseService.client.agencyContractSignatory.create({
			data,
		});
	}
}
