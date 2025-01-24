import { BasicClientContract } from '@/__types__/graphql';

export type TClientContractCard = Pick<
  BasicClientContract,
  'id' | 'number' | 'price' | 'clientContractType'
>;

export interface IClientContractCard extends TClientContractCard {
  onDelete?(): void;
}
