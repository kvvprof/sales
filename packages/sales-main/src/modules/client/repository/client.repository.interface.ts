import {
  CreateClientInput,
  IFindManyOptions,
  UpdateClientInput,
} from '@/common';
import {
  Client,
  ClientEntityProperties,
  ClientIndividualMinorProperties,
  ClientIndividualProperties,
  ClientPassport,
  Representative,
} from '@/integrations';

export interface IClient extends Client {
  clientIndividualProperties:
    | (ClientIndividualProperties & {
        clientPassport: ClientPassport | null;
      })
    | null;
  clientIndividualMinorProperties:
    | (ClientIndividualMinorProperties & {
        clientPassport: ClientPassport | null;
      } & { clientsToClientIndividualMinorProperties: { client: Client }[] })
    | null;
  clientEntityProperties: ClientEntityProperties | null;
  representatives: Representative[];
}

export interface IClientRepository {
  findById(id: number): Promise<IClient | null>;
  findMany(
    options?: IFindManyOptions | null,
  ): Promise<{ clients: IClient[]; totalCount: number }>;
  create(data: CreateClientInput): Promise<Client>;
  updateById(data: UpdateClientInput): Promise<Client>;
}
