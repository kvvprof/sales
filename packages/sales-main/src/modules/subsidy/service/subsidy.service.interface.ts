import {
  BasicSubsidy,
  CreateSubsidyInput,
  DeleteSubsidyInput,
  UpdateSubsidyInput,
} from '@/common';

export interface ISubsidyService {
  getSubsidies(): Promise<BasicSubsidy[]>;
  createSubsidy(input: CreateSubsidyInput): Promise<BasicSubsidy>;
  updateSubsidy(input: UpdateSubsidyInput): Promise<BasicSubsidy>;
  deleteSubsidy(input: DeleteSubsidyInput): Promise<boolean>;
}
