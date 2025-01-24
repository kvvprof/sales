import { useMutation } from '@apollo/client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { ScheduledPaymentType } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  DatePickerUI,
  Form,
  Input,
  MiniButton,
  IOption,
  Select,
  Tag,
  normalizePayload,
} from '@/common';
import { SCHEDULED_PAYMENT_TYPES } from '@/components/payment-schedule/new-scheduled-payments/new-scheduled-payments.constants';
import { CREATE_SCHEDULED_PAYMENTS } from '@/components/payment-schedule/new-scheduled-payments/new-scheduled-payments.gql';
import { INewScheduledPayments } from '@/components/payment-schedule/new-scheduled-payments/new-scheduled-payments.interface';
import {
  initialValues,
  NewScheduledPaymentsSchema,
  validationSchema,
} from '@/components/payment-schedule/new-scheduled-payments/new-scheduled-payments.validation';

export const NewScheduledPayments = ({
  clientContractId,
  onSubmit,
}: INewScheduledPayments) => {
  const [createScheduledPayments, { loading: createScheduledPaymentsLoading }] =
    useMutation(CREATE_SCHEDULED_PAYMENTS, {
      onCompleted() {
        toast.info('Запланированные платежи созданы успешно.');
        onSubmit();
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<NewScheduledPaymentsSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      const input = data.payments.map((payment) =>
        normalizePayload({
          ...payment,
          scheduledPaymentType: payment.scheduledPaymentType!,
          clientContractId,
        }),
      );

      createScheduledPayments({ variables: { input } });
    },
  });

  const handleSelectScheduledPaymentType = (
    index: number,
    { payload }: IOption<{ scheduledPaymentType: ScheduledPaymentType }>,
  ) => {
    formik.setFieldValue(
      'payments',
      formik.values.payments.map((payment, paymentIndex) =>
        index === paymentIndex
          ? {
              ...payment,
              scheduledPaymentType: payload?.scheduledPaymentType || null,
            }
          : payment,
      ),
    );
  };

  const handleDeleteScheduledPaymentType = (index: number) => {
    formik.setFieldValue(
      'payments',
      formik.values.payments.map((payment, paymentIndex) =>
        paymentIndex === index
          ? { ...payment, scheduledPaymentType: null }
          : payment,
      ),
    );
  };

  const addNewEmptyPayment = () => {
    formik.setFieldValue('payments', [
      ...formik.values.payments,
      { scheduledPaymentType: null, date: '', payment: 0 },
    ]);
  };

  const handleDeletePayment = (index: number) => {
    formik.setFieldValue(
      'payments',
      formik.values.payments.filter((_, i) => i !== index),
    );
  };

  const countPayments = () => {
    return formik.values.payments.reduce(
      (acc, { payment }) => acc + payment,
      0,
    );
  };

  const getScheduledPaymentTypeName = (
    scheduledPaymentType: ScheduledPaymentType,
  ) => {
    switch (scheduledPaymentType) {
      case ScheduledPaymentType.Own:
        return 'Собственные';
      case ScheduledPaymentType.Mortgage:
        return 'Ипотека';
      case ScheduledPaymentType.MaternityCapital:
        return 'Мат. капитал';
      case ScheduledPaymentType.Exchange:
        return 'Обмен';
      case null:
        return '';
    }
  };

  return (
    <BootLayout isLoading={createScheduledPaymentsLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <div className='flex flex-col items-center gap-4'>
          {formik.values.payments.map((_, index) => (
            <div className='flex w-full gap-1' key={index}>
              <div className='flex flex-1 gap-2'>
                <Select
                  isAbsoluteListPosition={true}
                  placeholder='Тип платежа'
                  options={SCHEDULED_PAYMENT_TYPES}
                  defaultSelected={
                    formik.values.payments[index].scheduledPaymentType
                      ? {
                          name: getScheduledPaymentTypeName(
                            formik.values.payments[index].scheduledPaymentType,
                          ),
                          payload: {
                            scheduledPaymentType:
                              formik.values.payments[index]
                                .scheduledPaymentType,
                          },
                        }
                      : null
                  }
                  onSelect={(option) =>
                    handleSelectScheduledPaymentType(index, option)
                  }
                  onDelete={() => handleDeleteScheduledPaymentType(index)}
                />
                <DatePickerUI
                  name={`payments[${index}].date`}
                  value={formik.values.payments[index].date}
                  onChange={(date) =>
                    formik.setFieldValue(`payments[${index}].date`, date)
                  }
                />
                <Input
                  placeholder='Сумма платежа'
                  type='number'
                  step='0.01'
                  name={`payments[${index}].payment`}
                  value={formik.values.payments[index].payment}
                  onChange={formik.handleChange}
                />
              </div>
              <button type='button' onClick={() => handleDeletePayment(index)}>
                <XMarkIcon className='text-c-text-primary hover:text-c-danger h-4 w-4' />
              </button>
            </div>
          ))}
          <MiniButton onClick={addNewEmptyPayment}>
            + Добавить платеж
          </MiniButton>
          {formik.errors.payments && formik.touched.payments && (
            <p className='error-message'>
              Проверьте корректность введенных данных
            </p>
          )}
        </div>
        <div className='mt-1 flex flex-col gap-2'>
          <div className='flex flex-col items-end'>
            <Tag>Сумма: {countPayments().toLocaleString('ru-RU')} ₽</Tag>
          </div>
          <Button disabled={formik.values.payments.length === 0} type='submit'>
            Создать
          </Button>
        </div>
      </Form>
    </BootLayout>
  );
};
