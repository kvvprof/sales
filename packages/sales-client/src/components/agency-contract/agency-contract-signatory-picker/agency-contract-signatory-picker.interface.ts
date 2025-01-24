import { BasicAgencyContractSignatory } from '@/__types__/graphql';

export interface ISignatoryPicker {
  agencyId: number;
  onSubmit(signatory: BasicAgencyContractSignatory): void;
}
