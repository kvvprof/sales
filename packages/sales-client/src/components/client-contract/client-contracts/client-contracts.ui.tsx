import { useLazyQuery, useQuery } from '@apollo/client';
import {
  BanknotesIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { truncate } from 'lodash';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BasicAgencyContract, BasicObject } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  AGENCY_CONTRACT_TYPE_MAPPING,
  DEFAULT_LIST_LIMIT,
  CLIENT_CONTRACT_ROUTE_MAPPING,
  CLIENT_CONTRACT_TYPE_MAPPING,
  PRODUCT_CATEGORY_MAPPING,
  ContentLayout,
  Dropdown,
  DropdownItem,
  Input,
  Pagination,
  IOption,
  Select,
  Toolbar,
  useFavoritesStore,
  useSettingsStore,
  Tag,
  cn,
} from '@/common';
import {
  GET_CLIENT_CONTRACTS,
  GET_OBJECTS,
} from '@/components/client-contract/client-contracts/client-contracts.gql';

export const ClientContracts = () => {
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

  const handleChangePage = (event: { selected: number }) => {
    const newOffset =
      (event.selected * DEFAULT_LIST_LIMIT) %
      getClientContractsData!.getClientContracts.totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
  };

  const parseAgencyContractTypes = (agencyContracts: any[]) => {
    if (!agencyContracts.length) {
      return '-';
    }

    const types = agencyContracts
      .map(
        ({ agencyContract }: { agencyContract: BasicAgencyContract }) =>
          AGENCY_CONTRACT_TYPE_MAPPING[agencyContract.agencyContractType],
      )
      .filter(Boolean);

    return [...new Set(types)].sort().join(', ');
  };

  const handleSearchClear = () => {
    setPrefix('');
  };

  const handleSelectObject = (option: IOption<BasicObject>) => {
    setCurrentObject(option);
  };

  const handleAddToFavorites = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    event.stopPropagation();
    updateFavorites(id);
  };

  useEffect(() => {
    if (itemOffset !== null) {
      getClientContracts({
        variables: {
          input: {
            objectId: currentObject?.payload?.id ?? null,
            options: {
              limit: DEFAULT_LIST_LIMIT,
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
            onSelect={handleSelectObject}
            onDelete={() => setCurrentObject(null)}
          />
        </div>
        <Input
          placeholder='Поиск по номеру контракта, номеру квартиры или названию клиента'
          value={prefix}
          showClearButton={Boolean(prefix)}
          onChange={handleChangeSearch}
          onClear={handleSearchClear}
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
              <table className='relative min-w-[1500px]'>
                <thead className='bg-c-bg-primary sticky top-0'>
                  <tr>
                    <th>
                      <EllipsisHorizontalIcon className='h-6 w-6' />
                    </th>
                    <th>Номер</th>
                    <th>Тип</th>
                    <th>Дата</th>
                    <th>Объект</th>
                    <th>Продукт</th>
                    <th>Стоимость, ₽</th>
                    <th>АН/МиП</th>
                    <th>Клиенты</th>
                  </tr>
                </thead>
                <tbody>
                  {getClientContractsData.getClientContracts.clientContracts.map(
                    ({
                      clientContractProperties,
                      clients,
                      product: { product },
                      object,
                      agencyContracts,
                    }) => (
                      <tr key={clientContractProperties.id}>
                        <td>
                          <Button
                            className='flex items-center justify-center bg-transparent'
                            buttonSize='s'
                            onClick={(event) =>
                              handleAddToFavorites(
                                event,
                                clientContractProperties.id,
                              )
                            }
                          >
                            {clientContractIds.includes(
                              clientContractProperties.id,
                            ) ? (
                              <StarIconSolid className='text-c-text-primary h-4 w-4' />
                            ) : (
                              <StarIcon className='text-c-text-primary h-4 w-4' />
                            )}
                          </Button>
                        </td>
                        <td>
                          <Link
                            className='flex items-center gap-2 bg-transparent hover:underline'
                            to={`/client-contract/${CLIENT_CONTRACT_ROUTE_MAPPING[clientContractProperties.clientContractType]}/${clientContractProperties.id}`}
                            target='_blank'
                          >
                            <DocumentTextIcon className='text-c-text-primary hover: h-4 w-4' />
                            {clientContractProperties.number}
                          </Link>
                        </td>
                        <td>
                          {
                            CLIENT_CONTRACT_TYPE_MAPPING[
                              clientContractProperties.clientContractType
                            ]
                          }
                        </td>
                        <td>
                          {format(clientContractProperties.date, 'dd.MM.yyyy')}
                        </td>
                        <td>{object.name}</td>
                        <td>
                          {`${PRODUCT_CATEGORY_MAPPING[product.productCategory]} № ${product.number}`}
                        </td>
                        <td>
                          <Link
                            className='flex items-center gap-2 bg-transparent hover:underline'
                            to={`/payment-schedule/${clientContractProperties.id}`}
                            target='_blank'
                          >
                            <BanknotesIcon className='text-c-text-primary h-4 w-4' />
                            {Number(
                              clientContractProperties.price,
                            ).toLocaleString('ru-RU')}
                          </Link>
                        </td>
                        <td>{parseAgencyContractTypes(agencyContracts!)}</td>
                        <td>
                          {truncate(
                            clients
                              .map(({ client: { fullName } }) => fullName)
                              .join(', '),
                            { length: 70, omission: '...' },
                          )}
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <div
              className={cn(
                'flex items-end justify-end',
                getClientContractsData.getClientContracts.totalCount >
                  DEFAULT_LIST_LIMIT && 'justify-between',
              )}
            >
              {getClientContractsData.getClientContracts.totalCount >
                DEFAULT_LIST_LIMIT && (
                <Pagination
                  totalCount={
                    getClientContractsData.getClientContracts.totalCount || 0
                  }
                  limit={DEFAULT_LIST_LIMIT}
                  initialPage={currentPage}
                  onChange={handleChangePage}
                />
              )}
              <Tag tagSize='s'>
                Количество:{' '}
                {getClientContractsData.getClientContracts.totalCount}
              </Tag>
            </div>
          </>
        )}
      </BootLayout>
    </ContentLayout>
  );
};
