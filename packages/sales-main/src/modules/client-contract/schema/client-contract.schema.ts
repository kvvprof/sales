import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IClientContractService } from '@/modules/client-contract/service/client-contract.service.interface';

@injectable()
export class ClientContractSchema implements ISchema {
  constructor(
    @inject(TYPES.ClientContractService)
    private readonly clientContractService: IClientContractService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      enum ClientContractType {
        DDU
        DKP
      }

      type BasicClientContract {
        id: PositiveInt!
        number: NonEmptyString!
        date: Date!
        registrationDate: Date
        price: PositiveDecimal!
        clientContractType: ClientContractType!
        isRealEstateAgencyActDisabled: Boolean
        comment: String
        link: String
      }

      type BasicDduClientContractProperties {
        id: PositiveInt!
        isEscrowDiscount: Boolean
        escrowAccountOpeningDate: Date
        escrowPeriod: Date
        escrowAccountNumber: NonEmptyString
        dduLink: NonEmptyString
        returnAccount: NonEmptyString
      }

      type BasicDkpClientContractProperties {
        id: PositiveInt!
        dkpLink: NonEmptyString
      }

      type BasicClientContractToClient {
        client: BasicClient!
        isMain: Boolean!
        share: NonNegativeInt!
      }

      type AgencyContractClientContract {
        agency: BasicAgency!
        agencyContract: BasicAgencyContract!
        realEstateAgencyContractProperties: BasicRealEstateAgencyContractProperties
        mipAgencyContractProperties: BasicMipAgencyContractProperties
      }

      type ClientContract {
        clientContractProperties: BasicClientContract!
        dduClientContractProperties: BasicDduClientContractProperties
        dkpClientContractProperties: BasicDkpClientContractProperties
        clients: [BasicClientContractToClient!]!
        object: BasicObject!
        product: Product!
        manager: BasicUser
        realEstateAgent: BasicRealEstateAgent
        agencyContracts: [AgencyContractClientContract]
        bank: BasicBank
        subsidy: BasicSubsidy
      }

      type ClientContracts {
        clientContracts: [ClientContract!]!
        totalCount: NonNegativeInt!
      }

      type ClientContractsWithTransactionAmount {
        clientContract: ClientContract!
        transactionAmount: PositiveDecimal!
      }

      input GetClientContractInput {
        id: PositiveInt!
      }

      input GetClientContractsInput {
        objectId: PositiveInt
        options: BasicOptionsInput
      }

      input GetClientContractsByIdsInput {
        ids: [PositiveInt!]!
      }

      input ClientContractToClientInput {
        clientId: PositiveInt!
        isMain: Boolean!
        share: NonNegativeInt!
      }

      input DduClientContractPropertiesInput {
        dduLink: NonEmptyString
        returnAccount: NonEmptyString
        escrowAccountOpeningDate: Date
        escrowPeriod: Date
        escrowAccountNumber: NonEmptyString
        isEscrowDiscount: Boolean
      }

      input DkpClientContractPropertiesInput {
        dkpLink: NonEmptyString
      }

      input CreateClientContractPropertiesInput {
        number: NonEmptyString!
        date: Date!
        price: PositiveDecimal!
        registrationDate: Date
        clientContractType: ClientContractType!
        productId: PositiveInt!
        managerId: PositiveInt
        realEstateAgentId: PositiveInt
        bankId: PositiveInt
        subsidyId: PositiveInt
        clients: [ClientContractToClientInput!]!
        agencyContractIds: [PositiveInt!]
        comment: String
      }

      input UpdateClientContractPropertiesInput {
        id: PositiveInt!
        number: NonEmptyString
        date: Date
        price: PositiveDecimal
        registrationDate: Date
        productId: PositiveInt
        managerId: PositiveInt
        realEstateAgentId: PositiveInt
        bankId: PositiveInt
        subsidyId: PositiveInt
        clients: [ClientContractToClientInput!]
        agencyContractIds: [PositiveInt!]
        isRealEstateAgencyActDisabled: Boolean
        comment: String
      }

      input CreateClientContractInput {
        clientContractProperties: CreateClientContractPropertiesInput!
        dduClientContractProperties: DduClientContractPropertiesInput
        dkpClientContractProperties: DkpClientContractPropertiesInput
      }

      input UpdateClientContractInput {
        clientContractProperties: UpdateClientContractPropertiesInput!
        dduClientContractProperties: DduClientContractPropertiesInput
        dkpClientContractProperties: DkpClientContractPropertiesInput
      }

      type Query {
        getClientContract(input: GetClientContractInput!): ClientContract!
        getClientContracts(input: GetClientContractsInput): ClientContracts!
        getClientContractsWithoutTransferAct(
          input: GetClientContractsInput
        ): ClientContracts!
        getClientContractsByIds(
          input: GetClientContractsByIdsInput!
        ): ClientContracts!
      }

      type Mutation {
        createClientContract(
          input: CreateClientContractInput!
        ): BasicClientContract!
        updateClientContract(
          input: UpdateClientContractInput!
        ): BasicClientContract!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getClientContract: async (_, { input }) => {
          return this.clientContractService.getClientContract(input);
        },
        getClientContracts: async (_, { input }) => {
          return this.clientContractService.getClientContracts(input);
        },
        getClientContractsWithoutTransferAct: async (_, { input }) => {
          return this.clientContractService.getClientContractsWithoutTransferAct(
            input,
          );
        },
        getClientContractsByIds: async (_, { input }) => {
          return this.clientContractService.getClientContractsByIds(input);
        },
      },
      Mutation: {
        createClientContract: async (_, { input }) => {
          return this.clientContractService.createClientContract(input);
        },
        updateClientContract: async (_, { input }) => {
          return this.clientContractService.updateClientContract(input);
        },
      },
    };
  }
}
