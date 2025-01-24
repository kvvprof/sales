import { Navigate } from 'react-router-dom';

import { useAuth, BootLayout } from '@/common';
import { IRequireAuth } from '@/components/auth/require-auth/require-auth.interface';

export const RequireAuth = ({ children }: IRequireAuth) => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <BootLayout isFullScreen isLoading={isLoading} />;
  }

  if (!isAuth) {
    return <Navigate to={'/sign-in'} replace={true} />;
  }

  return children;
};
