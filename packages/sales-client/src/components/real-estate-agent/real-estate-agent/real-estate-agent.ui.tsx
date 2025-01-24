import { useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  BootLayout,
  Button,
  CardList,
  Container,
  ContentLayout,
  Form,
  Input,
  Modal,
  NamedGroup,
  Toolbar,
  normalizePayload,
} from '@/common';
import { TAgencyCard } from '@/components/agency/agency-card/agency-card.interface';
import { AgencyCard } from '@/components/agency/agency-card/agency-card.ui';
import { AgencyPicker } from '@/components/agency/agency-picker/agency-picker.ui';
import {
  RealEstateAgentSchema,
  initialValues,
  validationSchema,
} from '@/components/real-estate-agent/real-estate-agent/new-real-estate-agent.validation';
import {
  GET_REAL_ESTATE_AGENT,
  UPDATE_REAL_ESTATE_AGENT,
} from '@/components/real-estate-agent/real-estate-agent/real-estate-agent.gql';
import { IRealEstateAgent } from '@/components/real-estate-agent/real-estate-agent/real-estate-agent.interface';

export const RealEstateAgent = ({ id }: IRealEstateAgent) => {
  const [layoutTitle, setLayoutTitle] = useState<string>('');
  const navigate = useNavigate();
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState<boolean>(false);
  const [agencies, setAgencies] = useState<TAgencyCard[]>([]);

  const { loading: getRealEstateAgentLoading } = useQuery(
    GET_REAL_ESTATE_AGENT,
    {
      variables: { input: { id } },
      onCompleted(data) {
        formik.setValues({
          fullName: data.getRealEstateAgent.realEstateAgent.fullName || '',
          phone: data.getRealEstateAgent.realEstateAgent.phone || '',
          oneGtId: data.getRealEstateAgent.realEstateAgent.oneGtId || '',
          agencyIds: data.getRealEstateAgent.agencies.map(({ id }) => id) || [],
        });
        setLayoutTitle(data.getRealEstateAgent.realEstateAgent.fullName);
        setAgencies(
          data.getRealEstateAgent.agencies.map(({ id, name }) => ({
            id,
            name,
          })),
        );
      },
      onError(error) {
        navigate('/', { replace: true });
        toast.error(error.message);
      },
    },
  );

  const [updateRealEstateAgent, { loading: realEstateAgentLoading }] =
    useMutation(UPDATE_REAL_ESTATE_AGENT, {
      onCompleted(data) {
        setLayoutTitle(data.updateRealEstateAgent.fullName);
        toast.info('Агент обновлен успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<RealEstateAgentSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      updateRealEstateAgent({
        variables: { input: normalizePayload({ id, ...data }) },
      });
    },
  });

  const handleSubmitAgencyPicker = (agency: TAgencyCard) => {
    formik.setFieldValue('agencyIds', [
      ...new Set([...formik.values.agencyIds, agency.id]),
    ]);

    setAgencies((state) => {
      const agencyExists = state.some((a) => a.id === agency.id);
      return !agencyExists ? [...state, agency] : state;
    });

    setIsAgencyModalOpen(false);
  };

  const handleDeleteAgencyCard = (id: number) => {
    formik.setFieldValue(
      'agencyIds',
      formik.values.agencyIds.filter((agencyId) => agencyId !== id),
    );
    setAgencies((state) => state.filter((agency) => agency.id !== id));
  };

  return (
    <>
      <Modal
        title='Выбор агентства'
        isOpen={isAgencyModalOpen}
        onClose={() => setIsAgencyModalOpen(false)}
      >
        <AgencyPicker onSubmit={handleSubmitAgencyPicker} />
      </Modal>
      <BootLayout
        isLoading={getRealEstateAgentLoading || realEstateAgentLoading}
      >
        <ContentLayout title={layoutTitle}>
          <Toolbar text='Агент по недвижимости'>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Сохранить
            </Button>
          </Toolbar>
          <Container>
            <Form>
              <NamedGroup title='Данные'>
                <Input
                  label='ФИО'
                  name='fullName'
                  value={formik.values.fullName}
                  error={
                    formik.touched.fullName ? formik.errors.fullName : null
                  }
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Input
                  label='Телефон'
                  name='phone'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <Input
                  label='1GT ID'
                  name='oneGtId'
                  type='number'
                  value={formik.values.oneGtId}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </NamedGroup>
              <NamedGroup title='Агентства'>
                <CardList onAdd={() => setIsAgencyModalOpen(true)}>
                  {agencies.map((agency) => (
                    <AgencyCard
                      key={agency.id}
                      {...agency}
                      onDelete={() => handleDeleteAgencyCard(agency.id)}
                    />
                  ))}
                </CardList>
              </NamedGroup>
            </Form>
          </Container>
        </ContentLayout>
      </BootLayout>
    </>
  );
};
