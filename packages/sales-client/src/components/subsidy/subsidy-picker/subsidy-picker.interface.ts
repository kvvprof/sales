import { BasicSubsidy } from '@/__types__/graphql';

export type TSubsidyPicker = Pick<BasicSubsidy, 'id' | 'name'>;

export interface ISubsidyPicker {
  onSubmit(subsidy: TSubsidyPicker): void;
}
