import { Navigate } from 'react-router-dom';

import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { IRequireAuth } from '@/components/widgets/require-auth/require-auth.interface';
import { useAuth } from '@/hooks/use-auth';

export const RequireAuth = ({ children }: IRequireAuth) => {
	const { isAuth, isLoading } = useAuth();

	if (isLoading) {
		return <BootLayout isFullScreen isLoading={isLoading} />;
	}

	if (!isAuth) {
		return <Navigate to={'/sign-in'} replace />;
	}

	return children;
};
