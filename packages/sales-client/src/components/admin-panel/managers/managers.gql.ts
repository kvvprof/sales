import { gql } from '@/__types__';

export const GET_USERS = gql(`
	query GetUsersInAdminPanelManagers {
    getUsers {
      id
      fullName
      email
      phone
      isManager
      isStaff
      userRole
    }
  }
`);

export const CREATE_USER = gql(`
  mutation CreateUserInAdminPanelManagers($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`);

export const UPDATE_USER = gql(`
  mutation UpdateUserInAdminPanelManagers($input: UpdateUserInput!) {
    updateUser(input: $input) {
      id
    }
  }
`);

export const DELETE_USER = gql(`
  mutation DeleteUserInAdminPanelManagers($input: DeleteUserInput!) {
    deleteUser(input: $input)
  }
`);
