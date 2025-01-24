import { CreateUserInput, UpdateUserInput } from '@/common';
import { User } from '@/integrations';

export interface IUserRepository {
  findMany(): Promise<User[]>;
  findByEmail(email: string): Promise<User | null>;
  create(data: CreateUserInput): Promise<User>;
  updateById(data: UpdateUserInput): Promise<User>;
  deleteById(id: number): Promise<boolean>;
}
