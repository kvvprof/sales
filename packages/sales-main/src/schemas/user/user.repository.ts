import { inject, injectable } from 'inversify';

import { IDatabaseService } from '@/database/database.service.interface';
import { CreateUserInput } from '@/schemas/schema.types';
import { IUserRepository } from '@/schemas/user/user.repository.interface';
import { TYPES } from '@/types';

@injectable()
export class UserRepository implements IUserRepository {
	constructor(
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
	) {}

	public async findMany() {
		return this.databaseService.client.user.findMany();
	}

	public async findByEmail(email: string) {
		return this.databaseService.client.user.findFirst({
			where: { email },
		});
	}

	public async createUser(data: CreateUserInput) {
		return this.databaseService.client.user.create({ data });
	}
}
