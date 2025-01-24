import {
  BasicUser,
  CreateUserInput,
  DeleteUserInput,
  UpdateUserInput,
} from '@/common';

export interface IUserService {
  getUsers(): Promise<BasicUser[]>;
  createUser(input: CreateUserInput): Promise<BasicUser>;
  updateUser(input: UpdateUserInput): Promise<BasicUser>;
  deleteUser(input: DeleteUserInput): Promise<boolean>;
}
