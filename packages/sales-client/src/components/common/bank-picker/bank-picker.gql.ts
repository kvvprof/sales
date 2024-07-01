import { gql } from '@/__types__';

export const GET_BANKS = gql(`
	query GetBanksInBankPicker {
		getBanks {
			id
			name
		}
	}
`);
