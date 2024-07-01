import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IEntityService } from '@/schemas/entity/entity.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class EntitySchema implements ISchema {
	constructor(
		@inject(TYPES.EntityService)
		private readonly entityService: IEntityService,
	) {}

	public getTypeDefs(): DocumentNode {
		return gql`
			type BasicCommonEntity {
				id: PositiveInt!
				str_id: String!
				name: String!
				short_name: String!
				display_name: String!
				inn: String!
				kpp: String!
				ogrn: String!
				db_name: String!
			}

			type CommonEntities {
				entities: [BasicCommonEntity!]!
				total_count: PositiveInt!
			}

			input GetCommonEntityInput {
				id: PositiveInt!
			}

			input GetCommonEntitiesInput {
				options: BaseOptionsInput
			}

			type Query {
				getCommonEntity(input: GetCommonEntityInput!): BasicCommonEntity!
				getCommonEntities(input: GetCommonEntitiesInput): CommonEntities!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Query: {
				getCommonEntity: async (_, { input }) => {
					return this.entityService.getEntity(input);
				},
				getCommonEntities: async (_, { input }) => {
					return this.entityService.getEntities(input);
				},
			},
		};
	}
}
