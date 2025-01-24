import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema, Resolvers, TYPES } from '@/common';
import { IAssignmentService } from '@/modules/assignment/service/assignment.service.interface';

@injectable()
export class AssignmentSchema implements ISchema {
  constructor(
    @inject(TYPES.AssignmentService)
    private readonly assignmentService: IAssignmentService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      input CreateAssignmentInput {
        clientContractId: PositiveInt!
        clientIdsFrom: [PositiveInt!]!
        clientIdsTo: [PositiveInt!]!
      }

      type Mutation {
        createAssignment(input: CreateAssignmentInput!): Boolean!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Mutation: {
        createAssignment: async (_, { input }) => {
          return this.assignmentService.createAssignment(input);
        },
      },
    };
  }
}
