import { AgencyContract } from '@/__types__/graphql';

export type TAgencyContractCard = Pick<
	AgencyContract,
	'agency_contract_properties' | 'object' | 'agency'
>;

export interface IAgencyContractCard extends TAgencyContractCard {
	onDelete?(): void;
}
