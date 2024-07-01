import { Navigate } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { useAuth } from '@/hooks/use-auth';

export const SignIn = () => {
	const { isAuth, isLoading } = useAuth();

	if (isLoading) {
		return <BootLayout isFullScreen isLoading={isLoading} />;
	}

	if (isAuth) {
		return <Navigate to={'/'} replace />;
	}

	return (
		<div className='flex h-screen w-screen items-center justify-center'>
			<div className='bg-c-bg-primary flex flex-col justify-center gap-6 rounded-lg p-10'>
				<div className='flex items-center justify-center gap-2'>
					<img className='h-[30px] w-[30px]' src={logo} alt='logo' />
					<h1 className='text-xl font-medium'>ПРОДАЖИ</h1>
				</div>
				<Button
					onClick={() =>
						(window.location.href = `${import.meta.env.VITE_SALES_GUARD_URL}/nextcloud/sign-in`)
					}
				>
					Войти с помощью Nextcloud
				</Button>
			</div>
		</div>
	);
};
