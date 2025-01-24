import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers, useAdmin } from '@/common';
import { IBankService } from '@/modules/bank/service/bank.service.interface';

@injectable()
export class BankSchema implements ISchema {
  constructor(
    @inject(TYPES.BankService) private readonly bankService: IBankService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicBank {
        id: PositiveInt!
        name: NonEmptyString!
        isVisible: Boolean!
      }

      input CreateBankInput {
        name: NonEmptyString!
        isVisible: Boolean!
      }

      input UpdateBankInput {
        id: PositiveInt!
        name: NonEmptyString
        isVisible: Boolean
      }

      input DeleteBankInput {
        id: PositiveInt!
      }

      type Query {
        getBanks: [BasicBank!]!
      }

      type Mutation {
        createBank(input: CreateBankInput!): BasicBank!
        updateBank(input: UpdateBankInput!): BasicBank!
        deleteBank(input: DeleteBankInput!): Boolean!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getBanks: async () => {
          return this.bankService.getBanks();
        },
      },
      Mutation: {
        createBank: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.bankService.createBank(input);
        },
        updateBank: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.bankService.updateBank(input);
        },
        deleteBank: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.bankService.deleteBank(input);
        },
      },
    };
  }
}
