import {
  BasicTransferAct,
  CreateTransferActInput,
  GetTransferActInput,
  GetTransferActsInput,
  TransferAct,
  TransferActs,
  UpdateTransferActInput,
} from '@/common';

export interface ITransferActService {
  getTransferAct(input: GetTransferActInput): Promise<TransferAct>;
  getTransferActs(input: GetTransferActsInput): Promise<TransferActs>;
  createTransferAct(input: CreateTransferActInput): Promise<BasicTransferAct>;
  updateTransferAct(input: UpdateTransferActInput): Promise<BasicTransferAct>;
}
