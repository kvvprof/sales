import { TAgencyContractCard } from '@/components/common/agency-contract-card/agency-contract-card.interface';

export interface IAgencyContractPicker {
	object_id?: number;
	onSubmit(agency_contract: TAgencyContractCard): void;
}
