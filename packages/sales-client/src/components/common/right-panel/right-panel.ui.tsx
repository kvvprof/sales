import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { useMemo } from 'react';

import { GET_CLIENT_CONTRACTS_BY_IDS } from '@/components/common/right-panel/right-panel.gql';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Card } from '@/components/ui/card/card.ui';
import {
	CLIENT_CONTRACT_ROUTE_MAP,
	CLIENT_CONTRACT_TYPE_MAP,
	PRODUCT_CATEGORY_MAP,
} from '@/configs/enums.map';
import { useFavoritesStore } from '@/stores/favorites.store';

export const RightPanel = () => {
	const clientContractIds = useFavoritesStore(
		(state) => state.clientContractIds,
	);
	const updateFavorites = useFavoritesStore((state) => state.updateFavorites);
	const {
		loading: getClientContractsByIdsLoading,
		data: getClientContractsByIdsData,
	} = useQuery(GET_CLIENT_CONTRACTS_BY_IDS, {
		variables: { input: { ids: clientContractIds } },
	});

	const sortedContracts = useMemo(() => {
		const contracts =
			getClientContractsByIdsData?.getClientContractsByIds.client_contracts ||
			[];
		return [...contracts].sort(
			(a, b) =>
				clientContractIds.indexOf(a.client_contract_properties.id) -
				clientContractIds.indexOf(b.client_contract_properties.id),
		);
	}, [
		clientContractIds,
		getClientContractsByIdsData?.getClientContractsByIds.client_contracts,
	]);

	return (
		<div className='bg-c-bg-primary w-[200px] rounded-md p-4'>
			<BootLayout isLoading={getClientContractsByIdsLoading}>
				<h3 className='text-center text-lg font-medium'>Избранное</h3>
				<div className='mt-4 flex flex-col gap-3 overflow-auto'>
					{sortedContracts.map(({ client_contract_properties, product }) => (
						<Card
							key={client_contract_properties.id}
							linkTo={`client-contract/${CLIENT_CONTRACT_ROUTE_MAP[client_contract_properties.client_contract_type]}/${client_contract_properties.id}`}
							onDelete={() => updateFavorites(client_contract_properties.id)}
						>
							<div className='flex flex-col gap-1 text-[11px]'>
								<div className='flex justify-between'>
									<p>{format(client_contract_properties.date, 'dd.MM.yyyy')}</p>
									<p>
										{`${parseFloat(
											client_contract_properties.price,
										).toLocaleString('ru-RU')} ₽`}
									</p>
								</div>
								<p className='font-medium'>
									{`${
										CLIENT_CONTRACT_TYPE_MAP[
											client_contract_properties.client_contract_type
										]
									} ${client_contract_properties.number}`}
								</p>
								<p>
									{`${product.object.name} - ${PRODUCT_CATEGORY_MAP[product.product.product_category]} ${product.product.number}`}
								</p>
							</div>
						</Card>
					))}
				</div>
			</BootLayout>
		</div>
	);
};
