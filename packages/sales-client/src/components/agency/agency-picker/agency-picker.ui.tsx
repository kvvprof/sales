import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button, DEFAULT_OPTIONS_LIMIT, Form, IOption, Select } from '@/common';
import { TAgencyCard } from '@/components/agency/agency-card/agency-card.interface';
import { GET_AGENCIES } from '@/components/agency/agency-picker/agency-picker.gql';
import { IAgencyPicker } from '@/components/agency/agency-picker/agency-picker.interface';
import {
  AgencyPickerSchema,
  initialValues,
  validationSchema,
} from '@/components/agency/agency-picker/agency-picker.validation';

export const AgencyPicker = ({ onSubmit }: IAgencyPicker) => {
  const [agencyOptions, setAgencyOptions] = useState<IOption<TAgencyCard>[]>(
    [],
  );

  const [getAgencies, { loading }] = useLazyQuery(GET_AGENCIES, {
    onCompleted(data) {
      setAgencyOptions(
        data.getAgencies.agencies.map((agency) => ({
          name: agency.name,
          payload: agency,
        })),
      );
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<AgencyPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.agency!);
    },
  });

  const loadAgencyOptions = (searchValue: string) => {
    getAgencies({
      variables: {
        input: {
          options: {
            limit: DEFAULT_OPTIONS_LIMIT,
            prefix: searchValue,
          },
        },
      },
    });
  };

  const handleSelectAgency = ({ payload }: IOption<TAgencyCard>) => {
    formik.setFieldValue('agency', payload);
  };

  const handleDeleteAgency = () => {
    formik.setFieldValue('agency', null);
  };

  return (
    <Form handleSubmit={formik.handleSubmit}>
      <Select
        label='Агентство'
        placeholder='Поиск по названию или ИНН'
        options={agencyOptions}
        isLoading={loading}
        error={formik.touched.agency ? formik.errors.agency : null}
        loadOptions={loadAgencyOptions}
        onSelect={handleSelectAgency}
        onDelete={handleDeleteAgency}
      />
      <Button type='submit'>Выбрать</Button>
    </Form>
  );
};
