import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button, DEFAULT_OPTIONS_LIMIT, Form, IOption, Select } from '@/common';
import { GET_CLIENTS } from '@/components/client/client-picker/client-picker.gql';
import {
  IClientPicker,
  TClientPicker,
} from '@/components/client/client-picker/client-picker.interface';
import {
  ClientPickerSchema,
  initialValues,
  validationSchema,
} from '@/components/client/client-picker/client-picker.validation';

export const ClientPicker = ({ onSubmit }: IClientPicker) => {
  const [clientOptions, setClientOptions] = useState<IOption<TClientPicker>[]>(
    [],
  );

  const [getClients, { loading }] = useLazyQuery(GET_CLIENTS, {
    onCompleted(data) {
      setClientOptions(
        data.getClients.clients.map((client) => ({
          name: client.clientProperties.fullName,
          payload: client.clientProperties,
        })),
      );
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<ClientPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.client!);
    },
  });

  const loadClientOptions = (searchValue: string) => {
    getClients({
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

  const handleSelectClient = ({ payload }: IOption<TClientPicker>) => {
    formik.setFieldValue('client', payload);
  };

  const handleDeleteClient = () => {
    formik.setFieldValue('client', null);
  };

  return (
    <Form handleSubmit={formik.handleSubmit}>
      <Select
        label='Клиент'
        placeholder='Поиск по названию'
        options={clientOptions}
        isLoading={loading}
        error={formik.errors.client}
        loadOptions={loadClientOptions}
        onSelect={handleSelectClient}
        onDelete={handleDeleteClient}
      />
      <Button type='submit'>Выбрать</Button>
    </Form>
  );
};
