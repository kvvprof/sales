import { useLazyQuery, useQuery } from '@apollo/client';
import {
	BanknotesIcon,
	DocumentTextIcon,
	StarIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BasicObject } from '@/__types__/graphql';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Dropdown, DropdownItem } from '@/components/ui/dropdown/dropdown.ui';
import { Input } from '@/components/ui/input/input.ui';
import { Pagination } from '@/components/ui/pagination/pagination.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import {
	GET_CLIENT_CONTRACTS,
	GET_OBJECTS,
} from '@/components/widgets/client-contracts/client-contracts.gql';
import {
	CLIENT_CONTRACT_ROUTE_MAP,
	CLIENT_CONTRACT_TYPE_MAP,
	PRODUCT_CATEGORY_MAP,
} from '@/configs/enums.map';
import { useFavoritesStore } from '@/stores/favorites.store';
import { useSettingsStore } from '@/stores/settings.store';

export const ClientContracts = () => {
	const LIMIT = 20;
	const [itemOffset, setItemOffset] = useState<number>(0);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [prevPrefix, setPrevPrefix] = useState<string>('');
	const [prefix, setPrefix] = useState<string>('');
	const [debouncedValue] = useDebounce(prefix, 500);
	const navigate = useNavigate();
	const [objectOptions, setObjectOptions] = useState<IOption<BasicObject>[]>(
		[],
	);
	const currentObject = useSettingsStore((state) => state.currentObject);
	const setCurrentObject = useSettingsStore((state) => state.setCurrentObject);
	const clientContractIds = useFavoritesStore(
		(state) => state.clientContractIds,
	);
	const updateFavorites = useFavoritesStore((state) => state.updateFavorites);

	const { loading: getObjectsLoading } = useQuery(GET_OBJECTS, {
		onCompleted(data) {
			setObjectOptions([
				...data.getObjects.map((object) => ({
					name: object.name,
					payload: object,
				})),
			]);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const [
		getClientContracts,
		{ loading: getClientContractsLoading, data: getClientContractsData },
	] = useLazyQuery(GET_CLIENT_CONTRACTS, {
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
			(event.selected * LIMIT) %
			getClientContractsData!.getClientContracts.total_count;
		setCurrentPage(event.selected);
		setItemOffset(newOffset);
	};

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPrefix(event.target.value.trim());
	};

	useEffect(() => {
		if (itemOffset !== null) {
			getClientContracts({
				variables: {
					input: {
						object_id: currentObject?.payload?.id ?? null,
						options: {
							limit: LIMIT,
							offset: prevPrefix !== debouncedValue ? 0 : itemOffset,
							prefix: debouncedValue ? debouncedValue : null,
						},
					},
				},
			});
		}
	}, [debouncedValue, itemOffset, currentObject]);

	return (
		<ContentLayout title='Контракты клиентов'>
			<Toolbar>
				<div>
					<Select
						placeholder='Объект'
						isAbsoluteListPosition={true}
						defaultSelected={currentObject}
						options={objectOptions}
						onSelect={(option) => {
							setCurrentObject(option);
						}}
						onDelete={() => setCurrentObject(null)}
					/>
				</div>
				<Input
					placeholder='Поиск по номеру договора или названию клиента'
					value={prefix}
					onChange={onChange}
				/>
				<Dropdown name='Создать контракт'>
					<DropdownItem
						name='Контракт ДДУ'
						onClick={() => navigate('client-contract/ddu/new')}
					/>
					<DropdownItem
						name='Контракт ДКП'
						onClick={() => navigate('client-contract/dkp/new')}
					/>
				</Dropdown>
			</Toolbar>
			<BootLayout isLoading={getObjectsLoading || getClientContractsLoading}>
				{getClientContractsData && (
					<>
						<div className='flex-1 overflow-auto'>
							<table className='relative'>
								<thead className='bg-c-bg-primary sticky top-0'>
									<tr>
										<th>Номер</th>
										<th>Тип</th>
										<th>Дата</th>
										<th>Объект</th>
										<th>Продукт</th>
										<th>Стоимость ₽</th>
										<th>Клиенты</th>
										<th />
									</tr>
								</thead>
								<tbody>
									{getClientContractsData.getClientContracts.client_contracts.map(
										({
											client_contract_properties,
											clients,
											product: { product },
											object,
										}) => (
											<tr key={client_contract_properties.id}>
												<td>
													<Link
														className='flex items-center gap-2 bg-transparent hover:underline'
														to={`client-contract/${CLIENT_CONTRACT_ROUTE_MAP[client_contract_properties.client_contract_type]}/${client_contract_properties.id}`}
													>
														<DocumentTextIcon className='text-c-text-primary hover: h-4 w-4' />
														{client_contract_properties.number}
													</Link>
												</td>
												<td>
													{
														CLIENT_CONTRACT_TYPE_MAP[
															client_contract_properties.client_contract_type
														]
													}
												</td>
												<td>
													{format(
														client_contract_properties.date,
														'dd.MM.yyyy',
													)}
												</td>
												<td>{object.name}</td>
												<td>
													{`${PRODUCT_CATEGORY_MAP[product.product_category]} № ${product.number}`}
												</td>
												<td>
													<Link
														className='flex items-center gap-2 bg-transparent hover:underline'
														to={`/payment-schedule/${client_contract_properties.id}`}
													>
														<BanknotesIcon className='text-c-text-primary h-4 w-4' />
														{parseFloat(
															client_contract_properties.price,
														).toLocaleString('ru-RU')}
													</Link>
												</td>
												<td>
													{clients
														.map(({ client: { full_name } }) => full_name)
														.join(', ')}
												</td>
												<td>
													<Button
														className='flex items-center justify-center bg-transparent'
														buttonSize='small'
														onClick={(event) => {
															event.stopPropagation();
															updateFavorites(client_contract_properties.id);
														}}
													>
														{clientContractIds.includes(
															client_contract_properties.id,
														) ? (
															<StarIconSolid className='text-c-text-primary h-4 w-4' />
														) : (
															<StarIcon className='text-c-text-primary h-4 w-4' />
														)}
													</Button>
												</td>
											</tr>
										),
									)}
								</tbody>
							</table>
						</div>
						{getClientContractsData.getClientContracts.total_count > LIMIT && (
							<Pagination
								totalCount={
									getClientContractsData.getClientContracts.total_count || 0
								}
								limit={LIMIT}
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
