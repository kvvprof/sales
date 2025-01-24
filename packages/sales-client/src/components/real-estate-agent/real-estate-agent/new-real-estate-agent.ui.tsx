import { useMutation } from '@apollo/client';
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
import { CREATE_REAL_ESTATE_AGENT } from '@/components/real-estate-agent/real-estate-agent/real-estate-agent.gql';

export const NewRealEstateAgent = () => {
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState<boolean>(false);
  const [agencies, setAgencies] = useState<TAgencyCard[]>([]);
  const navigate = useNavigate();

  const [createRealEstateAgent, { loading: createRealEstateAgentLoading }] =
    useMutation(CREATE_REAL_ESTATE_AGENT, {
      onCompleted(data) {
        navigate(`/real-estate-agent/${data.createRealEstateAgent.id}`);
        toast.info('Агент создан успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<RealEstateAgentSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      createRealEstateAgent({
        variables: {
          input: normalizePayload(data),
        },
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

  const handleDeleteCard = (id: number) => {
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
      <BootLayout isLoading={createRealEstateAgentLoading}>
        <ContentLayout title='Новый агент'>
          <Toolbar text='Агент по недвижимости'>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Создать
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
                      onDelete={() => handleDeleteCard(agency.id)}
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
