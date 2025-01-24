import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IEscrowAccountHistoryService } from '@/modules/escrow-account-history/service/escrow-account-history.service.interface';

@injectable()
export class EscrowAccountHistorySchema implements ISchema {
  constructor(
    @inject(TYPES.EscrowAccountHistoryService)
    private readonly escrowAccountHistoryService: IEscrowAccountHistoryService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      enum EscrowAccountStatus {
        OPENED
        CLOSED
      }

      type BasicEscrowAccountHistory {
        id: PositiveInt!
        status: EscrowAccountStatus!
        number: String!
        openingDate: Date!
        depositedAmount: Decimal!
        incomingBalance: Decimal!
        dateOfTransaction: Date!
        transactionAmount: Decimal!
        outgoingBalance: Decimal!
        expirationDate: Date!
        depositor: String!
        depositorInn: String
        dduNumber: String!
        dduDate: Date!
        loanAgreementNumber: String
        loanAgreementDate: Date
        closingDate: Date
        builderInn: String!
      }

      type EscrowAccountsHistory {
        escrowAccountsHistory: [BasicEscrowAccountHistory!]!
        totalCount: NonNegativeInt!
      }

      input EscrowAccountHistoryInput {
        status: EscrowAccountStatus!
        number: String!
        openingDate: Date!
        depositedAmount: Decimal!
        incomingBalance: Decimal!
        dateOfTransaction: Date!
        transactionAmount: Decimal!
        outgoingBalance: Decimal!
        expirationDate: Date!
        depositor: String!
        depositorInn: String
        dduNumber: String!
        dduDate: Date!
        loanAgreementNumber: String
        loanAgreementDate: Date
        closingDate: Date
        builderInn: String!
      }

      input GetEscrowAccountsHistoryInput {
        options: BasicOptionsInput
      }

      input GetEscrowAccountsHistoryByDduNumberInput {
        dduNumber: NonEmptyString!
      }

      type Query {
        getEscrowAccountsHistory(
          input: GetEscrowAccountsHistoryInput
        ): EscrowAccountsHistory!
        getEscrowAccountsHistoryByDduNumber(
          input: GetEscrowAccountsHistoryByDduNumberInput!
        ): [BasicEscrowAccountHistory!]!
      }

      type Mutation {
        createEscrowAccountsHistory(
          input: [EscrowAccountHistoryInput!]!
        ): Boolean!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getEscrowAccountsHistory: async (_, { input }) => {
          return this.escrowAccountHistoryService.getEscrowAccountsHistory(
            input,
          );
        },
        getEscrowAccountsHistoryByDduNumber: async (_, { input }) => {
          return this.escrowAccountHistoryService.getEscrowAccountsHistoryByDduNumber(
            input,
          );
        },
      },
      Mutation: {
        createEscrowAccountsHistory: async (_, { input }) => {
          return this.escrowAccountHistoryService.createEscrowAccountsHistory(
            input,
          );
        },
      },
    };
  }
}
