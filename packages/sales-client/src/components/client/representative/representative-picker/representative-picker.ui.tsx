import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicRepresentative } from '@/__types__/graphql';
import { Button, Form, IOption, Select } from '@/common';
import { GET_REPRESENTATIVES_BY_CLIENT_IDS } from '@/components/client/representative/representative-picker/representative-picker.gql';
import { IRepresentativePicker } from '@/components/client/representative/representative-picker/representative-picker.interface';
import {
  initialValues,
  RepresentativePickerSchema,
  validationSchema,
} from '@/components/client/representative/representative-picker/representative-picker.validation';

export const RepresentativePicker = ({
  clientIds,
  onSubmit,
}: IRepresentativePicker) => {
  const [representativeOptions, setRepresentativeOptions] = useState<
    IOption<BasicRepresentative>[]
  >([]);

  const { loading } = useQuery(GET_REPRESENTATIVES_BY_CLIENT_IDS, {
    variables: { input: { clientIds } },
    onCompleted(data) {
      setRepresentativeOptions(
        data.getRepresentativesByClientIds.map(
          ({ representative, client }) => ({
            name: `${representative.fullName} (${client.fullName})`,
            payload: { ...representative, clientFullName: client.fullName },
          }),
        ),
      );
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<RepresentativePickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.representative!);
    },
  });

  const handleSelectClient = ({ payload }: IOption<BasicRepresentative>) => {
    formik.setFieldValue('representative', payload);
  };

  const handleDeleteClient = () => {
    formik.setFieldValue('representative', null);
  };

  return (
    <Form handleSubmit={formik.handleSubmit}>
      <Select
        label='Представитель'
        placeholder='Выберите представителя'
        options={representativeOptions}
        isLoading={loading}
        error={formik.errors.representative}
        onSelect={handleSelectClient}
        onDelete={handleDeleteClient}
      />
      <Button type='submit'>Выбрать</Button>
    </Form>
  );
};
