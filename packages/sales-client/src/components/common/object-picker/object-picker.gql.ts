import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
	query GetObjectsInObjectPicker {
		getObjects {
			id
			name
		}
	}
`);
