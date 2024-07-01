import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IObjectService } from '@/schemas/object/object.service.interface';
import { Resolvers } from '@/schemas/schema.types';
import { TYPES } from '@/types';

@injectable()
export class ObjectSchema implements ISchema {
	constructor(
		@inject(TYPES.ObjectService) private readonly objectService: IObjectService,
	) {}

	public getTypeDefs(): DocumentNode {
		return gql`
			type BasicObject {
				id: PositiveInt!
				common_db_objects_id: PositiveInt!
				name: NonEmptyString!
			}

			input GetObjectInput {
				id: PositiveInt!
			}

			type Query {
				getObject(input: GetObjectInput!): BasicObject!
				getObjects: [BasicObject!]!
			}
		`;
	}

	public getResolvers(): Resolvers {
		return {
			Query: {
				getObject: async (_, { input }) => {
					return this.objectService.getObject(input);
				},
				getObjects: async () => {
					return this.objectService.getObjects();
				},
			},
		};
	}
}
