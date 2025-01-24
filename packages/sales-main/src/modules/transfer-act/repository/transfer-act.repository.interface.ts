import { IFindManyOptions } from '@/common';
import {
  ClientContract,
  Product,
  Object as TObject,
  TransferAct,
  TransferActToRepresentative,
  Client,
  Representative,
  ClientContractToClient,
} from '@/integrations';

export interface ICreateTransferAct {
  representativeIds?: number[] | null;
  number: string;
  date: Date;
  clientContractId: number;
  productId: number;
  objectId: number;
}

export interface IUpdateTransferAct {
  id: number;
  representativeIds?: number[] | null;
  date?: Date;
}

export interface ITransferAct extends TransferAct {
  object: TObject;
  product: Product;
  clientContract: ClientContract & {
    clientContractsToClients: (ClientContractToClient & {
      client: Client;
    })[];
  };
  transferActsToRepresentatives: (TransferActToRepresentative & {
    representative: Representative & { client: Client };
  })[];
}

export interface ITransferActRepository {
  findById(id: number): Promise<ITransferAct | null>;
  findMany(
    options?: IFindManyOptions | null,
  ): Promise<{ transferActs: ITransferAct[]; totalCount: number }>;
  create(data: ICreateTransferAct): Promise<TransferAct>;
  updateById(data: IUpdateTransferAct): Promise<TransferAct>;
}
