import { BasicRealEstateAgent } from '@/__types__/graphql';

export type TRealEstateAgentCard = Pick<
	BasicRealEstateAgent,
	'id' | 'full_name'
>;

export interface IRealEstateAgentCard extends TRealEstateAgentCard {
	onDelete?(): void;
}
