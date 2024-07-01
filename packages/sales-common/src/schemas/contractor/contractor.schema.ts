import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IContractorService } from '@/schemas/contractor/contractor.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ContractorSchema implements ISchema {
	constructor(
		@inject(TYPES.ContractorService)
		private readonly contractorService: IContractorService,
	) {}

	public getTypeDefs(): DocumentNode {
		return gql`
			type BasicCommonContractor {
				id: PositiveInt!
				name: String!
				short_name: String
				inn: String
				kpp: String
				ogrn: String
				legal_address: String
				actual_address: String
				contacts: String
				reconciliation_link: String
				is_active: Boolean
				propogated_at: DateTime
				phone: String
			}

			type BasicCommonAccount {
				id: PositiveInt!
				number: String
				bank: BasicCommonBank
			}

			type BasicCommonBank {
				id: PositiveInt!
				name: String!
				city: String
				bik: String
				correspondent_number: String
			}

			type CommonContractor {
				contractor: BasicCommonContractor!
				accounts: [BasicCommonAccount!]
			}

			type CommonContractors {
				contractors: [CommonContractor!]!
				total_count: PositiveInt!
			}

			input GetCommonContractorInput {
				id: PositiveInt!
			}

			input GetCommonContractorsInput {
				options: BaseOptionsInput
			}

			type Query {
				getCommonContractor(input: GetCommonContractorInput!): CommonContractor!
				getCommonContractors(
					input: GetCommonContractorsInput
				): CommonContractors!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Query: {
				getCommonContractor: async (_, { input }) => {
					return this.contractorService.getContractor(input);
				},
				getCommonContractors: async (_, { input }) => {
					return this.contractorService.getContractors(input);
				},
			},
		};
	}
}
