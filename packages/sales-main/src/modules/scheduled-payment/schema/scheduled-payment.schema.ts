import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IScheduledPaymentService } from '@/modules/scheduled-payment/service/scheduled-payment.service.interface';

@injectable()
export class ScheduledPaymentSchema implements ISchema {
  constructor(
    @inject(TYPES.ScheduledPaymentService)
    private readonly scheduledPaymentService: IScheduledPaymentService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      enum ScheduledPaymentType {
        OWN
        MORTGAGE
        EXCHANGE
        MATERNITY_CAPITAL
      }

      type BasicScheduledPayment {
        id: PositiveInt!
        payment: PositiveDecimal!
        date: Date!
        scheduledPaymentType: ScheduledPaymentType!
      }

      type ScheduledPayments {
        scheduledPayments: [BasicScheduledPayment!]!
        totalCount: NonNegativeInt!
      }

      input GetScheduledPaymentsInput {
        clientContractId: PositiveInt!
        options: BasicOptionsInput
      }

      input CreateScheduledPaymentInput {
        clientContractId: PositiveInt!
        payment: PositiveDecimal!
        date: Date!
        scheduledPaymentType: ScheduledPaymentType!
      }

      input DeleteScheduledPaymentInput {
        id: PositiveInt!
      }

      type Query {
        getScheduledPayments(
          input: GetScheduledPaymentsInput!
        ): ScheduledPayments!
      }

      type Mutation {
        createScheduledPayment(
          input: CreateScheduledPaymentInput!
        ): BasicScheduledPayment!
        createScheduledPayments(
          input: [CreateScheduledPaymentInput!]!
        ): Boolean!
        deleteScheduledPayment(input: DeleteScheduledPaymentInput!): IsDeleted!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getScheduledPayments: async (_, { input }) => {
          return this.scheduledPaymentService.getScheduledPayments(input);
        },
      },
      Mutation: {
        createScheduledPayment: async (_, { input }) => {
          return this.scheduledPaymentService.createScheduledPayment(input);
        },
        deleteScheduledPayment: async (_, { input }) => {
          return this.scheduledPaymentService.deleteScheduledPayment(input);
        },
        createScheduledPayments: async (_, { input }) => {
          return this.scheduledPaymentService.createScheduledPayments(input);
        },
      },
    };
  }
}
