import { inject, injectable } from 'inversify';

import { CLIENT_NOT_FOUND } from '@/schemas/client/client.constants';
import { IClientRepository } from '@/schemas/client/client.repository.interface';
import { IClientService } from '@/schemas/client/client.service.interface';
import {
	CreateClientInput,
	GetClientInput,
	GetClientsInput,
	UpdateClientInput,
} from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ClientService implements IClientService {
	constructor(
		@inject(TYPES.ClientRepository)
		private readonly clientRepository: IClientRepository,
	) {}

	public async getClient({ id }: GetClientInput) {
		const client = await this.clientRepository.findById(id);

		if (!client) {
			throw new Error(CLIENT_NOT_FOUND);
		}

		const {
			client_individual_properties,
			client_individual_minor_properties,
			client_entity_properties,
			...client_properties
		} = client;

		return {
			client_properties,
			client_individual_properties,
			client_individual_minor_properties: {
				...client_individual_minor_properties,
				representatives:
					client_individual_minor_properties?.representatives.map(
						({ client }) => client,
					),
			},
			client_entity_properties,
		};
	}

	public async getClients(input?: GetClientsInput | null) {
		const client = await this.clientRepository.findMany(input?.options);

		const { clients, total_count } = client;

		return {
			clients: clients.map(
				({
					client_individual_properties,
					client_individual_minor_properties,
					client_entity_properties,
					...client_properties
				}) => ({
					client_properties,
					client_individual_properties,
					client_individual_minor_properties: {
						...client_individual_minor_properties,
						representatives:
							client_individual_minor_properties?.representatives.map(
								({ client }) => client,
							),
					},
					client_entity_properties,
				}),
			),
			total_count,
		};
	}

	public async createClient(input: CreateClientInput) {
		return this.clientRepository.create(input);
	}

	public async updateClient(input: UpdateClientInput) {
		return this.clientRepository.update(input);
	}
}
