import { useLazyQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Dropdown } from '@/components/ui/dropdown/dropdown.ui';
import { Input } from '@/components/ui/input/input.ui';
import { Pagination } from '@/components/ui/pagination/pagination.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import { GET_CLIENTS } from '@/components/widgets/clients/clients.gql';
import { DEFAULT_LIST_LIMIT } from '@/configs/default.config';
import { CLIENT_CATEGORY_ROUTE_MAP } from '@/configs/enums.map';

export const Clients = () => {
	const [itemOffset, setItemOffset] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [prevPrefix, setPrevPrefix] = useState<string>('');
	const [prefix, setPrefix] = useState<string>('');
	const [debouncedValue] = useDebounce(prefix, 500);
	const navigate = useNavigate();

	const [getClients, { loading: getClientsLoading, data: getClientsData }] =
		useLazyQuery(GET_CLIENTS, {
			onCompleted() {
				setPrevPrefix(debouncedValue);
				setCurrentPage(0);
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const onPageChange = (event: { selected: number }) => {
		const newOffset =
			(event.selected * DEFAULT_LIST_LIMIT) %
			getClientsData!.getClients.total_count;
		setCurrentPage(event.selected);
		setItemOffset(newOffset);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPrefix(event.target.value.trim());
	};

	useEffect(() => {
		if (itemOffset !== null) {
			getClients({
				variables: {
					input: {
						options: {
							limit: DEFAULT_LIST_LIMIT,
							offset: prevPrefix !== debouncedValue ? 0 : itemOffset,
							prefix: debouncedValue ? debouncedValue : null,
						},
					},
				},
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue, itemOffset]);

	return (
		<ContentLayout title='Клиенты'>
			<Toolbar>
				<Input
					placeholder='Поиск по названию или ИНН'
					value={prefix}
					onChange={onChange}
				/>
				<Dropdown name='Создать клиента'>
					<Dropdown.Item
						name='Физическое лицо'
						onClick={() => navigate('/client/individual/new')}
					/>
					<Dropdown.Item
						name='Физическое лицо несоверш.'
						onClick={() => navigate('/client/individual-minor/new')}
					/>
					<Dropdown.Item
						name='Юридическое лицо'
						onClick={() => navigate('/client/entity/new')}
					/>
				</Dropdown>
			</Toolbar>
			<BootLayout isLoading={getClientsLoading}>
				{getClientsData && (
					<>
						<div className='flex-1 overflow-auto'>
							{getClientsData.getClients.clients.map(
								({ client_properties: { id, full_name, client_category } }) => (
									<Link
										className='hover:bg-c-bg-secondary flex items-center rounded-lg p-3'
										key={id}
										to={`/client/${CLIENT_CATEGORY_ROUTE_MAP[client_category]}/${id}`}
									>
										<p className='text-lg font-medium'>{full_name}</p>
									</Link>
								),
							)}
						</div>
						{getClientsData.getClients.total_count > DEFAULT_LIST_LIMIT && (
							<Pagination
								totalCount={getClientsData.getClients.total_count || 0}
								limit={DEFAULT_LIST_LIMIT}
								initialPage={currentPage}
								onPageChange={onPageChange}
							/>
						)}
					</>
				)}
			</BootLayout>
		</ContentLayout>
	);
};
