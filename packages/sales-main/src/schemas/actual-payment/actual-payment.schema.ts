import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IActualPaymentService } from '@/schemas/actual-payment/actual-payment.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

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
			}

			type ActualPayments {
				actual_payments: [BasicActualPayment!]!
				total_count: NonNegativeInt!
			}

			input GetActualPaymentsInput {
				client_contract_id: PositiveInt!
				options: BasicOptionsInput
			}

			input CreateActualPaymentInput {
				client_contract_id: PositiveInt!
				payment: Decimal!
				date: Date!
			}

			type Query {
				getActualPayments(input: GetActualPaymentsInput!): ActualPayments!
			}

			type Mutation {
				createActualPayment(
					input: CreateActualPaymentInput!
				): BasicActualPayment!
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
			},
		};
	}
}
