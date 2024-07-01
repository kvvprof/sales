import {
	BasicClient,
	Client,
	Clients,
	CreateClientInput,
	GetClientInput,
	GetClientsInput,
	UpdateClientInput,
} from '@/schemas/schema.types';

export interface IClientService {
	getClient(input: GetClientInput): Promise<Client>;
	getClients(input?: GetClientsInput | null): Promise<Clients>;
	createClient(input: CreateClientInput): Promise<BasicClient>;
	updateClient(input: UpdateClientInput): Promise<BasicClient>;
}
