import { BasicRealEstateAgent } from '@/__types__/graphql';

export type TRealEstateAgentPicker = Pick<
  BasicRealEstateAgent,
  'id' | 'fullName'
>;

export interface IRealEstateAgentPicker {
  onSubmit(real_estate_agent: TRealEstateAgentPicker): void;
}
