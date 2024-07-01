import { IFindManyOptions } from '@/common/find-many-options.interface';
import {
	AgencyContract,
	ClientContract,
	User,
	RealEstateAgent,
	Client,
	Bank,
	Object as TObject,
	ClientContractToClient,
	DDUClientContractProperties,
	Agency,
} from '@/database/prisma/output';

import { IProduct } from '@/schemas/product/product.repository.interface';
import {
	CreateClientContractInput,
	UpdateClientContractInput,
} from '@/schemas/schema.types';

export interface IClientContractToClient extends ClientContractToClient {
	client: Client;
}

export interface IClientContract extends ClientContract {
	ddu_client_contract_properties: DDUClientContractProperties | null;
	clients: IClientContractToClient[];
	object: TObject;
	product: IProduct;
	manager: User | null;
	real_estate_agent: RealEstateAgent | null;
	agency_contracts: {
		agency_contract: AgencyContract & { agency: Agency };
	}[];
	bank: Bank | null;
}

export interface IClientContractRepository {
	findById(id: number): Promise<IClientContract | null>;
	findMany(
		object_id?: number | null,
		options?: IFindManyOptions | null,
	): Promise<{ client_contracts: IClientContract[]; total_count: number }>;
	findManyByIds(
		ids: number[],
	): Promise<{ client_contracts: IClientContract[]; total_count: number }>;
	findByProductId(product_id: number): Promise<ClientContract | null>;
	create(
		object_id: number,
		data: CreateClientContractInput,
	): Promise<ClientContract>;
	update(
		object_id: number,
		data: UpdateClientContractInput,
	): Promise<ClientContract>;
}
