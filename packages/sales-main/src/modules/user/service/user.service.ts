import { inject, injectable } from 'inversify';

import {
  CreateUserInput,
  DeleteUserInput,
  TYPES,
  UpdateUserInput,
} from '@/common';
import { IClientContractRepository } from '@/modules/client-contract/repository/client-contract.repository.interface';
import {
  USER_ALREADY_EXISTS,
  USER_IN_USE,
} from '@/modules/user/constants/user.constants';
import { IUserRepository } from '@/modules/user/repository/user.repository.interface';
import { IUserService } from '@/modules/user/service/user.service.interface';

@injectable()
export class UserService implements IUserService {
  constructor(
    @inject(TYPES.UserRepository)
    private readonly userRepository: IUserRepository,
    @inject(TYPES.ClientContractRepository)
    private readonly clientContractRepository: IClientContractRepository,
  ) {}

  public async getUsers() {
    return this.userRepository.findMany();
  }

  public async createUser(input: CreateUserInput) {
    let findUserByEmailRes = await this.userRepository.findByEmail(input.email);

    if (findUserByEmailRes && input.isManager && !input.isStaff) {
      throw new Error(USER_ALREADY_EXISTS);
    }

    if (!findUserByEmailRes) {
      findUserByEmailRes = await this.userRepository.create(input);
    }

    return findUserByEmailRes;
  }

  public async updateUser(input: UpdateUserInput) {
    return this.userRepository.updateById(input);
  }

  public async deleteUser({ id }: DeleteUserInput) {
    const checkContractExistsByCriteriaRes =
      await this.clientContractRepository.checkContractExistsByCriteria({
        managerId: id,
      });

    if (checkContractExistsByCriteriaRes) {
      throw new Error(USER_IN_USE);
    }

    return this.userRepository.deleteById(id);
  }
}
