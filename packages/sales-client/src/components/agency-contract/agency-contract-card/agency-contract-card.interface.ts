import { AgencyContract } from '@/__types__/graphql';

export type TAgencyContractCard = Pick<
  AgencyContract,
  | 'agencyContractProperties'
  | 'object'
  | 'agency'
  | 'realEstateAgencyContractProperties'
  | 'mipAgencyContractProperties'
>;

export interface IAgencyContractCard extends TAgencyContractCard {
  onDelete?(): void;
}
