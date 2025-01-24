import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { TYPES, ISchema, Resolvers } from '@/common';
import { IEntityService } from '@/modules/entity/service/entity.service.interface';

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
        strId: String!
        name: String!
        shortName: String!
        displayName: String!
        inn: String!
        kpp: String!
        ogrn: String!
        dbName: String!
      }

      type CommonEntities {
        entities: [BasicCommonEntity!]!
        totalCount: PositiveInt!
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
