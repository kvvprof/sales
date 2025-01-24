import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { EllipsisHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { Decimal } from 'decimal.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  BootLayout,
  Button,
  ContentLayout,
  Dropdown,
  ESCROW_ACCOUNT_STATUS_MAPPING,
  Modal,
  SCHEDULED_PAYMENT_TYPE_MAPPING,
  Tag,
  Toolbar,
} from '@/common';
import { NewActualPayments } from '@/components/payment-schedule/new-actual-payments/new-actual-payments.ui';
import { NewScheduledPayments } from '@/components/payment-schedule/new-scheduled-payments/new-scheduled-payments.ui';
import {
  DELETE_ACTUAL_PAYMENT,
  DELETE_SCHEDULED_PAYMENT,
  GET_ESCROW_ACCOUNTS_HISTORY_BY_DDU_NUMBER,
  GET_PAYMENTS,
} from '@/components/payment-schedule/payment-schedule/payment-schedule.gql';
import { IPaymentSchedule } from '@/components/payment-schedule/payment-schedule/payment-schedule.interface';

export const PaymentSchedule = ({ id }: IPaymentSchedule) => {
  const [isNewScheduledPaymentModalOpen, setIsNewScheduledPaymentModalOpen] =
    useState<boolean>(false);
  const [isNewActualPaymentModalOpen, setIsNewActualPaymentModalOpen] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const {
    loading: getPaymentsLoading,
    data: getPaymentsData,
    refetch: getPaymentsRefetch,
  } = useQuery(GET_PAYMENTS, {
    variables: {
      getScheduledPaymentsInput: {
        clientContractId: id,
      },
      getActualPaymentsInput: {
        clientContractId: id,
      },
      getClientContractInput: {
        id,
      },
    },
    onCompleted(data) {
      getEscrowAccountsHistoryByDduNumber({
        variables: {
          input: {
            dduNumber: data.getClientContract.clientContractProperties.number,
          },
        },
      });
    },
    onError(error) {
      navigate('/', { replace: true });
      toast.error(error.message);
    },
  });

  const [
    getEscrowAccountsHistoryByDduNumber,
    {
      loading: getEscrowAccountsHistoryByDduNumberLoading,
      data: getEscrowAccountsHistoryByDduNumberData,
    },
  ] = useLazyQuery(GET_ESCROW_ACCOUNTS_HISTORY_BY_DDU_NUMBER, {
    onError(error) {
      navigate('/', { replace: true });
      toast.error(error.message);
    },
  });

  const [deleteScheduledPayment, { loading: deleteScheduledPaymentLoading }] =
    useMutation(DELETE_SCHEDULED_PAYMENT, {
      onCompleted(data) {
        if (data.deleteScheduledPayment.isDeleted) {
          toast.info('Платеж удален успешно.');
          getPaymentsRefetch();
        }
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const [deleteActualPayment, { loading: deleteActualPaymentLoading }] =
    useMutation(DELETE_ACTUAL_PAYMENT, {
      onCompleted(data) {
        if (data.deleteActualPayment.isDeleted) {
          toast.info('Платеж удален успешно.');
          getPaymentsRefetch();
        }
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const countEscrowPayments = () => {
    if (
      !getEscrowAccountsHistoryByDduNumberData ||
      !getEscrowAccountsHistoryByDduNumberData.getEscrowAccountsHistoryByDduNumber
    ) {
      return new Decimal(0);
    }

    return getEscrowAccountsHistoryByDduNumberData.getEscrowAccountsHistoryByDduNumber
      .reduce(
        (acc, curr) => acc.plus(new Decimal(curr.transactionAmount)),
        new Decimal(0),
      )
      .toDecimalPlaces(2);
  };

  const countScheduledPayments = () => {
    if (!getPaymentsData || !getPaymentsData.getScheduledPayments) {
      return new Decimal(0);
    }

    return getPaymentsData.getScheduledPayments.scheduledPayments
      .reduce(
        (acc, { payment }) => acc.plus(new Decimal(payment)),
        new Decimal(0),
      )
      .toDecimalPlaces(2);
  };

  const countActualPayments = () => {
    if (!getPaymentsData || !getPaymentsData.getActualPayments) {
      return new Decimal(0);
    }

    return getPaymentsData.getActualPayments.actualPayments
      .reduce(
        (acc, { payment }) => acc.plus(new Decimal(payment)),
        new Decimal(0),
      )
      .toDecimalPlaces(2);
  };

  const handleDeleteScheduledPayment = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number,
  ) => {
    event.stopPropagation();
    deleteScheduledPayment({
      variables: { input: { id } },
    });
  };

  return (
    <>
      <Modal
        title='Создание запланированных платежей'
        isOpen={isNewScheduledPaymentModalOpen}
        onClose={() => setIsNewScheduledPaymentModalOpen(false)}
      >
        <NewScheduledPayments
          clientContractId={id}
          onSubmit={() => {
            setIsNewScheduledPaymentModalOpen(false);
            getPaymentsRefetch();
          }}
        />
      </Modal>
      <Modal
        title='Создание фактических платежей'
        isOpen={isNewActualPaymentModalOpen}
        onClose={() => setIsNewActualPaymentModalOpen(false)}
      >
        <NewActualPayments
          clientContractId={id}
          onSubmit={() => {
            setIsNewActualPaymentModalOpen(false);
            getPaymentsRefetch();
          }}
        />
      </Modal>
      <BootLayout
        isLoading={
          getPaymentsLoading ||
          deleteScheduledPaymentLoading ||
          deleteActualPaymentLoading ||
          getEscrowAccountsHistoryByDduNumberLoading
        }
      >
        <ContentLayout
          title={`График платежей ${getPaymentsData?.getClientContract.clientContractProperties.number}`}
        >
          <Toolbar
            text={`Стоимость контракта: ${Number(getPaymentsData?.getClientContract.clientContractProperties.price).toLocaleString('ru-RU')} ₽`}
          >
            <Dropdown>
              <Dropdown.Item
                name='Создать запланированные платежи'
                onClick={() => setIsNewScheduledPaymentModalOpen(true)}
              />
              <Dropdown.Item
                name='Создать фактические платежи'
                onClick={() => setIsNewActualPaymentModalOpen(true)}
              />
            </Dropdown>
          </Toolbar>
          <div className='flex gap-4'>
            <div className='flex w-full flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-medium'>Запланированные платежи</h2>
                <Tag>
                  Сумма:{' '}
                  {countScheduledPayments().toNumber().toLocaleString('ru-RU')}{' '}
                  ₽
                </Tag>
              </div>
              <div className='border-1 border-c-line-primary rounded-lg p-4'>
                <table className='relative'>
                  <thead className='bg-c-bg-primary sticky top-0'>
                    <tr>
                      <th>
                        <EllipsisHorizontalIcon className='h-6 w-6' />
                      </th>
                      <th>Дата</th>
                      <th>Сумма ₽</th>
                      <th>Вид</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getPaymentsData?.getScheduledPayments.scheduledPayments.map(
                      (payment) => (
                        <tr key={payment.id}>
                          <td>
                            <Button
                              className='flex items-center justify-center bg-transparent'
                              buttonSize='s'
                              onClick={(event) => {
                                handleDeleteScheduledPayment(event, payment.id);
                              }}
                            >
                              <XMarkIcon className='text-c-text-primary hover:text-c-danger h-4 w-4' />
                            </Button>
                          </td>
                          <td>{format(payment.date, 'dd.MM.yyyy')}</td>
                          <td>
                            {Number(payment.payment).toLocaleString('ru-RU')}
                          </td>
                          <td>
                            {
                              SCHEDULED_PAYMENT_TYPE_MAPPING[
                                payment.scheduledPaymentType
                              ]
                            }
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className='flex w-full flex-col gap-2'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-medium'>Фактические платежи</h2>
                <Tag>
                  Сумма:{' '}
                  {countActualPayments().toNumber().toLocaleString('ru-RU')} ₽
                </Tag>
              </div>
              <div className='border-1 border-c-line-primary rounded-lg p-4'>
                <table className='relative'>
                  <thead className='bg-c-bg-primary sticky top-0'>
                    <tr>
                      <th>
                        <EllipsisHorizontalIcon className='h-6 w-6' />
                      </th>
                      <th>Дата</th>
                      <th>Сумма ₽</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getPaymentsData?.getActualPayments.actualPayments.map(
                      (payment) => (
                        <tr key={payment.id}>
                          <td>
                            <Button
                              className='flex items-center justify-center bg-transparent'
                              buttonSize='s'
                              onClick={(event) => {
                                event.stopPropagation();
                                deleteActualPayment({
                                  variables: { input: { id: payment.id } },
                                });
                              }}
                            >
                              <XMarkIcon className='text-c-text-primary hover:text-c-danger h-4 w-4' />
                            </Button>
                          </td>
                          <td>{format(payment.date, 'dd.MM.yyyy')}</td>
                          <td>
                            {Number(payment.payment).toLocaleString('ru-RU')}
                          </td>
                        </tr>
                      ),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='mt-2 flex flex-col gap-2'>
            <div className='flex items-center justify-between'>
              <h2 className='text-lg font-medium'>
                История операций по эскроу-счету
              </h2>
              <Tag>
                Сумма:{' '}
                {countEscrowPayments().toNumber().toLocaleString('ru-RU')} ₽
              </Tag>
            </div>
            <div className='border-1 border-c-line-primary flex w-full flex-col gap-2 overflow-auto rounded-lg p-4'>
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
                  {getEscrowAccountsHistoryByDduNumberData?.getEscrowAccountsHistoryByDduNumber.map(
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
          </div>
        </ContentLayout>
      </BootLayout>
    </>
  );
};
