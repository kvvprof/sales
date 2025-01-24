import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicAgency } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  AGENCY_CONTRACT_TYPE_MAPPING,
  DEFAULT_OPTIONS_LIMIT,
  Form,
  IOption,
  Select,
} from '@/common';
import { TAgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.interface';
import {
  GET_AGENCIES,
  GET_AGENCY_CONTRACTS,
} from '@/components/agency-contract/agency-contract-picker/agency-contract-picker.gql';
import { IAgencyContractPicker } from '@/components/agency-contract/agency-contract-picker/agency-contract-picker.interface';
import {
  AgencyContractPickerSchema,
  validationSchema,
  initialValues,
} from '@/components/agency-contract/agency-contract-picker/agency-contract-picker.validation';

export const AgencyContractPicker = ({
  objectId,
  onSubmit,
}: IAgencyContractPicker) => {
  const [agencyOptions, setAgencyOptions] = useState<IOption<BasicAgency>[]>(
    [],
  );
  const [agencyContractOptions, setAgencyContractOptions] = useState<
    IOption<TAgencyContractCard>[]
  >([]);

  const [getAgencies, { loading: getAgenciesLoading }] = useLazyQuery(
    GET_AGENCIES,
    {
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
    },
  );

  const [getAgencyContracts, { loading: getAgencyContractsLoading }] =
    useLazyQuery(GET_AGENCY_CONTRACTS, {
      onCompleted(data) {
        setAgencyContractOptions(
          data.getAgencyContracts.map((agencyContract) => ({
            name: `${AGENCY_CONTRACT_TYPE_MAPPING[agencyContract.agencyContractProperties.agencyContractType]} - ${agencyContract.object.name} - ${agencyContract.agencyContractProperties.number}`,
            payload: agencyContract,
          })),
        );
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<AgencyContractPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.agencyContract!);
    },
  });

  const loadAgencyOptions = (searchValue: string) => {
    getAgencies({
      variables: {
        input: {
          options: { limit: DEFAULT_OPTIONS_LIMIT, prefix: searchValue },
        },
      },
    });
  };

  const handleSelectAgency = ({ payload }: IOption<BasicAgency>) => {
    formik.setFieldValue('agency', payload);
    getAgencyContracts({
      variables: { input: { agencyId: payload?.id, objectId } },
    });
  };

  const handleDeleteAgency = () => {
    formik.setFieldValue('agency', null);
    formik.setFieldValue('agencyContract', null);
  };

  const handleSelectAgencyContract = ({
    payload,
  }: IOption<TAgencyContractCard>) => {
    formik.setFieldValue('agencyContract', payload);
  };

  const handleDeleteAgencyContract = () => {
    formik.setFieldValue('agencyContract', null);
  };

  return (
    <Form handleSubmit={formik.handleSubmit}>
      <Select
        label='Агентство'
        placeholder='Поиск по названию или ИНН'
        options={agencyOptions}
        isLoading={getAgenciesLoading}
        error={formik.touched.agency ? formik.errors.agency : null}
        onSelect={handleSelectAgency}
        onDelete={handleDeleteAgency}
        loadOptions={loadAgencyOptions}
      />

      {formik.values.agency && (
        <BootLayout isLoading={getAgencyContractsLoading}>
          <Select
            label='Контракт агентства'
            placeholder='Выберите контракт агентства'
            options={agencyContractOptions}
            error={
              formik.touched.agencyContract
                ? formik.errors.agencyContract
                : null
            }
            onSelect={handleSelectAgencyContract}
            onDelete={handleDeleteAgencyContract}
          />
        </BootLayout>
      )}
      <Button type='submit'>Выбрать</Button>
    </Form>
  );
};
