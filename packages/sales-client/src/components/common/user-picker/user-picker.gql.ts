import { gql } from '@/__types__';

export const GET_USERS = gql(`
	query GetUsersInUserPicker {
		getUsers {
			id
			full_name
		}
	}
`);
