import { UserRole } from '@/common';

export const useAdmin = (ctx: any) => {
  const user = ctx.user;

  if (!user) {
    throw new Error('Пользователь не авторизован.');
  }

  const decodedUser = JSON.parse(decodeURIComponent(user));

  const allowedRoles = [UserRole.Administrator, UserRole.Director];

  if (!allowedRoles.includes(decodedUser.userRole)) {
    throw new Error('Недостаточно прав.');
  }
};
