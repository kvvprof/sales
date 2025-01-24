import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BootLayout, Button, Form, IOption, Select } from '@/common';
import { GET_SUBSIDIES } from '@/components/subsidy/subsidy-picker/subsidy-picker.gql';
import {
  ISubsidyPicker,
  TSubsidyPicker,
} from '@/components/subsidy/subsidy-picker/subsidy-picker.interface';
import {
  initialValues,
  SubsidyPickerSchema,
  validationSchema,
} from '@/components/subsidy/subsidy-picker/subsidy-picker.validation';

export const SubsidyPicker = ({ onSubmit }: ISubsidyPicker) => {
  const [subsidyOptions, setSubsidyOptions] = useState<
    IOption<TSubsidyPicker>[]
  >([]);

  const { loading: getSubsidiesLoading } = useQuery(GET_SUBSIDIES, {
    onCompleted(data) {
      setSubsidyOptions(
        data.getSubsidies
          .filter((subsidy) => subsidy.isVisible)
          .map((subsidy) => ({
            name: subsidy.name,
            payload: subsidy,
          })),
      );
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<SubsidyPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.subsidy!);
    },
  });

  const handleSelectSubsidy = ({ payload }: IOption<TSubsidyPicker>) => {
    formik.setFieldValue('subsidy', payload);
  };

  const handleDeleteSubsidy = () => {
    formik.setFieldValue('subsidy', null);
  };

  return (
    <BootLayout isLoading={getSubsidiesLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <Select
          label='Субсидия'
          placeholder='Выберите субсидию'
          options={subsidyOptions}
          error={formik.touched.subsidy ? formik.errors.subsidy : null}
          onSelect={handleSelectSubsidy}
          onDelete={handleDeleteSubsidy}
        />
        <Button type='submit'>Выбрать</Button>
      </Form>
    </BootLayout>
  );
};
