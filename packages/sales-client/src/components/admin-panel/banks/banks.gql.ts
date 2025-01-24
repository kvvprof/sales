import { gql } from '@/__types__';

export const GET_BANKS = gql(`
	query GetBanksInAdminPanelBanks {
    getBanks {
      id
      name
      isVisible
    }
  }
`);

export const CREATE_BANK = gql(`
  mutation CreateBankInAdminPanelBanks($input: CreateBankInput!) {
    createBank(input: $input) {
      id
      name
    }
  }
`);

export const UPDATE_BANK = gql(`
  mutation UpdateBankInAdminPanelBanks($input: UpdateBankInput!) {
    updateBank(input: $input) {
      id
      name
    }
  }
`);

export const DELETE_BANK = gql(`
  mutation DeleteBankInAdminPanelBanks($input: DeleteBankInput!) {
    deleteBank(input: $input)
  }
`);
