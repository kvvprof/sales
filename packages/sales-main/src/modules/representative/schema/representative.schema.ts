import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema, Resolvers, TYPES } from '@/common';
import { IRepresentativeService } from '@/modules/representative/service/representative.service.interface';

@injectable()
export class RepresentativeSchema implements ISchema {
  constructor(
    @inject(TYPES.RepresentativeService)
    private readonly representativeService: IRepresentativeService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      type BasicRepresentative {
        id: PositiveInt!
        fullName: NonEmptyString!
        attorneyNumber: NonEmptyString
        attorneyDate: Date
        authorizedBy: NonEmptyString
        authorizedRole: NonEmptyString
      }

      type Representative {
        representative: BasicRepresentative!
        client: BasicClient!
      }

      input CreateRepresentativeInput {
        clientId: PositiveInt!
        fullName: NonEmptyString!
        attorneyNumber: NonEmptyString
        attorneyDate: Date
        authorizedBy: NonEmptyString
        authorizedRole: NonEmptyString
      }

      input UpdateRepresentativeInput {
        id: PositiveInt!
        fullName: NonEmptyString
        attorneyNumber: NonEmptyString
        attorneyDate: Date
        authorizedBy: NonEmptyString
        authorizedRole: NonEmptyString
      }

      input GetRepresentativesByClientIdsInput {
        clientIds: [PositiveInt!]!
      }

      type Query {
        getRepresentativesByClientIds(
          input: GetRepresentativesByClientIdsInput!
        ): [Representative!]!
      }

      type Mutation {
        createRepresentative(
          input: CreateRepresentativeInput!
        ): BasicRepresentative!
        updateRepresentative(
          input: UpdateRepresentativeInput!
        ): BasicRepresentative!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getRepresentativesByClientIds: async (_, { input }) => {
          return this.representativeService.getRepresentativesByClientIds(
            input,
          );
        },
      },
      Mutation: {
        createRepresentative: async (_, { input }) => {
          return this.representativeService.createRepresentative(input);
        },
        updateRepresentative: async (_, { input }) => {
          return this.representativeService.updateRepresentative(input);
        },
      },
    };
  }
}
