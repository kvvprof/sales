import { IFindManyOptions } from '@/common/find-many-options.interface';
import {
	Client,
	ClientIndividualProperties,
	ClientIndividualMinorProperties,
	ClientEntityProperties,
	ClientPassport,
} from '@/database/prisma/output';

import { CreateClientInput, UpdateClientInput } from '@/schemas/schema.types';

export interface IClient extends Client {
	client_individual_properties:
		| (ClientIndividualProperties & {
				client_passport: ClientPassport | null;
		  })
		| null;
	client_individual_minor_properties:
		| (ClientIndividualMinorProperties & {
				client_passport: ClientPassport | null;
		  } & { representatives: { client: Client }[] })
		| null;
	client_entity_properties: ClientEntityProperties | null;
}

export interface IClientRepository {
	findById(id: number): Promise<IClient | null>;
	findMany(
		options?: IFindManyOptions | null,
	): Promise<{ clients: IClient[]; total_count: number }>;
	create(data: CreateClientInput): Promise<Client>;
	update(data: UpdateClientInput): Promise<Client>;
}
