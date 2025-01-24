import { BasicBank } from '@/__types__/graphql';

export type TBankPicker = Pick<BasicBank, 'id' | 'name'>;

export interface IBankPicker {
  onSubmit(bank: TBankPicker): void;
}
