import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { DDUClientContractProperties } from '@/database/prisma/output';
import { IClientContractRepository } from '@/schemas/client-contract/client-contract.repository.interface';
import {
	ClientContractType,
	CreateClientContractInput,
	UpdateClientContractInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ClientContractRepository implements IClientContractRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findById(id: number) {
		return this.databaseService.client.clientContract.findFirst({
			where: { id },
			include: {
				object: true,
				manager: true,
				real_estate_agent: true,
				bank: true,
				clients: { include: { client: true } },
				product: { include: { object: true } },
				agency_contracts: {
					include: { agency_contract: { include: { agency: true } } },
				},
				ddu_client_contract_properties: true,
			},
		});
	}

	public async findMany(
		object_id?: number | null,
		options?: IFindManyOptions | null,
	) {
		const filter = options?.prefix
			? {
					OR: [
						{
							number: {
								startsWith: options.prefix,
							},
						},
						{
							clients: {
								some: {
									client: { full_name: { contains: options.prefix } },
								},
							},
						},
					],
				}
			: undefined;

		const [client_contracts, total_count] = await Promise.all([
			this.databaseService.client.clientContract.findMany({
				where: { object_id: object_id || undefined, ...filter },
				orderBy: { date: 'desc' },
				take: options?.limit,
				skip: options?.offset,
				include: {
					object: true,
					manager: true,
					real_estate_agent: true,
					bank: true,
					clients: { include: { client: true } },
					product: { include: { object: true } },
					agency_contracts: {
						include: { agency_contract: { include: { agency: true } } },
					},
					ddu_client_contract_properties: true,
				},
			}),

			this.databaseService.client.clientContract.count({
				where: { object_id: object_id || undefined, ...filter },
			}),
		]);

		return { client_contracts, total_count };
	}

	public async findManyByIds(ids: number[]) {
		const [client_contracts, total_count] = await Promise.all([
			this.databaseService.client.clientContract.findMany({
				where: {
					id: {
						in: ids,
					},
				},
				orderBy: { date: 'desc' },
				include: {
					object: true,
					manager: true,
					real_estate_agent: true,
					bank: true,
					clients: { include: { client: true } },
					product: { include: { object: true } },
					agency_contracts: {
						include: { agency_contract: { include: { agency: true } } },
					},
					ddu_client_contract_properties: true,
				},
			}),

			this.databaseService.client.clientContract.count({
				where: {
					id: {
						in: ids,
					},
				},
			}),
		]);

		return { client_contracts, total_count };
	}

	public async findByProductId(product_id: number) {
		return this.databaseService.client.clientContract.findFirst({
			where: { product_id },
		});
	}

	public async create(
		object_id: number,
		{
			client_contract_properties: {
				clients,
				agency_contract_ids,
				...client_contract_properties
			},
			ddu_client_contract_properties,
		}: CreateClientContractInput,
	) {
		return this.databaseService.client.$transaction(async (prisma) => {
			let dduClientContractProperties: DDUClientContractProperties | null =
				null;

			if (
				ddu_client_contract_properties &&
				client_contract_properties.client_contract_type ===
					ClientContractType.Ddu
			) {
				dduClientContractProperties =
					await prisma.dDUClientContractProperties.create({
						data: ddu_client_contract_properties,
					});
			}

			const clientContract = await prisma.clientContract.create({
				data: {
					object_id,
					ddu_client_contract_properties_id: dduClientContractProperties?.id,
					...client_contract_properties,
				},
			});

			const clientContractToClientData = [...new Set(clients)].map(
				(client) => ({
					client_contract_id: clientContract.id,
					...client,
				}),
			);

			const clientContractToAgencyContractData = [
				...new Set(agency_contract_ids),
			]?.map((agency_contract_id) => ({
				client_contract_id: clientContract.id,
				agency_contract_id,
			}));

			await Promise.all([
				prisma.clientContractToClient.createMany({
					data: clientContractToClientData,
				}),
				prisma.clientContractToAgencyContract.createMany({
					data: clientContractToAgencyContractData,
				}),
			]);

			return clientContract;
		});
	}

	public async update(
		object_id: number,
		{
			client_contract_properties: {
				clients,
				agency_contract_ids,
				...client_contract_properties
			},
			ddu_client_contract_properties,
		}: UpdateClientContractInput,
	) {
		return this.databaseService.client.$transaction(async (prisma) => {
			const clientContract = await prisma.clientContract.update({
				where: { id: client_contract_properties.id },
				data: {
					object_id,
					...client_contract_properties,
				},
			});

			if (
				ddu_client_contract_properties &&
				clientContract.client_contract_type === ClientContractType.Ddu
			) {
				const dduClientContractProperties =
					await prisma.dDUClientContractProperties.upsert({
						where: {
							id: clientContract.ddu_client_contract_properties_id || undefined,
						},
						create: ddu_client_contract_properties,
						update: ddu_client_contract_properties,
					});

				await prisma.clientContract.update({
					where: { id: client_contract_properties.id },
					data: {
						ddu_client_contract_properties_id: dduClientContractProperties.id,
					},
				});
			}

			const clientContractToClientData = [...new Set(clients)].map(
				(client) => ({
					client_contract_id: clientContract.id,
					...client,
				}),
			);

			const clientContractToAgencyContractData = [
				...new Set(agency_contract_ids),
			]?.map((agency_contract_id) => ({
				client_contract_id: clientContract.id,
				agency_contract_id,
			}));

			await Promise.all([
				prisma.clientContractToClient.deleteMany({
					where: { client_contract_id: clientContract.id },
				}),
				prisma.clientContractToAgencyContract.deleteMany({
					where: { client_contract_id: clientContract.id },
				}),
			]);

			await Promise.all([
				prisma.clientContractToClient.createMany({
					data: clientContractToClientData,
				}),
				prisma.clientContractToAgencyContract.createMany({
					data: clientContractToAgencyContractData,
				}),
			]);

			return clientContract;
		});
	}
}
