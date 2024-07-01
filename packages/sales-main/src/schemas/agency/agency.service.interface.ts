import {
	Agency,
	Agencies,
	BasicAgency,
	CreateAgencyInput,
	GetAgenciesInput,
	GetAgencyInput,
	CreateAgencyContractSignatoryInput,
	BasicAgencyContractSignatory,
	GetAgencyContractSignatoriesInput,
} from '@/schemas/schema.types';

export interface IAgencyService {
	getAgency(input: GetAgencyInput): Promise<Agency>;
	getAgencies(data?: GetAgenciesInput | null): Promise<Agencies>;
	createAgency(input: CreateAgencyInput): Promise<BasicAgency>;
	getAgencyContractSignatories(
		input: GetAgencyContractSignatoriesInput,
	): Promise<BasicAgencyContractSignatory[]>;
	createAgencyContractSignatory(
		input: CreateAgencyContractSignatoryInput,
	): Promise<BasicAgencyContractSignatory>;
}
