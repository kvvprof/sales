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
			type BasicEntity {
				id: PositiveInt!
				common_db_entities_id: PositiveInt!
				name: NonEmptyString!
				website: NonEmptyString
			}

			type Entity {
				entity: BasicEntity!
				objects: [BasicObject!]!
			}

			type Query {
				getEntities: [Entity!]!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Query: {
				getEntities: async () => {
					return this.entityService.getEntities();
				},
			},
		};
	}
}
