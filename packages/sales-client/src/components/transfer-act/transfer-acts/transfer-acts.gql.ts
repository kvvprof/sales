import { gql } from '@/__types__';

export const GET_TRANSFER_ACTS = gql(`
	query GetTransferActsInTransferActs($input: GetTransferActsInput!) {
    getTransferActs(input: $input) {
      transferActs {
        transferAct {
          id
          number
          date
          link
        }
        clientContract {
					id
          number
					clientContractType
        }
        object {
          name
        }
        product {
          number
          productCategory
        }
      }
			totalCount
    }
  }
`);
