import { useMutation } from '@apollo/client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import {
  BootLayout,
  Button,
  DatePickerUI,
  Form,
  Input,
  MiniButton,
  Tag,
  normalizePayload,
} from '@/common';
import { CREATE_ACTUAL_PAYMENTS } from '@/components/payment-schedule/new-actual-payments/new-actual-payments.gql';
import { INewActualPayments } from '@/components/payment-schedule/new-actual-payments/new-actual-payments.interface';
import {
  NewActualPaymentsSchema,
  initialValues,
  validationSchema,
} from '@/components/payment-schedule/new-actual-payments/new-actual-payments.validation';

export const NewActualPayments = ({
  clientContractId,
  onSubmit,
}: INewActualPayments) => {
  const [createActualPayments, { loading: createActualPaymentsLoading }] =
    useMutation(CREATE_ACTUAL_PAYMENTS, {
      onCompleted() {
        toast.info('Фактические платежи созданы успешно.');
        onSubmit();
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<NewActualPaymentsSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      const input = data.payments.map((payment) =>
        normalizePayload({
          ...payment,
          clientContractId,
        }),
      );

      createActualPayments({ variables: { input } });
    },
  });

  const handleDeletePayment = (index: number) => {
    formik.setFieldValue(
      'payments',
      formik.values.payments.filter((_, i) => i !== index),
    );
  };

  const addNewEmptyPayment = () => {
    formik.setFieldValue('payments', [
      ...formik.values.payments,
      { date: '', payment: 0 },
    ]);
  };

  const countPayments = () => {
    return formik.values.payments.reduce(
      (acc, { payment }) => acc + payment,
      0,
    );
  };

  return (
    <BootLayout isLoading={createActualPaymentsLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <div className='flex flex-col items-center gap-4'>
          {formik.values.payments.map((_, index) => (
            <div className='flex w-full gap-1' key={index}>
              <div className='flex flex-1 gap-2'>
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
