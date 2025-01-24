import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IObjectService } from '@/modules/object/service/object.service.interface';

@injectable()
export class ObjectSchema implements ISchema {
  constructor(
    @inject(TYPES.ObjectService) private readonly objectService: IObjectService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicObject {
        id: PositiveInt!
        commonDbObjectsId: PositiveInt!
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
