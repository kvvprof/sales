import { BasicUser, CreateUserInput } from '@/schemas/schema.types';

export interface IUserService {
	createUser(input: CreateUserInput): Promise<BasicUser>;
	getUsers(): Promise<BasicUser[]>;
}
