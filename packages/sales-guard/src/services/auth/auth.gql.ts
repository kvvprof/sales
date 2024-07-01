export const CREATE_USER = `
	mutation CreateUserInAuth($input: CreateUserInput!) {
		createUser(input: $input) {
			id
			full_name
			email
			phone
			is_manager
			user_role
		}
	}
`;
