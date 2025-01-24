import { useLazyQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import {
  BootLayout,
  DEFAULT_LIST_LIMIT,
  CLIENT_CATEGORY_ROUTE_MAPPING,
  ContentLayout,
  Dropdown,
  Input,
  Pagination,
  Toolbar,
  Tag,
  cn,
} from '@/common';
import { GET_CLIENTS } from '@/components/client/clients/clients.gql';

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

  const handleChangePage = (event: { selected: number }) => {
    const newOffset =
      (event.selected * DEFAULT_LIST_LIMIT) %
      getClientsData!.getClients.totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
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
  }, [debouncedValue, itemOffset]);

  return (
    <ContentLayout title='Клиенты'>
      <Toolbar>
        <Input
          placeholder='Поиск по названию или ИНН'
          value={prefix}
          showClearButton={Boolean(prefix)}
          onChange={handleChangeSearch}
          onClear={() => setPrefix('')}
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
                ({ clientProperties: { id, fullName, clientCategory } }) => (
                  <Link
                    className='hover:bg-c-bg-secondary flex items-center rounded-lg p-3'
                    key={id}
                    to={`/client/${CLIENT_CATEGORY_ROUTE_MAPPING[clientCategory]}/${id}`}
                    target='_blank'
                  >
                    <p className='text-lg font-medium'>{fullName}</p>
                  </Link>
                ),
              )}
            </div>
            <div
              className={cn(
                'flex items-end justify-end',
                getClientsData.getClients.totalCount > DEFAULT_LIST_LIMIT &&
                  'justify-between',
              )}
            >
              {getClientsData.getClients.totalCount > DEFAULT_LIST_LIMIT && (
                <Pagination
                  totalCount={getClientsData.getClients.totalCount || 0}
                  limit={DEFAULT_LIST_LIMIT}
                  initialPage={currentPage}
                  onChange={handleChangePage}
                />
              )}
              <Tag tagSize='s'>
                Количество: {getClientsData.getClients.totalCount}
              </Tag>
            </div>
          </>
        )}
      </BootLayout>
    </ContentLayout>
  );
};
