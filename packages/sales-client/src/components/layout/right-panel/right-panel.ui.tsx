import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { useMemo } from 'react';

import {
  BootLayout,
  CLIENT_CONTRACT_ROUTE_MAPPING,
  CLIENT_CONTRACT_TYPE_MAPPING,
  PRODUCT_CATEGORY_MAPPING,
  Card,
  useFavoritesStore,
} from '@/common';
import { GET_CLIENT_CONTRACTS_BY_IDS } from '@/components/layout/right-panel/right-panel.gql';

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
      getClientContractsByIdsData?.getClientContractsByIds.clientContracts ||
      [];
    return [...contracts].sort(
      (a, b) =>
        clientContractIds.indexOf(a.clientContractProperties.id) -
        clientContractIds.indexOf(b.clientContractProperties.id),
    );
  }, [
    clientContractIds,
    getClientContractsByIdsData?.getClientContractsByIds.clientContracts,
  ]);

  return (
    <div className='bg-c-bg-primary w-[200px] rounded-md p-4'>
      <BootLayout isLoading={getClientContractsByIdsLoading}>
        <h3 className='text-center text-lg font-medium'>Избранное</h3>
        <div className='mt-4 flex flex-col gap-3 overflow-auto'>
          {sortedContracts.map(({ clientContractProperties, product }) => (
            <Card
              key={clientContractProperties.id}
              linkTo={`client-contract/${CLIENT_CONTRACT_ROUTE_MAPPING[clientContractProperties.clientContractType]}/${clientContractProperties.id}`}
              onDelete={() => updateFavorites(clientContractProperties.id)}
            >
              <div className='flex flex-col gap-1 text-[11px]'>
                <div className='flex justify-between'>
                  <p>{format(clientContractProperties.date, 'dd.MM.yyyy')}</p>
                  <p>
                    {`${Number(clientContractProperties.price).toLocaleString(
                      'ru-RU',
                    )} ₽`}
                  </p>
                </div>
                <p className='font-medium'>
                  {`${
                    CLIENT_CONTRACT_TYPE_MAPPING[
                      clientContractProperties.clientContractType
                    ]
                  } ${clientContractProperties.number}`}
                </p>
                <p>
                  {`${product.object.name} - ${PRODUCT_CATEGORY_MAPPING[product.product.productCategory]} ${product.product.number}`}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </BootLayout>
    </div>
  );
};
