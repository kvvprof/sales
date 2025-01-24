import { CreateAssignmentInput } from '@/common';

export interface IAssignmentService {
  createAssignment(input: CreateAssignmentInput): Promise<boolean>;
}
