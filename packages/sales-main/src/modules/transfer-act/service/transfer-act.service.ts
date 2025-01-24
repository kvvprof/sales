import { inject, injectable } from 'inversify';

import {
  CreateTransferActInput,
  GetTransferActInput,
  GetTransferActsInput,
  TYPES,
  UpdateTransferActInput,
} from '@/common';
import { CLIENT_CONTRACT_NOT_FOUND } from '@/modules/client-contract/constants/client-contract.constants';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';
import { TRANSFER_ACT_NOT_FOUND } from '@/modules/transfer-act/constants/transfer-act.constants';
import { ITransferActRepository } from '@/modules/transfer-act/repository/transfer-act.repository.interface';
import { ITransferActService } from '@/modules/transfer-act/service/transfer-act.service.interface';

@injectable()
export class TransferActService implements ITransferActService {
  constructor(
    @inject(TYPES.TransferActRepository)
    private readonly transferActRepository: ITransferActRepository,
    @inject(TYPES.ClientContractRepository)
    private readonly clientContractRepository: IClientContractRepository,
  ) {}

  public async getTransferAct({ id }: GetTransferActInput) {
    const findTransferActByIdRes =
      await this.transferActRepository.findById(id);

    if (!findTransferActByIdRes) {
      throw new Error(TRANSFER_ACT_NOT_FOUND);
    }

    const {
      clientContract: { clientContractsToClients, ...clientContract },
      object,
      product,
      transferActsToRepresentatives,
      ...transferAct
    } = findTransferActByIdRes;

    return {
      clientContract,
      object,
      product,
      transferAct,
      representatives: transferActsToRepresentatives.map(
        ({ representative: { client, ...representative } }) => ({
          representative,
          client,
        }),
      ),
      clients: clientContractsToClients.map(({ client }) => client),
    };
  }

  public async getTransferActs({ options }: GetTransferActsInput) {
    const findTransferActsRes =
      await this.transferActRepository.findMany(options);

    const { transferActs, totalCount } = findTransferActsRes;

    return {
      transferActs: transferActs.map(
        ({
          clientContract: { clientContractsToClients, ...clientContract },
          object,
          product,
          transferActsToRepresentatives,
          ...transferAct
        }) => ({
          clientContract,
          object,
          product,
          transferAct,
          representatives: transferActsToRepresentatives.map(
            ({ representative: { client, ...representative } }) => ({
              representative,
              client,
            }),
          ),
          clients: clientContractsToClients.map(({ client }) => client),
        }),
      ),
      totalCount,
    };
  }

  public async createTransferAct(input: CreateTransferActInput) {
    const findClientContractByIdRes =
      await this.clientContractRepository.findById(input.clientContractId);

    if (!findClientContractByIdRes) {
      throw new Error(CLIENT_CONTRACT_NOT_FOUND);
    }

    return this.transferActRepository.create({
      ...input,
      number: findClientContractByIdRes.product.id.toString(),
      productId: findClientContractByIdRes.product.id,
      objectId: findClientContractByIdRes.object.id,
    });
  }

  public async updateTransferAct(input: UpdateTransferActInput) {
    return this.transferActRepository.updateById(input);
  }
}
