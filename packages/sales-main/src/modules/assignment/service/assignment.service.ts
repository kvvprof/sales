import { inject, injectable } from 'inversify';

import { CreateAssignmentInput, TYPES } from '@/common';
import { IAssignmentRepository } from '@/modules/assignment/repository/assignment.repository.interface';
import { IAssignmentService } from '@/modules/assignment/service/assignment.service.interface';

@injectable()
export class AssignmentService implements IAssignmentService {
  constructor(
    @inject(TYPES.AssignmentRepository)
    private readonly assignmentRepository: IAssignmentRepository,
  ) {}

  public async createAssignment({
    clientContractId,
    clientIdsFrom,
    clientIdsTo,
  }: CreateAssignmentInput) {
    const assignments =
      await this.assignmentRepository.findMany(clientContractId);

    const order = assignments.length
      ? assignments.sort((a, b) => b.order - a.order)[0].order + 1
      : 1;

    const data = clientIdsFrom.map((clientId) => ({
      clientContractId,
      clientId,
      order,
    }));

    return this.assignmentRepository.create({
      clientIdsFrom: data,
      clientIdsTo: clientIdsTo,
    });
  }
}
