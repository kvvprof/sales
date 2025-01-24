import { useLazyQuery } from '@apollo/client';
import { DocumentTextIcon, LinkIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { truncate } from 'lodash';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import {
  BootLayout,
  cn,
  DEFAULT_LIST_LIMIT,
  Input,
  Pagination,
  Tag,
  Toolbar,
} from '@/common';
import { GET_REAL_ESTATE_AGENCY_ACTS } from '@/components/real-estate-agency-act/real-estate-agency-acts/real-estate-agency-acts.gql';

export const RealEstateAgencyActs = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [prevPrefix, setPrevPrefix] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');
  const [debouncedValue] = useDebounce(prefix, 500);

  const [
    getRealEstateAgencyActs,
    {
      loading: getRealEstateAgencyActsLoading,
      data: getRealEstateAgencyActsData,
    },
  ] = useLazyQuery(GET_REAL_ESTATE_AGENCY_ACTS, {
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
      getRealEstateAgencyActsData!.getRealEstateAgencyActs.totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
  };

  useEffect(() => {
    if (itemOffset !== null) {
      getRealEstateAgencyActs({
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
  }, [itemOffset, debouncedValue]);

  return (
    <BootLayout isLoading={getRealEstateAgencyActsLoading}>
      {getRealEstateAgencyActsData && (
        <>
          <Toolbar>
            <Input
              placeholder='Поиск по номеру акта'
              value={prefix}
              showClearButton={Boolean(prefix)}
              autoFocus={true}
              onChange={handleChangeSearch}
              onClear={() => setPrefix('')}
            />
          </Toolbar>
          <div className='relative mt-3 flex-1 overflow-auto'>
            <table className='relative min-w-[1600px]'>
              <thead className='bg-c-bg-primary sticky top-0'>
                <tr>
                  <th>Номер акта</th>
                  <th>Дата</th>
                  <th>Сумма к выплате, ₽</th>
                  <th>Удержание, ₽</th>
                  <th>Номер контракта клиента</th>
                  <th>Номер контракта агентства</th>
                  <th>Ссылка на распечатку</th>
                </tr>
              </thead>
              <tbody>
                {getRealEstateAgencyActsData.getRealEstateAgencyActs.realEstateAgencyActs.map(
                  ({
                    realEstateAgencyAct,
                    agency,
                    clientContract,
                    agencyContract,
                  }) => (
                    <tr key={realEstateAgencyAct.id}>
                      <td>
                        <Link
                          className='flex items-center gap-2 bg-transparent hover:underline'
                          to={`/real-estate-agency/act/${realEstateAgencyAct.id}`}
                          target='_blank'
                        >
                          <DocumentTextIcon className='text-c-text-primary hover: h-4 w-4' />
                          {realEstateAgencyAct.number}
                        </Link>
                      </td>
                      <td>{format(realEstateAgencyAct.date, 'dd.MM.yyyy')}</td>
                      <td>
                        {Number(realEstateAgencyAct.amount).toLocaleString(
                          'ru-RU',
                        )}
                      </td>
                      <td>
                        {realEstateAgencyAct.retention
                          ? Number(
                              realEstateAgencyAct.retention,
                            ).toLocaleString('ru-RU')
                          : '-'}
                      </td>
                      <td>
                        <Link
                          className='flex items-center gap-2 bg-transparent hover:underline'
                          to={`/client-contract/ddu/${clientContract.clientContract.id}`}
                          target='_blank'
                        >
                          <DocumentTextIcon className='text-c-text-primary hover: h-4 w-4' />
                          {clientContract.clientContract.number}
                        </Link>
                      </td>
                      <td>
                        <Link
                          className='flex items-center gap-2 bg-transparent hover:underline'
                          to={`/agency-contract/real-estate-agency/${
                            agencyContract.agencyContract.id
                          }`}
                          target='_blank'
                        >
                          <div className='flex items-center gap-1'>
                            <DocumentTextIcon className='text-c-text-primary hover: h-4 w-4' />
                            <span>{agencyContract.agencyContract.number}</span>
                            <span className='text-[10px]'>({agency.name})</span>
                          </div>
                        </Link>
                      </td>
                      <td>
                        {realEstateAgencyAct.link ? (
                          <Link
                            className='flex items-center gap-2 bg-transparent hover:underline'
                            to={realEstateAgencyAct.link}
                            target='_blank'
                          >
                            <LinkIcon className='text-c-text-primary h-4 w-4' />

                            {truncate(realEstateAgencyAct.link, {
                              length: 50,
                              omission: '...',
                            })}
                          </Link>
                        ) : (
                          '-'
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
              getRealEstateAgencyActsData.getRealEstateAgencyActs.totalCount >
                DEFAULT_LIST_LIMIT && 'justify-between',
            )}
          >
            {getRealEstateAgencyActsData.getRealEstateAgencyActs.totalCount >
              DEFAULT_LIST_LIMIT && (
              <Pagination
                totalCount={
                  getRealEstateAgencyActsData.getRealEstateAgencyActs
                    .totalCount || 0
                }
                limit={DEFAULT_LIST_LIMIT}
                initialPage={currentPage}
                onChange={handleChangePage}
              />
            )}
            <Tag tagSize='s'>
              Количество:{' '}
              {getRealEstateAgencyActsData.getRealEstateAgencyActs.totalCount}
            </Tag>
          </div>
        </>
      )}
    </BootLayout>
  );
};
