import { inject, injectable } from 'inversify';

import {
  CreateClientContractInput,
  GetClientContractInput,
  GetClientContractsByIdsInput,
  GetClientContractsInput,
  TYPES,
  UpdateClientContractInput,
} from '@/common';
import {
  CLIENT_CONTRACT_NOT_FOUND,
  PRODUCT_IN_CONTRACT,
  PRODUCT_NOT_FOUND,
} from '@/modules/client-contract/constants/client-contract.constants';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';
import { IClientContractService } from '@/modules/client-contract/service/client-contract.service.interface';
import { IProductRepository } from '@/modules/product/repository/product.repository.interface';

@injectable()
export class ClientContractService implements IClientContractService {
  constructor(
    @inject(TYPES.ClientContractRepository)
    private readonly clientContractRepository: IClientContractRepository,
    @inject(TYPES.ProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  public async getClientContract({ id }: GetClientContractInput) {
    const findClientContractByIdRes =
      await this.clientContractRepository.findById(id);

    if (!findClientContractByIdRes) {
      throw new Error(CLIENT_CONTRACT_NOT_FOUND);
    }

    const {
      dduClientContractProperties,
      dkpClientContractProperties,
      clientContractsToClients,
      object,
      product,
      manager,
      realEstateAgent,
      clientContractsToAgencyContracts,
      bank,
      subsidy,
      ...clientContractProperties
    } = findClientContractByIdRes;

    return {
      clientContractProperties,
      dduClientContractProperties,
      dkpClientContractProperties,
      clients: clientContractsToClients.map(({ client, isMain, share }) => ({
        client,
        isMain,
        share,
      })),
      object,
      product: { product, object },
      manager,
      realEstateAgent,
      agencyContracts: clientContractsToAgencyContracts.map(
        ({ agencyContract }) => ({
          agencyContract,
          agency: agencyContract.agency,
          realEstateAgencyContractProperties:
            agencyContract.realEstateAgencyContractProperties,
          mipAgencyContractProperties:
            agencyContract.mipAgencyContractProperties,
        }),
      ),
      bank,
      subsidy,
    };
  }

  public async getClientContracts(input?: GetClientContractsInput | null) {
    const findClientContractsByObjectIdRes =
      await this.clientContractRepository.findManyByObjectId(
        input?.objectId,
        input?.options,
      );

    const { clientContracts, totalCount } = findClientContractsByObjectIdRes;

    return {
      clientContracts: clientContracts.map(
        ({
          dduClientContractProperties,
          dkpClientContractProperties,
          clientContractsToClients,
          object,
          product,
          manager,
          realEstateAgent,
          clientContractsToAgencyContracts,
          bank,
          subsidy,
          ...clientContractProperties
        }) => ({
          clientContractProperties,
          dduClientContractProperties,
          dkpClientContractProperties,
          clients: clientContractsToClients.map(
            ({ client, isMain, share }) => ({
              client,
              isMain,
              share,
            }),
          ),
          object,
          product: { product, object },
          manager,
          realEstateAgent,
          agencyContracts: clientContractsToAgencyContracts.map(
            ({ agencyContract }) => ({
              agencyContract,
              agency: agencyContract.agency,
              realEstateAgencyContractProperties:
                agencyContract.realEstateAgencyContractProperties,
              mipAgencyContractProperties:
                agencyContract.mipAgencyContractProperties,
            }),
          ),
          bank,
          subsidy,
        }),
      ),
      totalCount,
    };
  }

  public async getClientContractsWithoutTransferAct(
    input?: GetClientContractsInput | null,
  ) {
    const findClientContractsByObjectIdRes =
      await this.clientContractRepository.findManyByObjectIdWithoutTransferAct(
        input?.objectId,
        input?.options,
      );

    const { clientContracts, totalCount } = findClientContractsByObjectIdRes;

    return {
      clientContracts: clientContracts.map(
        ({
          dduClientContractProperties,
          dkpClientContractProperties,
          clientContractsToClients,
          object,
          product,
          manager,
          realEstateAgent,
          clientContractsToAgencyContracts,
          bank,
          subsidy,
          ...clientContractProperties
        }) => ({
          clientContractProperties,
          dduClientContractProperties,
          dkpClientContractProperties,
          clients: clientContractsToClients.map(
            ({ client, isMain, share }) => ({
              client,
              isMain,
              share,
            }),
          ),
          object,
          product: { product, object },
          manager,
          realEstateAgent,
          agencyContracts: clientContractsToAgencyContracts.map(
            ({ agencyContract }) => ({
              agencyContract,
              agency: agencyContract.agency,
              realEstateAgencyContractProperties:
                agencyContract.realEstateAgencyContractProperties,
              mipAgencyContractProperties:
                agencyContract.mipAgencyContractProperties,
            }),
          ),
          bank,
          subsidy,
        }),
      ),
      totalCount,
    };
  }

  public async getClientContractsByIds({ ids }: GetClientContractsByIdsInput) {
    const findClientContractsByIdsRes =
      await this.clientContractRepository.findManyByIds(ids);

    const { clientContracts, totalCount } = findClientContractsByIdsRes;

    return {
      clientContracts: clientContracts.map(
        ({
          dduClientContractProperties,
          dkpClientContractProperties,
          clientContractsToClients,
          object,
          product,
          manager,
          realEstateAgent,
          clientContractsToAgencyContracts,
          bank,
          subsidy,
          ...clientContractProperties
        }) => ({
          clientContractProperties,
          dduClientContractProperties,
          dkpClientContractProperties,
          clients: clientContractsToClients.map(
            ({ client, isMain, share }) => ({
              client,
              isMain,
              share,
            }),
          ),
          object,
          product: { product, object },
          manager,
          realEstateAgent,
          agencyContracts: clientContractsToAgencyContracts.map(
            ({ agencyContract }) => ({
              agencyContract,
              agency: agencyContract.agency,
              realEstateAgencyContractProperties:
                agencyContract.realEstateAgencyContractProperties,
              mipAgencyContractProperties:
                agencyContract.mipAgencyContractProperties,
            }),
          ),
          bank,
          subsidy,
        }),
      ),
      totalCount,
    };
  }

  public async createClientContract(input: CreateClientContractInput) {
    const findClientContractByProductIdRes =
      await this.clientContractRepository.findByProductId(
        input.clientContractProperties.productId,
      );

    if (findClientContractByProductIdRes) {
      throw new Error(PRODUCT_IN_CONTRACT);
    }

    const findProductByIdRes = await this.productRepository.findById(
      input.clientContractProperties.productId,
    );

    if (!findProductByIdRes) {
      throw new Error(PRODUCT_NOT_FOUND);
    }

    return this.clientContractRepository.create(
      findProductByIdRes.objectId,
      input,
    );
  }

  public async updateClientContract(input: UpdateClientContractInput) {
    const findClientContractByProductIdRes =
      await this.clientContractRepository.findByProductId(
        input.clientContractProperties.productId,
      );

    if (
      findClientContractByProductIdRes &&
      findClientContractByProductIdRes.id !== input.clientContractProperties.id
    ) {
      throw new Error(PRODUCT_IN_CONTRACT);
    }

    const findProductByIdRes = await this.productRepository.findById(
      input.clientContractProperties.productId,
    );

    if (!findProductByIdRes) {
      throw new Error(PRODUCT_NOT_FOUND);
    }

    return this.clientContractRepository.updateById(
      findProductByIdRes.objectId,
      input,
    );
  }
}
