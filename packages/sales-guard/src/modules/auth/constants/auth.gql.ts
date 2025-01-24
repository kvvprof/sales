export const CREATE_STAFF = `
	mutation CreateStaffInAuth($input: CreateUserInput!) {
		createStaff(input: $input) {
			id
      fullName
      email
      phone
      isManager
      userRole
      isStaff
		}
	}
`;
