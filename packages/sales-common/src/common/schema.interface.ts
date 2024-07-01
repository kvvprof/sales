import { DocumentNode } from 'graphql';

import { Resolvers } from '@/schemas/schema.types';

export interface ISchema {
	getTypeDefs(): DocumentNode;
	getResolvers(): Resolvers;
}
