import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { IRealEstateAgentRepository } from '@/schemas/real-estate-agent/real-estate-agent.repository.interface';
import {
	CreateRealEstateAgentInput,
	UpdateRealEstateAgentInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class RealEstateAgentRepository implements IRealEstateAgentRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public findById(id: number) {
		return this.databaseService.client.realEstateAgent.findFirst({
			where: { id },
			include: {
				agencies: { include: { agency: true } },
			},
		});
	}

	public async findMany(options?: IFindManyOptions | null) {
		const filter = options?.prefix
			? {
					OR: [
						{
							full_name: {
								contains: options.prefix,
							},
						},
					],
				}
			: undefined;

		const [real_estate_agents, total_count] = await Promise.all([
			this.databaseService.client.realEstateAgent.findMany({
				where: filter,
				orderBy: { id: 'desc' },
				take: options?.limit,
				skip: options?.offset,
				include: {
					agencies: { include: { agency: true } },
				},
			}),

			this.databaseService.client.realEstateAgent.count({ where: filter }),
		]);

		return { real_estate_agents, total_count };
	}

	public async create({ agency_ids, ...data }: CreateRealEstateAgentInput) {
		return this.databaseService.client.$transaction(async (prisma) => {
			const realEstateAgent = await prisma.realEstateAgent.create({
				data,
			});

			const agencyToRealEstateAgent = [...new Set(agency_ids)].map(
				(agencyId) => ({
					agency_id: agencyId,
					real_estate_agent_id: realEstateAgent.id,
				}),
			);

			await prisma.agencyToRealEstateAgent.createMany({
				data: agencyToRealEstateAgent,
			});

			return realEstateAgent;
		});
	}

	public async update({ id, agency_ids, ...data }: UpdateRealEstateAgentInput) {
		return this.databaseService.client.$transaction(async (prisma) => {
			const realEstateAgent = await prisma.realEstateAgent.update({
				where: { id },
				data,
			});

			const agencyToRealEstateAgent = [...new Set(agency_ids)].map(
				(agencyId) => ({
					agency_id: agencyId,
					real_estate_agent_id: realEstateAgent.id,
				}),
			);

			await prisma.agencyToRealEstateAgent.deleteMany({
				where: { real_estate_agent_id: realEstateAgent.id },
			});

			await prisma.agencyToRealEstateAgent.createMany({
				data: agencyToRealEstateAgent,
			});

			return realEstateAgent;
		});
	}
}
