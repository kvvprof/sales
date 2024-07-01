import { BasicAgencyContractSignatory } from '@/__types__/graphql';

export interface IAgencyContractSignatoryCard
	extends BasicAgencyContractSignatory {
	onDelete?(): void;
}
