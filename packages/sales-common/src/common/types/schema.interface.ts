import { DocumentNode } from 'graphql';

import { Resolvers } from '@/common';

export interface ISchema {
  getTypeDefs(): DocumentNode;
  getResolvers(): Resolvers;
}
