import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { Button, DEFAULT_OPTIONS_LIMIT, Form, IOption, Select } from '@/common';
import { GET_REAL_ESTATE_AGENTS } from '@/components/real-estate-agent/real-estate-agent-picker/real-estate-agent-picker.gql';
import {
  IRealEstateAgentPicker,
  TRealEstateAgentPicker,
} from '@/components/real-estate-agent/real-estate-agent-picker/real-estate-agent-picker.interface';
import {
  RealEstateAgentPickerSchema,
  validationSchema,
  initialValues,
} from '@/components/real-estate-agent/real-estate-agent-picker/real-estate-agent-picker.validation';

export const RealEstateAgentPicker = ({ onSubmit }: IRealEstateAgentPicker) => {
  const [realEstateAgentOptions, setRealEstateAgentOptions] = useState<
    IOption<TRealEstateAgentPicker>[]
  >([]);

  const [getRealEstateAgents, { loading }] = useLazyQuery(
    GET_REAL_ESTATE_AGENTS,
    {
      onCompleted(data) {
        setRealEstateAgentOptions(
          data.getRealEstateAgents.realEstateAgents.map(
            ({ realEstateAgent }) => ({
              name: realEstateAgent.fullName,
              payload: realEstateAgent,
            }),
          ),
        );
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const formik = useFormik<RealEstateAgentPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.realEstateAgent!);
    },
  });

  const loadRealEstateAgentOptions = (searchValue: string) => {
    getRealEstateAgents({
      variables: {
        input: {
          options: { limit: DEFAULT_OPTIONS_LIMIT, prefix: searchValue },
        },
      },
    });
  };

  const handleSelectRealEstateAgent = ({
    payload,
  }: IOption<TRealEstateAgentPicker>) => {
    formik.setFieldValue('realEstateAgent', payload);
  };

  const handleDeleteRealEstateAgent = () => {
    formik.setFieldValue('realEstateAgent', null);
  };

  return (
    <Form handleSubmit={formik.handleSubmit}>
      <Select
        label='Агент по недвижимости'
        placeholder='Поиск по названию'
        isLoading={loading}
        options={realEstateAgentOptions}
        error={
          formik.touched.realEstateAgent ? formik.errors.realEstateAgent : null
        }
        loadOptions={loadRealEstateAgentOptions}
        onSelect={handleSelectRealEstateAgent}
        onDelete={handleDeleteRealEstateAgent}
      />
      <Button type='submit'>Выбрать</Button>
    </Form>
  );
};
