import { Assignment } from '@/integrations';

export interface ICreateAssignment {
  clientIdsFrom: {
    clientContractId: number;
    clientId: number;
    order: number;
  }[];
  clientIdsTo: number[];
}

export interface IAssignmentRepository {
  create(data: ICreateAssignment): Promise<boolean>;
  findMany(clientContractId: number): Promise<Assignment[]>;
}
