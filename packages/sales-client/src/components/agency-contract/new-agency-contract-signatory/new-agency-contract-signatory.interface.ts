import { BasicAgencyContractSignatory } from '@/__types__/graphql';

export interface INewAgencyContractSignatory {
  agencyId: number;
  onSubmit(agencyContractSignatory: BasicAgencyContractSignatory): void;
}
