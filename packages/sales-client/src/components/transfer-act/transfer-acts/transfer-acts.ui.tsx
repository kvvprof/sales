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
  CLIENT_CONTRACT_ROUTE_MAPPING,
  cn,
  DEFAULT_LIST_LIMIT,
  Input,
  Pagination,
  PRODUCT_CATEGORY_MAPPING,
  Tag,
  Toolbar,
} from '@/common';
import { GET_TRANSFER_ACTS } from '@/components/transfer-act/transfer-acts/transfer-acts.gql';

export const TransferActs = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [prevPrefix, setPrevPrefix] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');
  const [debouncedValue] = useDebounce(prefix, 500);

  const [
    getTransferActs,
    { loading: getTransferActsLoading, data: getTransferActsData },
  ] = useLazyQuery(GET_TRANSFER_ACTS, {
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
      getTransferActsData!.getTransferActs.totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
  };

  useEffect(() => {
    if (itemOffset !== null) {
      getTransferActs({
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
    <BootLayout isLoading={getTransferActsLoading}>
      {getTransferActsData && (
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
            <table className='relative'>
              <thead className='bg-c-bg-primary sticky top-0'>
                <tr>
                  <th>Номер акта</th>
                  <th>Дата</th>
                  <th>Номер контракта клиента</th>
                  <th>Объект</th>
                  <th>Продукт</th>
                  <th>Ссылка на распечатку</th>
                </tr>
              </thead>
              <tbody>
                {getTransferActsData.getTransferActs.transferActs.map(
                  ({ transferAct, product, object, clientContract }) => (
                    <tr key={transferAct.id}>
                      <td>
                        <Link
                          className='flex items-center gap-2 bg-transparent hover:underline'
                          to={`/transfer-act/${transferAct.id}`}
                          target='_blank'
                        >
                          <DocumentTextIcon className='text-c-text-primary hover: h-4 w-4' />
                          {transferAct.number}
                        </Link>
                      </td>
                      <td>{format(transferAct.date, 'dd.MM.yyyy')}</td>
                      <td>
                        <Link
                          className='flex items-center gap-2 bg-transparent hover:underline'
                          to={`/client-contract/${CLIENT_CONTRACT_ROUTE_MAPPING[clientContract.clientContractType]}/${clientContract.id}`}
                          target='_blank'
                        >
                          <DocumentTextIcon className='text-c-text-primary h-4 w-4 hover:underline' />
                          {clientContract.number}
                        </Link>
                      </td>
                      <td>{object.name}</td>
                      <td>
                        {`${PRODUCT_CATEGORY_MAPPING[product.productCategory]} № ${product.number}`}
                      </td>
                      <td>
                        {transferAct.link ? (
                          <Link
                            className='flex items-center gap-2 bg-transparent hover:underline'
                            to={transferAct.link}
                            target='_blank'
                          >
                            <LinkIcon className='text-c-text-primary h-4 w-4' />

                            {truncate(transferAct.link, {
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
              getTransferActsData.getTransferActs.totalCount >
                DEFAULT_LIST_LIMIT && 'justify-between',
            )}
          >
            {getTransferActsData.getTransferActs.totalCount >
              DEFAULT_LIST_LIMIT && (
              <Pagination
                totalCount={getTransferActsData.getTransferActs.totalCount || 0}
                limit={DEFAULT_LIST_LIMIT}
                initialPage={currentPage}
                onChange={handleChangePage}
              />
            )}
            <Tag tagSize='s'>
              Количество: {getTransferActsData.getTransferActs.totalCount}
            </Tag>
          </div>
        </>
      )}
    </BootLayout>
  );
};
