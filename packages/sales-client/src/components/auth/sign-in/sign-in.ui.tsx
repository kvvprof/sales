import { Link, Navigate } from 'react-router-dom';

import logo from '@/assets/logo.svg';
import { useAuth, BootLayout, Button } from '@/common';

export const SignIn = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <BootLayout isFullScreen isLoading={isLoading} />;
  }

  if (isAuth) {
    return <Navigate to={'/'} replace />;
  }

  const handleSignIn = () => {
    window.location.href = `${import.meta.env.VITE_SALES_GUARD_URL}/nextcloud/sign-in`;
  };

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='bg-c-bg-primary relative flex flex-col items-center justify-center gap-4 rounded-lg p-12'>
        <div className='flex items-center justify-center gap-2'>
          <img className='h-[35px] w-[35px]' src={logo} alt='logo' />
          <h1 className='text-2xl font-medium'>ПРОДАЖИ</h1>
        </div>
        <Button onClick={handleSignIn}>Войти с помощью Nextcloud</Button>
        <Link
          className='absolute bottom-3 text-xs hover:underline'
          to={'https://xn--h1aanv1d.life/'}
          target='_blank'
        >
          ГК ЮНИТИ
        </Link>
      </div>
    </div>
  );
};
