import { UserRole } from '@/__types__/graphql';

export const USER_MOCK = {
  id: 0,
  fullName: 'Иванов Иван Иванович',
  email: 'ivanov@gmail.com',
  phone: '79876543210',
  isManager: true,
  userRole: UserRole.Administrator,
} as const;
