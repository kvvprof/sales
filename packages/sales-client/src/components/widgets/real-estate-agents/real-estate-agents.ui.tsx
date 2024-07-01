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
import { GET_REAL_ESTATE_AGENTS } from '@/components/widgets/real-estate-agents/real-estate-agents.gql';
import { DEFAULT_LIST_LIMIT } from '@/configs/default.config';

export const RealEstateAgents = () => {
	const [itemOffset, setItemOffset] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [prevPrefix, setPrevPrefix] = useState<string>('');
	const [prefix, setPrefix] = useState<string>('');
	const [debouncedValue] = useDebounce(prefix, 500);
	const navigate = useNavigate();

	const [
		getRealEstateAgents,
		{ loading: getRealEstateAgentsLoading, data: getRealEstateAgentsData },
	] = useLazyQuery(GET_REAL_ESTATE_AGENTS, {
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
			getRealEstateAgentsData!.getRealEstateAgents.total_count;
		setCurrentPage(event.selected);
		setItemOffset(newOffset);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPrefix(event.target.value.trim());
	};

	useEffect(() => {
		if (itemOffset !== null) {
			getRealEstateAgents({
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
		<ContentLayout title='Агенты'>
			<Toolbar>
				<Input
					placeholder='Поиск по названию'
					value={prefix}
					onChange={onChange}
				/>
				<Button onClick={() => navigate('/real-estate-agent/new')}>
					Создать агента
				</Button>
			</Toolbar>
			<BootLayout isLoading={getRealEstateAgentsLoading}>
				{getRealEstateAgentsData && (
					<>
						<div className='flex-1 overflow-auto'>
							{getRealEstateAgentsData.getRealEstateAgents.real_estate_agents?.map(
								({ real_estate_agent: { id, full_name } }) => (
									<Link
										className='hover:bg-c-bg-secondary flex items-center rounded-lg p-3'
										key={id}
										to={`/real-estate-agent/${id}`}
									>
										<p className='text-lg font-medium'>{full_name}</p>
									</Link>
								),
							)}
						</div>
						{getRealEstateAgentsData.getRealEstateAgents.total_count >
							DEFAULT_LIST_LIMIT && (
							<Pagination
								totalCount={
									getRealEstateAgentsData.getRealEstateAgents.total_count || 0
								}
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
