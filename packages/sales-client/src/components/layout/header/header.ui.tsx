import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '@/assets/logo.svg';
import {
  ADMIN_ROLES,
  BootLayout,
  Button,
  USER_ROLE_MAPPING,
  useUserStore,
} from '@/common';
import { HeaderLink } from '@/components/layout/header/header-link.ui';

export const Header = () => {
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await axios.delete(`${import.meta.env.VITE_SALES_GUARD_URL}/sign-out`);
      setUser(null);
      navigate('/sign-in');
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const headerLinks = [
    { name: 'Главная', path: '/' },
    { name: 'Клиенты', path: '/clients' },
    { name: 'Агентства', path: '/agencies' },
    { name: 'Агенты', path: '/real-estate-agents' },
    { name: 'Эскроу-счета', path: '/escrow-accounts-history' },
    { name: 'Акты АН', path: '/real-estate-agency/acts' },
    { name: 'Акты п-п', path: '/transfer-acts' },
  ];

  if (isLoading) {
    return <BootLayout isFullScreen isLoading={isLoading} />;
  }

  return (
    <header className='bg-c-bg-primary mb-3 flex items-center gap-10 p-3'>
      <Link to={'/'} className='flex items-center gap-2'>
        <div className='relative flex gap-1 pl-[22px]'>
          <img className='h-[25px] w-[25px]' src={logo} alt='logo' />
          <div>
            <h1 className='text-xl font-medium'>ПРОДАЖИ</h1>
            <p className='absolute bottom-[-6px] right-0 text-[8px] font-light'>
              2.8.2
            </p>
          </div>
        </div>
      </Link>
      <nav className='flex flex-1 gap-4'>
        {headerLinks.map((link, index) => (
          <HeaderLink key={index} name={link.name} path={link.path} />
        ))}
      </nav>
      <div className='flex items-center gap-2'>
        {user && (
          <div className='text-xs'>
            <p className='font-medium'>{user.fullName}</p>
            <p className='font-light'>
              {USER_ROLE_MAPPING[user.userRole]} | {user.email}
            </p>
          </div>
        )}
        {user?.userRole && ADMIN_ROLES.includes(user?.userRole) && (
          <Button buttonSize='s' onClick={() => navigate('/admin-panel')}>
            <Cog6ToothIcon className='h-5 w-5' />
          </Button>
        )}
        <Button buttonSize='s' onClick={handleSignOut}>
          <ArrowRightEndOnRectangleIcon className='h-5 w-5' />
        </Button>
      </div>
    </header>
  );
};
