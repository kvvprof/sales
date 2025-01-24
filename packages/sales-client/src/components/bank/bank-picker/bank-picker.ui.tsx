import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BootLayout, Button, Form, IOption, Select } from '@/common';
import { GET_BANKS } from '@/components/bank/bank-picker/bank-picker.gql';
import {
  IBankPicker,
  TBankPicker,
} from '@/components/bank/bank-picker/bank-picker.interface';
import {
  BankPickerSchema,
  initialValues,
  validationSchema,
} from '@/components/bank/bank-picker/bank-picker.validation';

export const BankPicker = ({ onSubmit }: IBankPicker) => {
  const [bankOptions, setBankOptions] = useState<IOption<TBankPicker>[]>([]);

  const { loading: getBanksLoading } = useQuery(GET_BANKS, {
    onCompleted(data) {
      setBankOptions(
        data.getBanks
          .filter((bank) => bank.isVisible)
          .map((bank) => ({
            name: bank.name,
            payload: bank,
          })),
      );
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<BankPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.bank!);
    },
  });

  const handleSelectBank = ({ payload }: IOption<TBankPicker>) => {
    formik.setFieldValue('bank', payload);
  };

  const handleDeleteBank = () => {
    formik.setFieldValue('bank', null);
  };

  return (
    <BootLayout isLoading={getBanksLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <Select
          label='Банк'
          placeholder='Выберите банк'
          options={bankOptions}
          error={formik.touched.bank ? formik.errors.bank : null}
          onSelect={handleSelectBank}
          onDelete={handleDeleteBank}
        />
        <Button type='submit'>Выбрать</Button>
      </Form>
    </BootLayout>
  );
};
