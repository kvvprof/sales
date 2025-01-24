import { useLazyQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CommonContractor } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  Container,
  ContentLayout,
  Form,
  JSONView,
  IOption,
  Select,
  Toolbar,
  normalizePayload,
  NamedGroup,
  DEFAULT_OPTIONS_LIMIT,
} from '@/common';
import {
  GET_CONTRACTORS,
  CREATE_AGENCY,
} from '@/components/agency/new-agency/new-agency.gql';
import {
  NewAgencySchema,
  validationSchema,
  initialValues,
} from '@/components/agency/new-agency/new-agency.validation';

export const NewAgency = () => {
  const [agencyOptions, setAgencyOptions] = useState<
    IOption<CommonContractor>[]
  >([]);
  const [currentContractor, setCurrentContractor] =
    useState<CommonContractor | null>(null);
  const navigate = useNavigate();

  const [getContractorsInCommon, { loading: getCommonContractorsLoading }] =
    useLazyQuery(GET_CONTRACTORS, {
      onCompleted(data) {
        setAgencyOptions(
          data.getCommonContractors.contractors.map((contractor) => ({
            name: contractor.contractor.name,
            payload: contractor,
          })),
        );
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const [createAgency, { loading: createAgencyLoading }] = useMutation(
    CREATE_AGENCY,
    {
      onCompleted(data) {
        navigate(`/agency/${data.createAgency.id}`);
        toast.info('Агентство создано успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const formik = useFormik<NewAgencySchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      createAgency({
        variables: {
          input: normalizePayload(data.agency!),
        },
      });
    },
  });

  const loadAgencyOptions = (searchValue: string) => {
    getContractorsInCommon({
      variables: {
        input: {
          options: { limit: DEFAULT_OPTIONS_LIMIT, prefix: searchValue },
        },
      },
    });
  };

  const handleSelectAgency = ({ payload }: IOption<CommonContractor>) => {
    setCurrentContractor(payload!);

    formik.setFieldValue('agency', {
      name: payload!.contractor.name,
      inn: payload!.contractor.inn,
      commonDbContractorsId: payload!.contractor.id,
    });
  };

  const handleDeleteAgency = () => {
    formik.setFieldValue('agency', null);
  };

  return (
    <BootLayout isLoading={createAgencyLoading}>
      <ContentLayout title='Новое агентство'>
        <Toolbar text='Заполните данные и нажмите Создать'>
          <Button type='submit' onClick={() => formik.handleSubmit()}>
            Создать
          </Button>
        </Toolbar>
        <Container>
          <Form>
            <NamedGroup title='Данные'>
              <Select
                label='Агентство'
                placeholder='Поиск в общей базе по ИНН'
                options={agencyOptions}
                isLoading={getCommonContractorsLoading}
                error={formik.touched.agency ? formik.errors.agency : null}
                loadOptions={loadAgencyOptions}
                onSelect={handleSelectAgency}
                onDelete={handleDeleteAgency}
              />
              {formik.values.agency && <JSONView data={currentContractor} />}
            </NamedGroup>
          </Form>
        </Container>
      </ContentLayout>
    </BootLayout>
  );
};
