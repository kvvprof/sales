import {
	BasicRealEstateAgent,
	CreateRealEstateAgentInput,
	GetRealEstateAgentInput,
	GetRealEstateAgentsInput,
	RealEstateAgent,
	RealEstateAgents,
	UpdateRealEstateAgentInput,
} from '@/schemas/schema.types';

export interface IRealEstateAgentService {
	getRealEstateAgent(input: GetRealEstateAgentInput): Promise<RealEstateAgent>;
	getRealEstateAgents(
		input?: GetRealEstateAgentsInput | null,
	): Promise<RealEstateAgents>;
	createRealEstateAgent(
		input: CreateRealEstateAgentInput,
	): Promise<BasicRealEstateAgent>;
	updateRealEstateAgent(
		input: UpdateRealEstateAgentInput,
	): Promise<BasicRealEstateAgent>;
}
