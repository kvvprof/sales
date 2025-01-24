import { BasicRealEstateAgent } from '@/__types__/graphql';

export type TRealEstateAgentCard = Pick<
  BasicRealEstateAgent,
  'id' | 'fullName'
>;

export interface IRealEstateAgentCard extends TRealEstateAgentCard {
  onDelete?(): void;
}
