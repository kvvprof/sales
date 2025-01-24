import { TAgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.interface';

export interface IAgencyContractPicker {
  objectId?: number;
  onSubmit(agencyContract: TAgencyContractCard): void;
}
