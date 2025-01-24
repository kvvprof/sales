import { gql } from '@/__types__';

export const CREATE_TRANSFER_ACT = gql(`
	mutation CreateTransferActInNewTransferAct($input: CreateTransferActInput!) {
    createTransferAct(input: $input) {
      id
    }
  }
`);
