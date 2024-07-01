import { inject, injectable } from 'inversify';

import {
	CLIENT_CONTRACT_NOT_FOUND,
	PRODUCT_NOT_FOUND,
	PRODUCT_IN_CONTRACT,
} from '@/schemas/client-contract/client-contract.constants';
import { IClientContractRepository } from '@/schemas/client-contract/client-contract.repository.interface';
import { IClientContractService } from '@/schemas/client-contract/client-contract.service.interface';
import { IProductRepository } from '@/schemas/product/product.repository.interface';
import {
	CreateClientContractInput,
	GetClientContractInput,
	GetClientContractsByIdsInput,
	GetClientContractsInput,
	UpdateClientContractInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ClientContractService implements IClientContractService {
	constructor(
		@inject(TYPES.ClientContractRepository)
		private readonly clientContractRepository: IClientContractRepository,
		@inject(TYPES.ProductRepository)
		private readonly productRepository: IProductRepository,
	) {}

	public async getClientContract({ id }: GetClientContractInput) {
		const clientContract = await this.clientContractRepository.findById(id);

		if (!clientContract) {
			throw new Error(CLIENT_CONTRACT_NOT_FOUND);
		}

		const {
			ddu_client_contract_properties,
			clients,
			object,
			product,
			manager,
			real_estate_agent,
			agency_contracts,
			bank,
			...client_contract_properties
		} = clientContract;

		return {
			client_contract_properties,
			ddu_client_contract_properties,
			clients: clients.map(({ client, is_main, share }) => ({
				client,
				is_main,
				share,
			})),
			object,
			product: { product, object },
			manager,
			real_estate_agent,
			agency_contracts: agency_contracts.map(({ agency_contract }) => ({
				agency_contract,
				agency: agency_contract.agency,
			})),
			bank,
		};
	}

	public async getClientContracts(input?: GetClientContractsInput | null) {
		const clientContracts = await this.clientContractRepository.findMany(
			input?.object_id,
			input?.options,
		);

		const { client_contracts, total_count } = clientContracts;

		return {
			client_contracts: client_contracts.map(
				({
					ddu_client_contract_properties,
					clients,
					object,
					product,
					manager,
					real_estate_agent,
					agency_contracts,
					bank,
					...client_contract_properties
				}) => ({
					client_contract_properties,
					ddu_client_contract_properties,
					clients: clients.map(({ client, is_main, share }) => ({
						client,
						is_main,
						share,
					})),
					object,
					product: { product, object },
					manager,
					real_estate_agent,
					agency_contracts: agency_contracts.map(({ agency_contract }) => ({
						agency_contract,
						agency: agency_contract.agency,
					})),
					bank,
				}),
			),
			total_count,
		};
	}

	public async getClientContractsByIds({ ids }: GetClientContractsByIdsInput) {
		const clientContracts =
			await this.clientContractRepository.findManyByIds(ids);

		const { client_contracts, total_count } = clientContracts;

		return {
			client_contracts: client_contracts.map(
				({
					ddu_client_contract_properties,
					clients,
					object,
					product,
					manager,
					real_estate_agent,
					agency_contracts,
					bank,
					...client_contract_properties
				}) => ({
					client_contract_properties,
					ddu_client_contract_properties,
					clients: clients.map(({ client, is_main, share }) => ({
						client,
						is_main,
						share,
					})),
					object,
					product: { product, object },
					manager,
					real_estate_agent,
					agency_contracts: agency_contracts.map(({ agency_contract }) => ({
						agency_contract,
						agency: agency_contract.agency,
					})),
					bank,
				}),
			),
			total_count,
		};
	}

	public async createClientContract(input: CreateClientContractInput) {
		const clientContract = await this.clientContractRepository.findByProductId(
			input.client_contract_properties.product_id,
		);

		if (clientContract) {
			throw new Error(PRODUCT_IN_CONTRACT);
		}

		const product = await this.productRepository.findById(
			input.client_contract_properties.product_id,
		);

		if (!product) {
			throw new Error(PRODUCT_NOT_FOUND);
		}

		return this.clientContractRepository.create(product.object_id, input);
	}

	public async updateClientContract(input: UpdateClientContractInput) {
		const clientContract = await this.clientContractRepository.findByProductId(
			input.client_contract_properties.product_id,
		);

		if (
			clientContract &&
			clientContract.id !== input.client_contract_properties.id
		) {
			throw new Error(PRODUCT_IN_CONTRACT);
		}

		const product = await this.productRepository.findById(
			input.client_contract_properties.product_id,
		);

		if (!product) {
			throw new Error(PRODUCT_NOT_FOUND);
		}

		return this.clientContractRepository.update(product.object_id, input);
	}
}
