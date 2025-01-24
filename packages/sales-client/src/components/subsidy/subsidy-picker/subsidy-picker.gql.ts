import { gql } from '@/__types__';

export const GET_SUBSIDIES = gql(`
	query GetSubsidiesInSubsidyPicker {
		getSubsidies {
			id
			name
			isVisible
		}
	}
`);
