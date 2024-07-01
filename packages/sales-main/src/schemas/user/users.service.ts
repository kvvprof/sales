import { inject, injectable } from 'inversify';

import { CreateUserInput } from '@/schemas/schema.types';
import { IUserRepository } from '@/schemas/user/user.repository.interface';
import { IUserService } from '@/schemas/user/user.service.interface';
import { TYPES } from '@/types';

@injectable()
export class UserService implements IUserService {
	constructor(
		@inject(TYPES.UserRepository)
		private readonly userRepository: IUserRepository,
	) {}

	public async createUser(input: CreateUserInput) {
		let user = await this.userRepository.findByEmail(input.email);

		if (!user) {
			user = await this.userRepository.createUser(input);
		}

		return user;
	}

	public async getUsers() {
		return this.userRepository.findMany();
	}
}
