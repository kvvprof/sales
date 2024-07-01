import {
	AgencyContract,
	AgencyContractCommission,
	AgencyContractSignatory,
	Entity,
	Object as TObject,
	Agency,
	User,
} from '@/database/prisma/output';

import {
	CreateAgencyContractInput,
	UpdateAgencyContractInput,
} from '@/schemas/schema.types';

export interface IAgencyContract extends AgencyContract {
	entity: Entity;
	object: TObject;
	agency: Agency;
	responsible_user: User | null;
	agency_contract_signatory: AgencyContractSignatory | null;
	real_estate_agency_contract_properties: {
		agency_contract_commission: AgencyContractCommission;
	} | null;
	mip_agency_contract_properties: {
		agency_contract_commission: AgencyContractCommission;
	} | null;
}

export interface IAgencyContractRepository {
	findById(id: number): Promise<IAgencyContract | null>;
	findMany(agency_id: number, object_id?: number): Promise<IAgencyContract[]>;
	create(
		number: string,
		date: Date,
		data: CreateAgencyContractInput,
	): Promise<AgencyContract>;
	update(data: UpdateAgencyContractInput): Promise<AgencyContract>;
}
