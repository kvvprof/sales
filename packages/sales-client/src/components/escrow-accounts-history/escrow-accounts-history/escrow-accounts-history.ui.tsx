import { useLazyQuery, useMutation } from '@apollo/client';
import axios from 'axios';
import chardet from 'chardet';
import { format } from 'date-fns';
import Papa from 'papaparse';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { EscrowAccountStatus } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  DEFAULT_LIST_LIMIT,
  ESCROW_ACCOUNT_STATUS_MAPPING,
  ContentLayout,
  Input,
  Pagination,
  Toolbar,
  normalizePayload,
  Loader,
  Tag,
  cn,
} from '@/common';
import {
  GET_ESCROW_ACCOUNTS_HISTORY,
  CREATE_ESCROW_ACCOUNTS_HISTORY,
} from '@/components/escrow-accounts-history/escrow-accounts-history/escrow-accounts-history.gql';

export const EscrowAccountsHistory = () => {
  const [itemOffset, setItemOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [prevPrefix, setPrevPrefix] = useState<string>('');
  const [prefix, setPrefix] = useState<string>('');
  const [debouncedValue] = useDebounce(prefix, 500);
  const fileInputRefCsv = useRef<HTMLInputElement | null>(null);
  const fileInputRefXlsx = useRef<HTMLInputElement | null>(null);
  const [isEscrowSending, setIsEscrowSending] = useState<boolean>(false);

  const [
    getEscrowAccountsHistory,
    {
      loading: getEscrowAccountsHistoryLoading,
      data: getEscrowAccountsHistoryData,
      refetch: getEscrowAccountsHistoryRefetch,
    },
  ] = useLazyQuery(GET_ESCROW_ACCOUNTS_HISTORY, {
    onCompleted() {
      setPrevPrefix(debouncedValue);
      setCurrentPage(0);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const [createEscrowHistory, { loading: createEscrowHistoryLoading }] =
    useMutation(CREATE_ESCROW_ACCOUNTS_HISTORY, {
      onCompleted() {
        toast.info('История операций по эскроу-счетам загружена успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const clearFileInput = (ref: React.RefObject<HTMLInputElement>) => {
    if (ref.current) {
      ref.current.value = '';
    }
  };

  const handleXlsxFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      setIsEscrowSending(true);

      const file = event.target.files?.[0];

      if (!file) {
        toast.error('Файл не выбран.');
        return;
      }

      const formData = new FormData();

      formData.append('file', file);

      await axios.post(
        `${import.meta.env.VITE_SALES_GUARD_URL}/escrow`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      toast.info('Файл успешно отправлен.');
    } catch (error) {
      toast.error('Произошла ошибка при отправке файла.');
    } finally {
      setIsEscrowSending(false);
      clearFileInput(fileInputRefXlsx);
    }
  };

  const handleCsvFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const file = event.target.files?.[0];

      if (!file) {
        toast.error('Файл не выбран.');
        return;
      }

      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target?.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          const encodings = chardet.analyse(uint8Array);

          if (!encodings.some((encoding) => encoding.name === 'UTF-8')) {
            toast.error('Файл должен быть в кодировке UTF-8.');
            return;
          }

          Papa.parse(file, {
            header: false,
            skipEmptyLines: true,
            complete: async (results: Papa.ParseResult<string[]>) => {
              try {
                const builderInn = results.data[2][9].match(/ИНН\s*(\d{10})/);

                if (!builderInn) {
                  toast.error('Не удалось получить ИНН застройщика.');
                  return;
                }

                await createEscrowHistory({
                  variables: {
                    input: results.data
                      .filter(
                        (el) =>
                          ['Открыт', 'Закрыт'].includes(el[0]) &&
                          /^\d+$/.test(el[1]) &&
                          /^\d{2}\.\d{2}\.\d{4}$/.test(el[2]),
                      )
                      .map((el) => {
                        const normalizedValue = normalizePayload(el);
                        return {
                          status:
                            normalizedValue[0] === 'Открыт'
                              ? EscrowAccountStatus.Opened
                              : EscrowAccountStatus.Closed,
                          number: normalizedValue[1],
                          openingDate: normalizedValue[2]
                            .split('.')
                            .reverse()
                            .join('-'),
                          depositedAmount: normalizedValue[3]
                            .replace(/\s+/g, '')
                            .replace(',', '.'),
                          incomingBalance: normalizedValue[4]
                            .replace(/\s+/g, '')
                            .replace(',', '.'),
                          dateOfTransaction: normalizedValue[5]
                            .split('.')
                            .reverse()
                            .join('-'),
                          transactionAmount: normalizedValue[6]
                            .replace(/\s+/g, '')
                            .replace(',', '.'),
                          outgoingBalance: normalizedValue[7]
                            .replace(/\s+/g, '')
                            .replace(',', '.'),
                          expirationDate: normalizedValue[8]
                            .split('.')
                            .reverse()
                            .join('-'),
                          depositor: normalizedValue[9],
                          depositorInn: normalizedValue[10],
                          dduNumber: normalizedValue[11],
                          dduDate: normalizedValue[12]
                            .split('.')
                            .reverse()
                            .join('-'),
                          loanAgreementNumber:
                            normalizedValue[13] && normalizedValue[13] !== '-'
                              ? normalizedValue[13]
                              : null,
                          loanAgreementDate:
                            normalizedValue[14] && normalizedValue[14] !== '-'
                              ? normalizedValue[14]
                                  .split('.')
                                  .reverse()
                                  .join('-')
                              : null,
                          closingDate:
                            normalizedValue[16] &&
                            normalizedValue[16].split('.').reverse().join('-'),
                          builderInn: builderInn[1],
                        };
                      }),
                  },
                });

                getEscrowAccountsHistoryRefetch();
              } catch (error) {
                toast.error('Ошибка при обработке данных CSV файла.');
              }
            },
          });
        } catch (error) {
          toast.error('Ошибка при чтении файла.');
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      toast.error('Ошибка при загрузке CSV файла.');
    } finally {
      clearFileInput(fileInputRefCsv);
    }
  };

  const handleChangePage = (event: { selected: number }) => {
    const newOffset =
      (event.selected * DEFAULT_LIST_LIMIT) %
      getEscrowAccountsHistoryData!.getEscrowAccountsHistory.totalCount;
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
    if (itemOffset !== null && !createEscrowHistoryLoading) {
      getEscrowAccountsHistory({
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
    <ContentLayout title='История операций по эскроу-счетам'>
      <Toolbar>
        <Input
          placeholder='Поиск по номеру ДДУ или по ИНН застройщика'
          value={prefix}
          showClearButton={Boolean(prefix)}
          onChange={handleChangeSearch}
          onClear={handleSearchClear}
        />
        <Button
          disabled={isEscrowSending}
          onClick={() => {
            fileInputRefXlsx.current?.click();
          }}
        >
          {isEscrowSending ? (
            <div className='flex items-center gap-1'>
              Отправка
              <Loader size='small' />
            </div>
          ) : (
            'Отправить (.xlsx)'
          )}
        </Button>
        <Button
          disabled={createEscrowHistoryLoading}
          onClick={() => {
            fileInputRefCsv.current?.click();
          }}
        >
          Загрузить (.csv)
        </Button>
        <div className='relative'>
          <Input
            className='absolute hidden'
            ref={fileInputRefXlsx}
            type='file'
            accept='.xlsx,.xls'
            onChange={handleXlsxFileUpload}
          />
        </div>
        <div className='relative'>
          <Input
            className='absolute hidden'
            ref={fileInputRefCsv}
            type='file'
            accept='.csv'
            onChange={handleCsvFileUpload}
          />
        </div>
      </Toolbar>
      <BootLayout
        isLoading={
          createEscrowHistoryLoading || getEscrowAccountsHistoryLoading
        }
      >
        {getEscrowAccountsHistoryData && (
          <>
            <div className='flex-1 overflow-auto'>
              <table className='relative min-w-[3500px]'>
                <thead className='bg-c-bg-primary sticky top-0'>
                  <tr>
                    <th>ИНН застройщика</th>
                    <th>Статус</th>
                    <th>Номер ДДУ</th>
                    <th>Номер эскроу-счета</th>
                    <th>Дата операции</th>
                    <th>Сумма операции, ₽</th>
                    <th>Депонируемая сумма, ₽</th>
                    <th>Входящий остаток, ₽</th>
                    <th>Исходящий остаток, ₽</th>
                    <th>Депонент</th>
                    <th>ИНН Депонента</th>
                    <th>Номер КД</th>
                    <th>Дата КД</th>
                    <th>Дата ДДУ</th>
                    <th>Дата завершения срока условного депонирования</th>
                    <th>Дата открытия эскроу-счета</th>
                    <th>Дата закрытия эскроу-счета</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {getEscrowAccountsHistoryData.getEscrowAccountsHistory.escrowAccountsHistory.map(
                    (history) => (
                      <tr key={history.id}>
                        <td>{history.builderInn}</td>
                        <td>{ESCROW_ACCOUNT_STATUS_MAPPING[history.status]}</td>
                        <td>{history.dduNumber}</td>
                        <td>{history.number}</td>
                        <td>
                          {format(history.dateOfTransaction, 'dd.MM.yyyy')}
                        </td>
                        <td>
                          {Number(history.transactionAmount).toLocaleString(
                            'ru-RU',
                          )}
                        </td>
                        <td>
                          {Number(history.depositedAmount).toLocaleString(
                            'ru-RU',
                          )}
                        </td>
                        <td>
                          {Number(history.incomingBalance).toLocaleString(
                            'ru-RU',
                          )}
                        </td>
                        <td>
                          {Number(history.outgoingBalance).toLocaleString(
                            'ru-RU',
                          )}
                        </td>
                        <td>{history.depositor}</td>
                        <td>{history.depositorInn}</td>
                        <td>{history.loanAgreementNumber}</td>
                        <td>
                          {history.loanAgreementNumber &&
                            format(history.loanAgreementDate, 'dd.MM.yyyy')}
                        </td>
                        <td>{format(history.dduDate, 'dd.MM.yyyy')}</td>
                        <td>{format(history.expirationDate, 'dd.MM.yyyy')}</td>
                        <td>{format(history.openingDate, 'dd.MM.yyyy')}</td>
                        <td>
                          {history.closingDate &&
                            format(history.closingDate, 'dd.MM.yyyy')}
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
                getEscrowAccountsHistoryData.getEscrowAccountsHistory
                  .totalCount > DEFAULT_LIST_LIMIT && 'justify-between',
              )}
            >
              {getEscrowAccountsHistoryData.getEscrowAccountsHistory
                .totalCount > DEFAULT_LIST_LIMIT && (
                <Pagination
                  totalCount={
                    getEscrowAccountsHistoryData.getEscrowAccountsHistory
                      .totalCount || 0
                  }
                  limit={DEFAULT_LIST_LIMIT}
                  initialPage={currentPage}
                  onChange={handleChangePage}
                />
              )}
              <Tag tagSize='s'>
                Количество:{' '}
                {
                  getEscrowAccountsHistoryData.getEscrowAccountsHistory
                    .totalCount
                }
              </Tag>
            </div>
          </>
        )}
      </BootLayout>
    </ContentLayout>
  );
};
