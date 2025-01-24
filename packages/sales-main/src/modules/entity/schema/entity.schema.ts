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
      type BasicEntity {
        id: PositiveInt!
        commonDbEntitiesId: PositiveInt!
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
