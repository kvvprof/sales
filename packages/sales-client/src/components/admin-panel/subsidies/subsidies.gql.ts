import { gql } from '@/__types__';

export const GET_SUBSIDIES = gql(`
	query GetSubsidiesInAdminPanelSubsidies {
    getSubsidies {
      id
      name
      isVisible
    }
  }
`);

export const CREATE_SUBSIDY = gql(`
  mutation CreateSubsidyInAdminPanelSubsidies($input: CreateSubsidyInput!) {
    createSubsidy(input: $input) {
      id
      name
    }
  }
`);

export const UPDATE_SUBSIDY = gql(`
  mutation UpdateSubsidyInAdminPanelSubsidies($input: UpdateSubsidyInput!) {
    updateSubsidy(input: $input) {
      id
      name
    }
  }
`);

export const DELETE_SUBSIDY = gql(`
  mutation DeleteSubsidyInAdminPanelSubsidies($input: DeleteSubsidyInput!) {
    deleteSubsidy(input: $input)
  }
`);
