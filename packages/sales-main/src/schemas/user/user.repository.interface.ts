import { User } from '@/database/prisma/output';

import { CreateUserInput } from '@/schemas/schema.types';

export interface IUserRepository {
	findMany(): Promise<User[]>;
	findByEmail(email: string): Promise<User | null>;
	createUser(data: CreateUserInput): Promise<User>;
}
