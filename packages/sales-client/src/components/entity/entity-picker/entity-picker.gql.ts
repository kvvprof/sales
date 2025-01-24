import { gql } from '@/__types__';

export const GET_ENTITIES = gql(`
	query GetEntitiesInEntityPicker {
		getEntities{
			entity {
				id
				name
			}
			objects {
				id
				name
			}
		}
	}
`);
