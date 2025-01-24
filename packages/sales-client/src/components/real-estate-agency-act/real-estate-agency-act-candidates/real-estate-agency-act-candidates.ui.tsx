import { useLazyQuery } from '@apollo/client';
import {
  BanknotesIcon,
  DocumentTextIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  BootLayout,
  Button,
  CLIENT_CONTRACT_ROUTE_MAPPING,
  cn,
  Modal,
  Tag,
} from '@/common';
import { INewRealEstateAgencyAct } from '@/components/real-estate-agency-act/new-real-estate-agency-act/new-real-estate-agency-act.interface';
import { NewRealEstateAgencyAct } from '@/components/real-estate-agency-act/new-real-estate-agency-act/new-real-estate-agency-act.ui';
import { GET_REAL_ESTATE_AGENCY_ACT_CANDIDATES } from '@/components/real-estate-agency-act/real-estate-agency-act-candidates/real-estate-agency-act-candidates.gql';

export const RealEstateAgencyActCandidates = () => {
  const [
    isNewRealEstateAgencyActModalOpen,
    setIsNewRealEstateAgencyActModalOpen,
  ] = useState<boolean>(false);
  const [payload, setPayload] = useState<Omit<
    INewRealEstateAgencyAct,
    'onSubmit'
  > | null>(null);

  const [
    getRealEstateAgencyAct,
    {
      loading: getRealEstateAgencyActCandidatesLoading,
      data: getRealEstateAgencyActCandidatesData,
    },
  ] = useLazyQuery(GET_REAL_ESTATE_AGENCY_ACT_CANDIDATES, {
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleSubmitNewRealEstateAgencyAct = () => {
    getRealEstateAgencyAct();
    setIsNewRealEstateAgencyActModalOpen(false);
  };

  useEffect(() => {
    getRealEstateAgencyAct();
  }, []);

  return (
    <>
      <Modal
        title='Создание акта агентства недвижимости'
        isOpen={isNewRealEstateAgencyActModalOpen}
        onClose={() => setIsNewRealEstateAgencyActModalOpen(false)}
      >
        {getRealEstateAgencyActCandidatesData && payload && (
          <NewRealEstateAgencyAct
            {...payload}
            onSubmit={handleSubmitNewRealEstateAgencyAct}
          />
        )}
      </Modal>
      <BootLayout isLoading={getRealEstateAgencyActCandidatesLoading}>
        {getRealEstateAgencyActCandidatesData && (
          <>
            <div className='flex-1 overflow-auto'>
              <table className='relative min-w-[1600px]'>
                <thead className='bg-c-bg-primary sticky top-0'>
                  <tr>
                    <th>
                      <EllipsisHorizontalIcon className='h-6 w-6' />
                    </th>
                    <th>Номер контракта клиента</th>
                    <th>Стоимость контракта, ₽</th>
                    <th>Сумма платежей, ₽</th>
                    <th>Дата последней транзакции</th>
                    <th>Процент оплаты, %</th>
                    <th>Сумма к выплате, ₽</th>
                    <th>Номер контракта агентства</th>
                  </tr>
                </thead>
                <tbody>
                  {getRealEstateAgencyActCandidatesData.getRealEstateAgencyActCandidates.map(
                    (data) => (
                      <tr key={data.clientContractId}>
                        <td>
                          <Button
                            className='text-c-text-primary border-1 border-c-primary hover:bg-c-primary hover:text-c-text-secondary border-dashed bg-transparent p-1 text-[8px] hover:opacity-100'
                            buttonSize='s'
                            onClick={() => {
                              setPayload({
                                clientContractId: data.clientContractId,
                                amount: Number(data.payAmount),
                              });
                              setIsNewRealEstateAgencyActModalOpen(true);
                            }}
                          >
                            Создать акт
                          </Button>
                        </td>
                        <td>
                          <Link
                            className='flex items-center gap-2 bg-transparent hover:underline'
                            to={`/client-contract/${CLIENT_CONTRACT_ROUTE_MAPPING[data.clientContractType]}/${data.clientContractId}`}
                            target='_blank'
                          >
                            <DocumentTextIcon className='text-c-text-primary h-4 w-4' />
                            {data.clientContractNumber}
                          </Link>
                        </td>
                        <td>
                          <Link
                            className='flex items-center gap-2 bg-transparent hover:underline'
                            to={`/payment-schedule/${data.clientContractId}`}
                            target='_blank'
                          >
                            <BanknotesIcon className='text-c-text-primary h-4 w-4' />
                            {Number(data.clientContractPrice).toLocaleString(
                              'ru-RU',
                            )}
                          </Link>
                        </td>
                        <td>
                          {Number(data.transactionAmount).toLocaleString(
                            'ru-RU',
                          )}{' '}
                        </td>
                        <td>
                          <div
                            className={cn(
                              'flex items-center gap-1',
                              data.daysElapsed > data.agencyContractMaxDays &&
                                'text-c-danger',
                            )}
                          >
                            {data.mostRecentTransactionDate
                              ? format(
                                  data.mostRecentTransactionDate,
                                  'dd.MM.yyyy',
                                )
                              : '-'}
                            <span className='text-[10px]'>{` (прошло дней: ${data.daysElapsed} из ${data.agencyContractMaxDays})`}</span>
                          </div>
                        </td>
                        <td>
                          <div className='flex items-center gap-1'>
                            <span>
                              {Number(data.paymentPercentage).toLocaleString(
                                'ru-RU',
                              )}
                            </span>
                            <span className='text-[10px]'>
                              (порог: {data.agencyContractThreshold}%)
                            </span>
                          </div>
                        </td>
                        <td>
                          <div className='flex items-center gap-1'>
                            <span>
                              {Number(data.payAmount).toLocaleString('ru-RU')}
                            </span>
                            <span className='text-[10px]'>
                              (процент: {data.agencyContractPercent}%)
                            </span>
                          </div>
                        </td>
                        <td>
                          <Link
                            className='flex items-center gap-2 bg-transparent hover:underline'
                            to={`/agency-contract/real-estate-agency/${
                              data.agencyContractId
                            }`}
                            target='_blank'
                          >
                            <div className='flex items-center gap-1'>
                              <DocumentTextIcon className='text-c-text-primary hover: h-4 w-4' />
                              <span>{data.agencyContractNumber}</span>
                              <span className='text-[10px]'>
                                ({data.agencyName})
                              </span>
                            </div>
                          </Link>
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
            <div className='flex items-end justify-end'>
              <Tag tagSize='s'>
                Количество:{' '}
                {
                  getRealEstateAgencyActCandidatesData
                    .getRealEstateAgencyActCandidates.length
                }
              </Tag>
            </div>
          </>
        )}
      </BootLayout>
    </>
  );
};
