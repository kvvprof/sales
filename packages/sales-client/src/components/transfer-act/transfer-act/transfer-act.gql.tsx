import { gql } from '@/__types__';

export const GET_TRANSFER_ACT = gql(`
  query GetTransferActInTransferAct($input: GetTransferActInput!) {
    getTransferAct(input: $input) {
      clientContract {
        id
        number
        clientContractType
        price
      }
      object {
        id
        commonDbObjectsId
        name
      }
      product {
        id
        number
        productCategory
        pricingProductsId
      }
      transferAct {
        id
        number
        date
        link
      }
      representatives {
        representative {
          id
          fullName
        }
        client {
          id
          fullName
        }
      }
      clients {
        id
        fullName 
      }
    }
  } 
`);

export const UPDATE_TRANSFER_ACT = gql(`
  mutation UpdateTransferActInTransferAct($input: UpdateTransferActInput!) {
    updateTransferAct(input: $input) {
      id
    }
  }  
`);
