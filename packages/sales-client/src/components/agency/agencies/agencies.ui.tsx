import { useLazyQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import {
  DEFAULT_LIST_LIMIT,
  BootLayout,
  Button,
  ContentLayout,
  Input,
  Pagination,
  Toolbar,
  normalizePayload,
  Tag,
  cn,
} from '@/common';
import { GET_AGENCIES } from '@/components/agency/agencies/agencies.gql';

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

  const handleChangePage = (event: { selected: number }) => {
    const newOffset =
      (event.selected * DEFAULT_LIST_LIMIT) %
      getAgenciesData!.getAgencies.totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
  };

  const handleSearchClear = () => {
    setPrefix('');
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
  }, [debouncedValue, itemOffset]);

  return (
    <ContentLayout title='Агентства'>
      <Toolbar>
        <Input
          placeholder='Поиск по названию или ИНН'
          value={prefix}
          showClearButton={Boolean(prefix)}
          onChange={handleChangeSearch}
          onClear={handleSearchClear}
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
                  target='_blank'
                >
                  <p className='flex items-center gap-2 text-lg font-medium'>
                    {name}
                  </p>
                </Link>
              ))}
            </div>
            <div
              className={cn(
                'flex items-end justify-end',
                getAgenciesData.getAgencies.totalCount > DEFAULT_LIST_LIMIT &&
                  'justify-between',
              )}
            >
              {getAgenciesData.getAgencies.totalCount > DEFAULT_LIST_LIMIT && (
                <Pagination
                  totalCount={getAgenciesData.getAgencies.totalCount || 0}
                  limit={DEFAULT_LIST_LIMIT}
                  initialPage={currentPage}
                  onChange={handleChangePage}
                />
              )}
              <Tag tagSize='s'>
                Количество: {getAgenciesData.getAgencies.totalCount}
              </Tag>
            </div>
          </>
        )}
      </BootLayout>
    </ContentLayout>
  );
};
