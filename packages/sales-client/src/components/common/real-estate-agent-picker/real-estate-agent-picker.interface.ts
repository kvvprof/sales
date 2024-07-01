import { BasicRealEstateAgent } from '@/__types__/graphql';

export type TRealEstateAgentPicker = Pick<
	BasicRealEstateAgent,
	'id' | 'full_name'
>;

export interface IRealEstateAgentPicker {
	onSubmit(real_estate_agent: TRealEstateAgentPicker): void;
}
