import { IFindManyOptions } from '@/common/find-many-options.interface';
import { Agency, RealEstateAgent } from '@/database/prisma/output';

import {
	CreateRealEstateAgentInput,
	UpdateRealEstateAgentInput,
} from '@/schemas/schema.types';

export interface IRealEstateAgent extends RealEstateAgent {
	agencies: { agency: Agency }[];
}

export interface IRealEstateAgentRepository {
	findById(id: number): Promise<IRealEstateAgent | null>;
	findMany(
		options?: IFindManyOptions | null,
	): Promise<{ real_estate_agents: IRealEstateAgent[]; total_count: number }>;
	create(data: CreateRealEstateAgentInput): Promise<RealEstateAgent>;
	update(data: UpdateRealEstateAgentInput): Promise<RealEstateAgent>;
}
