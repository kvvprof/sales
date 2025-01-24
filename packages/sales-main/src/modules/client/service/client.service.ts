import { inject, injectable } from 'inversify';

import {
  CreateClientInput,
  GetClientInput,
  GetClientsInput,
  TYPES,
  UpdateClientInput,
} from '@/common';
import { CLIENT_NOT_FOUND } from '@/modules/client/constants/client.constants';
import { IClientRepository } from '@/modules/client/repository/client.repository.interface';
import { IClientService } from '@/modules/client/service/client.service.interface';

@injectable()
export class ClientService implements IClientService {
  constructor(
    @inject(TYPES.ClientRepository)
    private readonly clientRepository: IClientRepository,
  ) {}

  public async getClient({ id }: GetClientInput) {
    const findClientByIdRes = await this.clientRepository.findById(id);

    if (!findClientByIdRes) {
      throw new Error(CLIENT_NOT_FOUND);
    }

    const {
      clientIndividualProperties,
      clientIndividualMinorProperties,
      clientEntityProperties,
      representatives,
      ...clientProperties
    } = findClientByIdRes;

    return {
      clientProperties,
      clientIndividualProperties,
      clientIndividualMinorProperties: {
        ...clientIndividualMinorProperties,
        representatives:
          clientIndividualMinorProperties?.clientsToClientIndividualMinorProperties.map(
            ({ client }) => client,
          ),
      },
      clientEntityProperties,
      representatives,
    };
  }

  public async getClients(input?: GetClientsInput | null) {
    const findClientsRes = await this.clientRepository.findMany(input?.options);

    const { clients, totalCount } = findClientsRes;

    return {
      clients: clients.map(
        ({
          clientIndividualProperties,
          clientIndividualMinorProperties,
          clientEntityProperties,
          representatives,
          ...clientProperties
        }) => ({
          clientProperties,
          clientIndividualProperties,
          clientIndividualMinorProperties: {
            ...clientIndividualMinorProperties,
            representatives:
              clientIndividualMinorProperties?.clientsToClientIndividualMinorProperties.map(
                ({ client }) => client,
              ),
          },
          clientEntityProperties,
          representatives,
        }),
      ),
      totalCount,
    };
  }

  public async createClient(input: CreateClientInput) {
    return this.clientRepository.create(input);
  }

  public async updateClient(input: UpdateClientInput) {
    return this.clientRepository.updateById(input);
  }
}
