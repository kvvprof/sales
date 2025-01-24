import {
  BasicBank,
  CreateBankInput,
  DeleteBankInput,
  UpdateBankInput,
} from '@/common';

export interface IBankService {
  getBanks(): Promise<BasicBank[]>;
  createBank(input: CreateBankInput): Promise<BasicBank>;
  updateBank(input: UpdateBankInput): Promise<BasicBank>;
  deleteBank(input: DeleteBankInput): Promise<boolean>;
}
