import { IFindManyOptions } from '@/common/find-many-options.interface';
import { Agency, AgencyContract } from '@/database/prisma/output';

import {
	BasicAgencyContractSignatory,
	CreateAgencyContractSignatoryInput,
	CreateAgencyInput,
} from '@/schemas/schema.types';

export interface IAgency extends Agency {
	agency_contracts: AgencyContract[];
}

export interface IAgencyRepository {
	findById(id: number): Promise<IAgency | null>;
	findByCommonDBContractorsId(
		common_contractors_id: number,
	): Promise<Agency | null>;
	findMany(
		options?: IFindManyOptions | null,
	): Promise<{ agencies: Agency[]; total_count: number }>;
	create(data: CreateAgencyInput): Promise<Agency>;
	findManyAgencyContractSignatories(
		agency_id: number,
	): Promise<BasicAgencyContractSignatory[]>;
	createAgencyContractSignatory(
		data: CreateAgencyContractSignatoryInput,
	): Promise<BasicAgencyContractSignatory>;
}
