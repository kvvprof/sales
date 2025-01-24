import { gql } from '@/__types__';

export const CREATE_ASSIGNMENT = gql(`
	mutation CreateAssignmentInAssignment($input: CreateAssignmentInput!) {
    createAssignment(input: $input)
  }
`);
