import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BasicUser } from '@/__types__/graphql';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { ISingInCallback } from '@/components/widgets/sign-in-callback/sign-in-callback.interface';
import { useUserStore } from '@/stores/user.store';

export const SingInCallback = ({ token }: ISingInCallback) => {
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const navigate = useNavigate();
	const setUser = useUserStore((state) => state.setUser);

	useEffect(() => {
		const getAuth = async () => {
			try {
				const { data } = await axios.get<BasicUser>(
					`${import.meta.env.VITE_SALES_GUARD_URL}/sign-in`,
					{
						headers: {
							Authorization: `Bearer ${token}`,
						},
					},
				);
				setUser(data);
				navigate('/');
			} catch (error) {
				navigate('/sign-in');
			} finally {
				setIsLoading(false);
			}
		};
		getAuth();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <BootLayout isFullScreen isLoading={isLoading} />;
};
