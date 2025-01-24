import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useUserStore, ADMIN_ROLES } from '@/common';
import { IRequireAdmin } from '@/components/auth/require-admin/require-admin.interface';

export const RequireAdmin = ({ children }: IRequireAdmin) => {
  const user = useUserStore((state) => state.user);

  if (!user || !ADMIN_ROLES.includes(user?.userRole)) {
    toast.error('Недостаточно прав.');
    return <Navigate to={'/'} replace={true} />;
  }

  return children;
};
