import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema, Resolvers, TYPES } from '@/common';
import { ITransferActService } from '@/modules/transfer-act/service/transfer-act.service.interface';

@injectable()
export class TransferActSchema implements ISchema {
  constructor(
    @inject(TYPES.TransferActService)
    private readonly transferActService: ITransferActService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicTransferAct {
        id: PositiveInt!
        number: NonEmptyString!
        date: Date!
        link: NonEmptyString
      }

      type TransferAct {
        transferAct: BasicTransferAct!
        clientContract: BasicClientContract!
        object: BasicObject!
        product: BasicProduct!
        representatives: [Representative!]
        clients: [BasicClient!]
      }

      type TransferActs {
        transferActs: [TransferAct!]!
        totalCount: NonNegativeInt!
      }

      input CreateTransferActInput {
        date: Date!
        clientContractId: PositiveInt!
        representativeIds: [PositiveInt!]
      }

      input UpdateTransferActInput {
        id: PositiveInt!
        date: Date
        representativeIds: [PositiveInt!]
      }

      input GetTransferActInput {
        id: PositiveInt!
      }

      input GetTransferActsInput {
        options: BasicOptionsInput
      }

      type Query {
        getTransferAct(input: GetTransferActInput!): TransferAct!
        getTransferActs(input: GetTransferActsInput!): TransferActs!
      }

      type Mutation {
        createTransferAct(input: CreateTransferActInput!): BasicTransferAct!
        updateTransferAct(input: UpdateTransferActInput!): BasicTransferAct!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getTransferAct: async (_, { input }) => {
          return this.transferActService.getTransferAct(input);
        },
        getTransferActs: async (_, { input }) => {
          return this.transferActService.getTransferActs(input);
        },
      },
      Mutation: {
        createTransferAct: async (_, { input }) => {
          return this.transferActService.createTransferAct(input);
        },
        updateTransferAct: async (_, { input }) => {
          return this.transferActService.updateTransferAct(input);
        },
      },
    };
  }
}
