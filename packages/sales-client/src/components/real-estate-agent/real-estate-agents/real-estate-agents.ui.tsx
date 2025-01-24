import { useLazyQuery } from '@apollo/client';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import {
  BootLayout,
  Button,
  DEFAULT_LIST_LIMIT,
  ContentLayout,
  Input,
  Pagination,
  Toolbar,
  Tag,
  cn,
} from '@/common';
import { GET_REAL_ESTATE_AGENTS } from '@/components/real-estate-agent/real-estate-agents/real-estate-agents.gql';

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

  const handleChangePage = (event: { selected: number }) => {
    const newOffset =
      (event.selected * DEFAULT_LIST_LIMIT) %
      getRealEstateAgentsData!.getRealEstateAgents.totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
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
  }, [debouncedValue, itemOffset]);

  return (
    <ContentLayout title='Агенты'>
      <Toolbar>
        <Input
          placeholder='Поиск по названию'
          value={prefix}
          showClearButton={Boolean(prefix)}
          onChange={handleChangeSearch}
          onClear={() => setPrefix('')}
        />
        <Button onClick={() => navigate('/real-estate-agent/new')}>
          Создать агента
        </Button>
      </Toolbar>
      <BootLayout isLoading={getRealEstateAgentsLoading}>
        {getRealEstateAgentsData && (
          <>
            <div className='flex-1 overflow-auto'>
              {getRealEstateAgentsData.getRealEstateAgents.realEstateAgents?.map(
                ({ realEstateAgent: { id, fullName } }) => (
                  <Link
                    className='hover:bg-c-bg-secondary flex items-center rounded-lg p-3'
                    key={id}
                    to={`/real-estate-agent/${id}`}
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
                getRealEstateAgentsData.getRealEstateAgents.totalCount >
                  DEFAULT_LIST_LIMIT && 'justify-between',
              )}
            >
              {getRealEstateAgentsData.getRealEstateAgents.totalCount >
                DEFAULT_LIST_LIMIT && (
                <Pagination
                  totalCount={
                    getRealEstateAgentsData.getRealEstateAgents.totalCount || 0
                  }
                  limit={DEFAULT_LIST_LIMIT}
                  initialPage={currentPage}
                  onChange={handleChangePage}
                />
              )}
              <Tag tagSize='s'>
                Количество:{' '}
                {getRealEstateAgentsData.getRealEstateAgents.totalCount}
              </Tag>
            </div>
          </>
        )}
      </BootLayout>
    </ContentLayout>
  );
};
