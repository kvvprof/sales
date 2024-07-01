import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IBankService } from '@/schemas/bank/bank.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

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
			}

			type Query {
				getBanks: [BasicBank!]!
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
		};
	}
}
