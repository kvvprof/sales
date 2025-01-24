import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IActualPaymentService } from '@/modules/actual-payment/service/actual-payment.service.interface';

@injectable()
export class ActualPaymentSchema implements ISchema {
  constructor(
    @inject(TYPES.ActualPaymentService)
    private readonly actualPaymentService: IActualPaymentService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicActualPayment {
        id: PositiveInt!
        payment: Decimal!
        date: Date!
        clientContractId: PositiveInt!
      }

      type ActualPayments {
        actualPayments: [BasicActualPayment!]!
        totalCount: NonNegativeInt!
      }

      input GetActualPaymentsInput {
        clientContractId: PositiveInt!
        options: BasicOptionsInput
      }

      input CreateActualPaymentInput {
        clientContractId: PositiveInt!
        payment: Decimal!
        date: Date!
      }

      input DeleteActualPaymentInput {
        id: PositiveInt!
      }

      type Query {
        getActualPayments(input: GetActualPaymentsInput!): ActualPayments!
      }

      type Mutation {
        createActualPayment(
          input: CreateActualPaymentInput!
        ): BasicActualPayment!
        createActualPayments(input: [CreateActualPaymentInput!]!): Boolean!
        deleteActualPayment(input: DeleteActualPaymentInput!): IsDeleted!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getActualPayments: async (_, { input }) => {
          return this.actualPaymentService.getActualPayments(input);
        },
      },
      Mutation: {
        createActualPayment: async (_, { input }) => {
          return this.actualPaymentService.createActualPayment(input);
        },
        deleteActualPayment: async (_, { input }) => {
          return this.actualPaymentService.deleteActualPayment(input);
        },
        createActualPayments: async (_, { input }) => {
          return this.actualPaymentService.createActualPayments(input);
        },
      },
    };
  }
}
