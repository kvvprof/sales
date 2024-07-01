import { inject, injectable } from 'inversify';

import { IFindManyOptions } from '@/common/find-many-options.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import {
	ClientIndividualProperties,
	ClientIndividualMinorProperties,
	ClientEntityProperties,
} from '@/database/prisma/output';
import { IClientRepository } from '@/schemas/client/client.repository.interface';
import {
	ClientCategory,
	CreateClientInput,
	UpdateClientInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ClientRepository implements IClientRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findById(id: number) {
		return this.databaseService.client.client.findFirst({
			where: { id },
			include: {
				client_individual_properties: { include: { client_passport: true } },
				client_individual_minor_properties: {
					include: {
						client_passport: true,
						representatives: {
							include: { client: true },
						},
					},
				},
				client_entity_properties: true,
			},
		});
	}

	public async findMany(options?: IFindManyOptions | null) {
		const filter = options?.prefix
			? {
					OR: [
						{
							full_name: {
								contains: options.prefix,
							},
						},
						{
							inn: {
								contains: options.prefix,
							},
						},
					],
				}
			: undefined;

		const [clients, total_count] = await Promise.all([
			this.databaseService.client.client.findMany({
				where: filter,
				orderBy: { id: 'desc' },
				take: options?.limit,
				skip: options?.offset,
				include: {
					client_individual_properties: { include: { client_passport: true } },
					client_individual_minor_properties: {
						include: {
							client_passport: true,
							representatives: {
								include: { client: true },
							},
						},
					},
					client_entity_properties: true,
				},
			}),

			this.databaseService.client.client.count({ where: filter }),
		]);

		return { clients, total_count };
	}

	public async create({
		client_properties,
		client_individual_properties,
		client_individual_minor_properties,
		client_entity_properties,
	}: CreateClientInput) {
		return this.databaseService.client.$transaction(async (prisma) => {
			let clientIndividualProperties: ClientIndividualProperties | null = null;
			let clientIndividualMinorProperties: ClientIndividualMinorProperties | null =
				null;
			let clientEntityProperties: ClientEntityProperties | null = null;

			if (
				client_properties.client_category === ClientCategory.Individual &&
				client_individual_properties
			) {
				const { client_passport, ...client_individual_props } =
					client_individual_properties;

				const passport =
					client_passport &&
					(await prisma.clientPassport.create({
						data: client_passport,
					}));

				clientIndividualProperties =
					await prisma.clientIndividualProperties.create({
						data: {
							...client_individual_props,
							client_passport_id: passport?.id,
						},
					});
			}

			if (
				client_properties.client_category === ClientCategory.IndividualMinor &&
				client_individual_minor_properties
			) {
				const {
					client_passport,
					representative_ids,
					...client_individual_minor_props
				} = client_individual_minor_properties;

				const passport =
					client_passport &&
					(await prisma.clientPassport.create({
						data: client_passport,
					}));

				clientIndividualMinorProperties =
					await prisma.clientIndividualMinorProperties.create({
						data: {
							...client_individual_minor_props,
							client_passport_id: passport?.id,
						},
					});

				if (representative_ids) {
					const representativeIds = [...new Set(representative_ids)];

					const clientToClientIndividualMinorPropertiesData: {
						client_id: number;
						client_individual_minor_properties_id: number;
					}[] = [];

					for (const id of representativeIds) {
						const client = await prisma.client.findFirst({ where: { id } });
						if (
							client &&
							client.client_category === ClientCategory.Individual
						) {
							clientToClientIndividualMinorPropertiesData.push({
								client_id: client.id,
								client_individual_minor_properties_id:
									clientIndividualMinorProperties.id,
							});
						}
					}

					await prisma.clientToClientIndividualMinorProperties.createMany({
						data: clientToClientIndividualMinorPropertiesData,
					});
				}
			}

			if (
				client_properties.client_category === ClientCategory.Entity &&
				client_entity_properties
			) {
				clientEntityProperties = await prisma.clientEntityProperties.create({
					data: client_entity_properties,
				});
			}

			const client = await prisma.client.create({
				data: {
					...client_properties,
					client_individual_properties_id: clientIndividualProperties?.id,
					client_individual_minor_properties_id:
						clientIndividualMinorProperties?.id,
					client_entity_properties_id: clientEntityProperties?.id,
				},
			});

			return client;
		});
	}

	public async update({
		client_properties,
		client_individual_properties,
		client_individual_minor_properties,
		client_entity_properties,
	}: UpdateClientInput) {
		return this.databaseService.client.$transaction(async (prisma) => {
			const client = await prisma.client.update({
				where: { id: client_properties.id },
				data: { ...client_properties },
				include: {
					client_individual_properties: { include: { client_passport: true } },
					client_individual_minor_properties: {
						include: {
							client_passport: true,
						},
					},
					client_entity_properties: true,
				},
			});

			if (
				client.client_category === ClientCategory.Individual &&
				client_individual_properties
			) {
				const { client_passport, ...client_individual_props } =
					client_individual_properties;

				const clientPassport =
					client_passport &&
					(await prisma.clientPassport.upsert({
						where: {
							id:
								client.client_individual_properties?.client_passport_id ||
								undefined,
						},
						create: client_passport,
						update: client_passport,
					}));

				const clientIndividualProperties =
					await prisma.clientIndividualProperties.upsert({
						where: { id: client.client_individual_properties?.id },
						create: {
							client_passport_id: clientPassport?.id,
							...client_individual_props,
						},
						update: {
							...client_individual_props,
						},
					});

				await prisma.client.update({
					where: { id: client_properties.id },
					data: {
						client_individual_properties_id: clientIndividualProperties.id,
					},
				});
			}

			if (
				client.client_category === ClientCategory.IndividualMinor &&
				client_individual_minor_properties
			) {
				const {
					client_passport,
					representative_ids,
					...client_individual_minor_props
				} = client_individual_minor_properties;

				const clientPassport =
					client_passport &&
					(await prisma.clientPassport.upsert({
						where: {
							id:
								client.client_individual_minor_properties?.client_passport_id ||
								undefined,
						},
						create: client_passport,
						update: client_passport,
					}));

				const clientIndividualMinorProperties =
					await prisma.clientIndividualMinorProperties.upsert({
						where: { id: client.client_individual_minor_properties?.id },
						create: {
							client_passport_id: clientPassport?.id,
							...client_individual_minor_props,
						},
						update: {
							...client_individual_minor_props,
						},
					});

				await prisma.client.update({
					where: { id: client_properties.id },
					data: {
						client_individual_minor_properties_id:
							clientIndividualMinorProperties.id,
					},
				});

				if (representative_ids) {
					await prisma.clientToClientIndividualMinorProperties.deleteMany({
						where: {
							client_individual_minor_properties_id:
								clientIndividualMinorProperties.id,
						},
					});

					const representativeIds = [...new Set(representative_ids)];

					const clientToClientIndividualMinorPropertiesData: {
						client_id: number;
						client_individual_minor_properties_id: number;
					}[] = [];

					for (const id of representativeIds) {
						const client = await prisma.client.findFirst({ where: { id } });

						if (
							client &&
							client.client_category === ClientCategory.Individual
						) {
							clientToClientIndividualMinorPropertiesData.push({
								client_id: client.id,
								client_individual_minor_properties_id:
									clientIndividualMinorProperties.id,
							});
						}
					}

					await prisma.clientToClientIndividualMinorProperties.createMany({
						data: clientToClientIndividualMinorPropertiesData,
					});
				}
			}

			if (
				client.client_category === ClientCategory.Entity &&
				client_entity_properties
			) {
				const clientEntityProperties =
					await prisma.clientEntityProperties.upsert({
						where: { id: client.client_entity_properties?.id },
						create: client_entity_properties,
						update: client_entity_properties,
					});

				await prisma.client.update({
					where: { id: client_properties.id },
					data: {
						client_entity_properties_id: clientEntityProperties.id,
					},
				});
			}

			return client;
		});
	}
}
