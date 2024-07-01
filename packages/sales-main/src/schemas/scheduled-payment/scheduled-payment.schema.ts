import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IScheduledPaymentService } from '@/schemas/scheduled-payment/scheduled-payment.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

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
				scheduled_payment_type: ScheduledPaymentType!
			}

			type ScheduledPayments {
				scheduled_payments: [BasicScheduledPayment!]!
				total_count: NonNegativeInt!
			}

			input GetScheduledPaymentsInput {
				client_contract_id: PositiveInt!
				options: BasicOptionsInput
			}

			input CreateScheduledPaymentInput {
				client_contract_id: PositiveInt!
				payment: PositiveDecimal!
				date: Date!
				scheduled_payment_type: ScheduledPaymentType!
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
			},
		};
	}
}
