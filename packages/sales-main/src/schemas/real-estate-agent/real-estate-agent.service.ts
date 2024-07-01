import { inject, injectable } from 'inversify';

import { REAL_ESTATE_AGENT_NOT_FOUND } from '@/schemas/real-estate-agent/real-estate-agent.constants';
import { IRealEstateAgentRepository } from '@/schemas/real-estate-agent/real-estate-agent.repository.interface';
import { IRealEstateAgentService } from '@/schemas/real-estate-agent/real-estate-agent.service.interface';
import {
	CreateRealEstateAgentInput,
	GetRealEstateAgentInput,
	GetRealEstateAgentsInput,
	UpdateRealEstateAgentInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class RealEstateAgentService implements IRealEstateAgentService {
	constructor(
		@inject(TYPES.RealEstateAgentRepository)
		private readonly realEstateAgentRepository: IRealEstateAgentRepository,
	) {}

	public async getRealEstateAgent({ id }: GetRealEstateAgentInput) {
		const realEstateAgent = await this.realEstateAgentRepository.findById(id);

		if (!realEstateAgent) {
			throw new Error(REAL_ESTATE_AGENT_NOT_FOUND);
		}

		const { agencies, ...real_estate_agent } = realEstateAgent;

		return {
			real_estate_agent,
			agencies: agencies.map(({ agency }) => agency),
		};
	}

	public async getRealEstateAgents(input?: GetRealEstateAgentsInput | null) {
		const realEstateAgentData = await this.realEstateAgentRepository.findMany(
			input?.options,
		);

		const real_estate_agents = realEstateAgentData.real_estate_agents.map(
			({ agencies, ...real_estate_agent }) => ({
				real_estate_agent,
				agencies: agencies.map(({ agency }) => agency),
			}),
		);

		return { real_estate_agents, total_count: realEstateAgentData.total_count };
	}

	public async createRealEstateAgent(input: CreateRealEstateAgentInput) {
		return this.realEstateAgentRepository.create(input);
	}

	public async updateRealEstateAgent(input: UpdateRealEstateAgentInput) {
		return this.realEstateAgentRepository.update(input);
	}
}
