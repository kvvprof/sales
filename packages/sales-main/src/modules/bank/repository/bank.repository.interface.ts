import { CreateBankInput, UpdateBankInput } from '@/common';
import { Bank } from '@/integrations';

export interface IBankRepository {
  findMany(): Promise<Bank[]>;
  create(data: CreateBankInput): Promise<Bank>;
  updateById(data: UpdateBankInput): Promise<Bank>;
  deleteById(id: number): Promise<boolean>;
}
