import {
  CreateRealEstateAgentInput,
  UpdateRealEstateAgentInput,
  IFindManyOptions,
} from '@/common';
import { Agency, RealEstateAgent } from '@/integrations';

export interface IRealEstateAgent extends RealEstateAgent {
  agenciesToRealEstateAgents: { agency: Agency }[];
}

export interface IRealEstateAgentRepository {
  findById(id: number): Promise<IRealEstateAgent | null>;
  findMany(
    options?: IFindManyOptions | null,
  ): Promise<{ realEstateAgents: IRealEstateAgent[]; totalCount: number }>;
  create(data: CreateRealEstateAgentInput): Promise<RealEstateAgent>;
  updateById(data: UpdateRealEstateAgentInput): Promise<RealEstateAgent>;
}
