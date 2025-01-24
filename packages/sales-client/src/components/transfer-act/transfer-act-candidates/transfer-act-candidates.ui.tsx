import { useLazyQuery, useQuery } from '@apollo/client';
import {
  DocumentTextIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { truncate } from 'lodash';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BasicObject } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  CLIENT_CONTRACT_ROUTE_MAPPING,
  CLIENT_CONTRACT_TYPE_MAPPING,
  DEFAULT_LIST_LIMIT,
  IOption,
  Input,
  Modal,
  PRODUCT_CATEGORY_MAPPING,
  Pagination,
  Select,
  Tag,
  Toolbar,
  cn,
  useSettingsStore,
} from '@/common';
import { GET_OBJECTS } from '@/components/client-contract/client-contracts/client-contracts.gql';

import { NewTransferAct } from '@/components/transfer-act/new-transfer-act/new-transfer-act.ui';
import { GET_CLIENT_CONTRACTS_WITHOUT_TRANSFER_ACT } from '@/components/transfer-act/transfer-act-candidates/transfer-act-candidates.gql';

export const TransferActCandidates = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [prevPrefix, setPrevPrefix] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');
  const [debouncedValue] = useDebounce(prefix, 500);
  const [objectOptions, setObjectOptions] = useState<IOption<BasicObject>[]>(
    [],
  );
  const currentObject = useSettingsStore((state) => state.currentObject);
  const setCurrentObject = useSettingsStore((state) => state.setCurrentObject);
  const [isNewTransferActModalOpen, setIsNewTransferActModalOpen] =
    useState<boolean>(false);
  const [transferActPayload, setIsTransferActPayload] = useState<{
    clientContractId: number;
    clientIds: number[];
  } | null>(null);

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
    getClientContractsWithoutTransferAct,
    {
      loading: getClientContractsWithoutTransferActLoading,
      data: getClientContractsWithoutTransferActData,
    },
  ] = useLazyQuery(GET_CLIENT_CONTRACTS_WITHOUT_TRANSFER_ACT, {
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
      getClientContractsWithoutTransferActData!
        .getClientContractsWithoutTransferAct.totalCount;
    setCurrentPage(event.selected);
    setItemOffset(newOffset);
  };

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setPrefix(event.target.value);
  };

  const handleSearchClear = () => {
    setPrefix('');
  };

  const handleSelectObject = (option: IOption<BasicObject>) => {
    setCurrentObject(option);
  };

  const handleCreateTransferAct = (payload: {
    clientContractId: number;
    clientIds: number[];
  }) => {
    setIsTransferActPayload(payload);
    setIsNewTransferActModalOpen(true);
  };

  const buildVariables = () => {
    if (itemOffset === null) {
      return null;
    }

    return {
      variables: {
        input: {
          objectId: currentObject?.payload?.id ?? null,
          options: {
            limit: DEFAULT_LIST_LIMIT,
            offset: prevPrefix !== debouncedValue ? 0 : itemOffset,
            prefix: debouncedValue || null,
          },
        },
      },
    };
  };

  const handleSubmitNewTransferAct = () => {
    setIsNewTransferActModalOpen(false);

    const variables = buildVariables();

    if (variables) {
      getClientContractsWithoutTransferAct(variables);
    }
  };

  useEffect(() => {
    const variables = buildVariables();

    if (variables) {
      getClientContractsWithoutTransferAct(variables);
    }
  }, [debouncedValue, itemOffset, currentObject]);

  return (
    <>
      <Modal
        title='Создание акта приема-передачи'
        onClose={() => setIsNewTransferActModalOpen(false)}
        isOpen={isNewTransferActModalOpen}
      >
        {transferActPayload && (
          <NewTransferAct
            payload={transferActPayload}
            onSubmit={handleSubmitNewTransferAct}
          />
        )}
      </Modal>
      <BootLayout
        isLoading={
          getObjectsLoading || getClientContractsWithoutTransferActLoading
        }
      >
        {getClientContractsWithoutTransferActData && (
          <>
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
            </Toolbar>
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
                    <th>Клиенты</th>
                  </tr>
                </thead>
                <tbody>
                  {getClientContractsWithoutTransferActData.getClientContractsWithoutTransferAct.clientContracts.map(
                    ({
                      clientContractProperties,
                      clients,
                      product: { product },
                      object,
                    }) => (
                      <tr key={clientContractProperties.id}>
                        <td>
                          <Button
                            className='text-c-text-primary border-1 border-c-primary hover:bg-c-primary hover:text-c-text-secondary border-dashed bg-transparent p-1 text-[8px] hover:opacity-100'
                            buttonSize='s'
                            onClick={() =>
                              handleCreateTransferAct({
                                clientContractId: clientContractProperties.id,
                                clientIds: clients.map(
                                  ({ client: { id } }) => id,
                                ),
                              })
                            }
                          >
                            Создать акт
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
                getClientContractsWithoutTransferActData
                  .getClientContractsWithoutTransferAct.totalCount >
                  DEFAULT_LIST_LIMIT && 'justify-between',
              )}
            >
              {getClientContractsWithoutTransferActData
                .getClientContractsWithoutTransferAct.totalCount >
                DEFAULT_LIST_LIMIT && (
                <Pagination
                  totalCount={
                    getClientContractsWithoutTransferActData
                      .getClientContractsWithoutTransferAct.totalCount || 0
                  }
                  limit={DEFAULT_LIST_LIMIT}
                  initialPage={currentPage}
                  onChange={handleChangePage}
                />
              )}
              <Tag tagSize='s'>
                Количество:{' '}
                {
                  getClientContractsWithoutTransferActData
                    .getClientContractsWithoutTransferAct.totalCount
                }
              </Tag>
            </div>
          </>
        )}
      </BootLayout>
    </>
  );
};
