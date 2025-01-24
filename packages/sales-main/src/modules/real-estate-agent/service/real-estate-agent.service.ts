import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import {
  CreateRealEstateAgentInput,
  GetRealEstateAgentInput,
  GetRealEstateAgentsInput,
  UpdateRealEstateAgentInput,
} from '@/common';
import { REAL_ESTATE_AGENT_NOT_FOUND } from '@/modules/real-estate-agent/constants/real-estate-agent.constants';
import { IRealEstateAgentRepository } from '@/modules/real-estate-agent/repository/real-estate-agent.repository.interface';
import { IRealEstateAgentService } from '@/modules/real-estate-agent/service/real-estate-agent.service.interface';

@injectable()
export class RealEstateAgentService implements IRealEstateAgentService {
  constructor(
    @inject(TYPES.RealEstateAgentRepository)
    private readonly realEstateAgentRepository: IRealEstateAgentRepository,
  ) {}

  public async getRealEstateAgent({ id }: GetRealEstateAgentInput) {
    const findRealEstateAgentByIdRes =
      await this.realEstateAgentRepository.findById(id);

    if (!findRealEstateAgentByIdRes) {
      throw new Error(REAL_ESTATE_AGENT_NOT_FOUND);
    }

    const { agenciesToRealEstateAgents, ...realEstateAgent } =
      findRealEstateAgentByIdRes;

    return {
      realEstateAgent,
      agencies: agenciesToRealEstateAgents.map(({ agency }) => agency),
    };
  }

  public async getRealEstateAgents(input?: GetRealEstateAgentsInput | null) {
    const findRealEstateAgentsRes =
      await this.realEstateAgentRepository.findMany(input?.options);

    const realEstateAgents = findRealEstateAgentsRes.realEstateAgents.map(
      ({ agenciesToRealEstateAgents, ...realEstateAgent }) => ({
        realEstateAgent,
        agencies: agenciesToRealEstateAgents.map(({ agency }) => agency),
      }),
    );

    return { realEstateAgents, totalCount: findRealEstateAgentsRes.totalCount };
  }

  public async createRealEstateAgent(input: CreateRealEstateAgentInput) {
    return this.realEstateAgentRepository.create(input);
  }

  public async updateRealEstateAgent(input: UpdateRealEstateAgentInput) {
    return this.realEstateAgentRepository.updateById(input);
  }
}
