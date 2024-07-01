import { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { Resolvers } from '@/schemas/schema.types';
import { IUserService } from '@/schemas/user/user.service.interface';
import { TYPES } from '@/types';

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
				full_name: NonEmptyString!
				email: NonEmptyString!
				phone: NonEmptyString
				is_manager: Boolean!
				user_role: UserRole!
			}

			input CreateUserInput {
				full_name: NonEmptyString!
				email: NonEmptyString!
				phone: NonEmptyString
				is_manager: Boolean!
				user_role: UserRole!
			}

			type Query {
				getUsers: [BasicUser!]!
			}

			type Mutation {
				createUser(input: CreateUserInput!): BasicUser!
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
				createUser: async (_, { input }) => {
					return this.userService.createUser(input);
				},
			},
		};
	}
}
