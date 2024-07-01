import { useLazyQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Input } from '@/components/ui/input/input.ui';
import { Pagination } from '@/components/ui/pagination/pagination.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import { GET_AGENCIES } from '@/components/widgets/agencies/agencies.gql';
import { DEFAULT_LIST_LIMIT } from '@/configs/default.config';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const Agencies = () => {
	const [itemOffset, setItemOffset] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [prevPrefix, setPrevPrefix] = useState<string>('');
	const [prefix, setPrefix] = useState<string>('');
	const [debouncedValue] = useDebounce(prefix, 500);
	const navigate = useNavigate();

	const [getAgencies, { loading: getAgenciesLoading, data: getAgenciesData }] =
		useLazyQuery(GET_AGENCIES, {
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
			getAgenciesData!.getAgencies.total_count;
		setCurrentPage(event.selected);
		setItemOffset(newOffset);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPrefix(event.target.value.trim());
	};

	useEffect(() => {
		if (itemOffset !== null) {
			getAgencies({
				variables: {
					input: normalizePayload({
						options: {
							limit: DEFAULT_LIST_LIMIT,
							offset: prevPrefix !== debouncedValue ? 0 : itemOffset,
							prefix: debouncedValue ? debouncedValue : null,
						},
					}),
				},
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue, itemOffset]);

	return (
		<ContentLayout title='Агентства'>
			<Toolbar>
				<Input
					placeholder='Поиск по названию или ИНН'
					value={prefix}
					onChange={onChange}
				/>
				<Button onClick={() => navigate('/agency/new')}>
					Создать агентство
				</Button>
			</Toolbar>
			<BootLayout isLoading={getAgenciesLoading}>
				{getAgenciesData && (
					<>
						<div className='flex-1 overflow-auto'>
							{getAgenciesData.getAgencies.agencies.map(({ id, name }) => (
								<Link
									className='hover:bg-c-bg-secondary flex items-center rounded-lg p-3'
									key={id}
									to={`/agency/${id}`}
								>
									<p className='flex items-center gap-2 text-lg font-medium'>
										{name}
									</p>
								</Link>
							))}
						</div>

						{getAgenciesData.getAgencies.total_count > DEFAULT_LIST_LIMIT && (
							<Pagination
								totalCount={getAgenciesData.getAgencies.total_count || 0}
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
