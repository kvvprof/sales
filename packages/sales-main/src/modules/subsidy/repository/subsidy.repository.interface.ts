import { CreateSubsidyInput, UpdateSubsidyInput } from '@/common';
import { Subsidy } from '@/integrations';

export interface ISubsidyRepository {
  findMany(): Promise<Subsidy[]>;
  create(data: CreateSubsidyInput): Promise<Subsidy>;
  updateById(data: UpdateSubsidyInput): Promise<Subsidy>;
  deleteById(id: number): Promise<boolean>;
}
