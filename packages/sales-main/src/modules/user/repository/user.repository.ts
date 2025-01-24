import { inject, injectable } from 'inversify';

import { CreateUserInput, TYPES, UpdateUserInput } from '@/common';
import { IDatabaseService } from '@/integrations';
import { IUserRepository } from '@/modules/user/repository/user.repository.interface';

@injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async findMany() {
    return this.databaseService.client.user.findMany({
      orderBy: { id: 'desc' },
    });
  }

  public async findByEmail(email: string) {
    return this.databaseService.client.user.findUnique({
      where: { email },
    });
  }

  public async create(data: CreateUserInput) {
    return this.databaseService.client.user.create({
      data,
    });
  }

  public async updateById({ id, ...data }: UpdateUserInput) {
    return this.databaseService.client.user.update({
      where: { id },
      data: {
        ...data,
        isManager: data.isManager ?? undefined,
        isStaff: data.isStaff ?? undefined,
        userRole: data.userRole ?? undefined,
      },
    });
  }

  public async deleteById(id: number) {
    return !!(await this.databaseService.client.user.delete({
      where: { id },
    }));
  }
}
