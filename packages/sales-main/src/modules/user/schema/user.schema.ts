import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema, Resolvers, TYPES, useAdmin } from '@/common';
import { IUserService } from '@/modules/user/service/user.service.interface';

@injectable()
export class UserSchema implements ISchema {
  constructor(
    @inject(TYPES.UserService)
    private readonly userService: IUserService,
  ) {}

  public getTypeDefs(): DocumentNode {
    return gql`
      enum UserRole {
        ADMINISTRATOR
        DIRECTOR
        SALES_EMPLOYEE
      }

      type BasicUser {
        id: PositiveInt!
        fullName: NonEmptyString!
        email: NonEmptyString!
        phone: NonEmptyString
        isManager: Boolean!
        userRole: UserRole!
        isStaff: Boolean!
      }

      input CreateUserInput {
        fullName: NonEmptyString!
        email: NonEmptyString!
        phone: NonEmptyString
        isManager: Boolean!
        isStaff: Boolean!
        userRole: UserRole!
      }

      input UpdateUserInput {
        id: PositiveInt!
        fullName: NonEmptyString
        email: NonEmptyString
        phone: NonEmptyString
        isManager: Boolean
        isStaff: Boolean
        userRole: UserRole
      }

      input DeleteUserInput {
        id: PositiveInt!
      }

      type Query {
        getUsers: [BasicUser!]!
      }

      type Mutation {
        createUser(input: CreateUserInput!): BasicUser!
        createStaff(input: CreateUserInput!): BasicUser!
        updateUser(input: UpdateUserInput!): BasicUser!
        deleteUser(input: DeleteUserInput!): Boolean!
      }
    `;
  }

  public getResolvers(): Resolvers {
    return {
      Query: {
        getUsers: async () => {
          return this.userService.getUsers();
        },
      },
      Mutation: {
        createStaff: async (_, { input }) => {
          return this.userService.createUser(input);
        },
        createUser: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.userService.createUser(input);
        },
        updateUser: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.userService.updateUser(input);
        },
        deleteUser: async (_, { input }, ctx) => {
          useAdmin(ctx);
          return this.userService.deleteUser(input);
        },
      },
    };
  }
}
