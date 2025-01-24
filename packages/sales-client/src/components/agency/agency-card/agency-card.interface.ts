import { BasicAgency } from '@/__types__/graphql';

export type TAgencyCard = Pick<BasicAgency, 'id' | 'name'>;

export interface IAgencyCard extends TAgencyCard {
  onDelete?(): void;
}
