import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import logo from '@/assets/logo.svg';
import { HeaderLink } from '@/components/common/header/header-link.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { USER_ROLE_MAP } from '@/configs/enums.map';
import { useUserStore } from '@/stores/user.store';

export const Header = () => {
	const user = useUserStore((state) => state.user);
	const setUser = useUserStore((state) => state.setUser);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const navigate = useNavigate();

	const onSignOut = async () => {
		try {
			setIsLoading(true);
			await axios.get(`${import.meta.env.VITE_SALES_GUARD_URL}/sign-out`);
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
							2.0.0
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
						<p className='font-medium'>{user.full_name}</p>
						<p className='font-light'>
							{USER_ROLE_MAP[user.user_role]} | {user.email}
						</p>
					</div>
				)}
				<Button buttonSize='small' onClick={onSignOut}>
					<ArrowRightEndOnRectangleIcon className='h-5 w-5' />
				</Button>
			</div>
		</header>
	);
};
