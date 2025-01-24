import {
  IFindManyOptions,
  BasicActualPayment,
  CreateActualPaymentInput,
} from '@/common';

import { ActualPayment } from '@/integrations';

export interface IActualPaymentRepository {
  findManyByClientContractId(
    clientContractId: number,
    options?: IFindManyOptions | null,
  ): Promise<{ actualPayments: ActualPayment[]; totalCount: number }>;
  create(data: CreateActualPaymentInput): Promise<BasicActualPayment>;
  deleteById(id: number): Promise<boolean>;
  createMany(data: CreateActualPaymentInput[]): Promise<boolean>;
}
