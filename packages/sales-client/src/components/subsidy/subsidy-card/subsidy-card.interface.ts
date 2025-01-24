import { BasicSubsidy } from '@/__types__/graphql';

export interface ISubsidyCard extends BasicSubsidy {
  onDelete?(): void;
}
