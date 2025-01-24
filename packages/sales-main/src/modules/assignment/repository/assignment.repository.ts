import { inject, injectable } from 'inversify';

import { TYPES } from '@/common';
import { IDatabaseService } from '@/integrations';
import {
  IAssignmentRepository,
  ICreateAssignment,
} from '@/modules/assignment/repository/assignment.repository.interface';

@injectable()
export class AssignmentRepository implements IAssignmentRepository {
  constructor(
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
  ) {}

  public async create({ clientIdsFrom, clientIdsTo }: ICreateAssignment) {
    return !!(await this.databaseService.client.$transaction(async (prisma) => {
      const clientContractId = clientIdsFrom[0].clientContractId;

      await prisma.clientContractToClient.deleteMany({
        where: { clientContractId },
      });

      await prisma.clientContractToClient.createMany({
        data: clientIdsTo.map((clientId) => ({
          clientId,
          clientContractId,
          isMain: false,
          share: 0,
        })),
      });

      return prisma.assignment.createMany({
        data: clientIdsFrom,
      });
    }));
  }

  public async findMany(clientContractId: number) {
    return this.databaseService.client.assignment.findMany({
      where: { clientContractId },
    });
  }
}
