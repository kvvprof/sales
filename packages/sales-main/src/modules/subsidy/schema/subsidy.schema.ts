import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema, Resolvers, TYPES, useAdmin } from '@/common';
import { ISubsidyService } from '@/modules/subsidy/service/subsidy.service.interface';

@injectable()
export class SubsidySchema implements ISchema {
  constructor(
    @inject(TYPES.SubsidyService)
    private readonly subsidyService: ISubsidyService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicSubsidy {
        id: PositiveInt!
        name: NonEmptyString!
        isVisible: Boolean!
      }

      input CreateSubsidyInput {
        name: NonEmptyString!
        isVisible: Boolean!
      }

      input UpdateSubsidyInput {
        id: PositiveInt!
        name: NonEmptyString
        isVisible: Boolean
      }

      input DeleteSubsidyInput {
        id: PositiveInt!
      }

      type Query {
        getSubsidies: [BasicSubsidy!]!
      }

      type Mutation {
        createSubsidy(input: CreateSubsidyInput!): BasicSubsidy!
        updateSubsidy(input: UpdateSubsidyInput!): BasicSubsidy!
        deleteSubsidy(input: DeleteSubsidyInput!): Boolean!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getSubsidies: async () => {
          return this.subsidyService.getSubsidies();
        },
      },
      Mutation: {
        createSubsidy: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.subsidyService.createSubsidy(input);
        },
        updateSubsidy: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.subsidyService.updateSubsidy(input);
        },
        deleteSubsidy: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.subsidyService.deleteSubsidy(input);
        },
      },
    };
  }
}
