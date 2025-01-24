import { useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BasicRepresentative } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  CardList,
  Container,
  ContentLayout,
  DatePickerUI,
  Form,
  Input,
  Modal,
  NamedGroup,
  Toolbar,
  normalizePayload,
} from '@/common';
import {
  GET_CLIENT_INDIVIDUAL,
  UPDATE_CLIENT_INDIVIDUAL,
} from '@/components/client/client-individual/client-individual.gql';
import { IClientIndividual } from '@/components/client/client-individual/client-individual.interface';
import {
  ClientIndividualSchema,
  initialValues,
  validationSchema,
} from '@/components/client/client-individual/client-individual.validation';
import { ClientPassport } from '@/components/client/client-passport/client-passport.ui';
import { ClientProperties } from '@/components/client/client-properties/client-properties.ui';
import { NewRepresentative } from '@/components/client/representative/new-representative/new-representative.ui';
import { Representative } from '@/components/client/representative/representative/representative.ui';
import { RepresentativeCard } from '@/components/client/representative/representative-card/representative.ui';

export const ClientIndividual = ({ id }: IClientIndividual) => {
  const [layoutTitle, setLayoutTitle] = useState<string>('');
  const navigate = useNavigate();
  const [representatives, setRepresentatives] = useState<BasicRepresentative[]>(
    [],
  );
  const [isNewRepresentativeModalOpen, setIsNewRepresentativeModalOpen] =
    useState<boolean>(false);
  const [isEditRepresentativeModalOpen, setIsEditRepresentativeModalOpen] =
    useState<boolean>(false);
  const [currentRepresentative, setCurrentRepresentative] =
    useState<BasicRepresentative | null>(null);

  const { loading: getClientIndividualLoading } = useQuery(
    GET_CLIENT_INDIVIDUAL,
    {
      variables: { input: { id } },
      onCompleted(data) {
        formik.setValues({
          clientProperties: {
            fullName: data.getClient.clientProperties.fullName || '',
            address: data.getClient.clientProperties.address || '',
            email: data.getClient.clientProperties.email || '',
            inn: data.getClient.clientProperties.inn || '',
            phone: data.getClient.clientProperties.phone || '',
          },
          clientIndividualProperties: {
            dob: data.getClient.clientIndividualProperties?.dob || '',
            snils: data.getClient.clientIndividualProperties?.snils || '',
            clientPassport: {
              code:
                data.getClient.clientIndividualProperties?.clientPassport
                  ?.code || '',
              issued:
                data.getClient.clientIndividualProperties?.clientPassport
                  ?.issued || '',
              number:
                data.getClient.clientIndividualProperties?.clientPassport
                  ?.number || '',
              placeOfBirth:
                data.getClient.clientIndividualProperties?.clientPassport
                  ?.placeOfBirth || '',
              registrationAddress:
                data.getClient.clientIndividualProperties?.clientPassport
                  ?.registrationAddress || '',
            },
          },
        });
        setRepresentatives(data.getClient.representatives || []);
        setLayoutTitle(data.getClient.clientProperties.fullName);
      },
      onError(error) {
        navigate('/', { replace: true });
        toast.error(error.message);
      },
    },
  );

  const [updateClient, { loading: updateClientLoading }] = useMutation(
    UPDATE_CLIENT_INDIVIDUAL,
    {
      onCompleted(data) {
        setLayoutTitle(data.updateClient.fullName);
        toast.info('Клиент обновлен успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const formik = useFormik<ClientIndividualSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      updateClient({
        variables: {
          input: normalizePayload({
            ...data,
            clientProperties: { ...data.clientProperties, id },
          }),
        },
      });
    },
  });

  const handleSubmitRepresentative = (representative: BasicRepresentative) => {
    const existentRepresentative = representatives.find(
      ({ id }) => id === representative.id,
    );

    if (!existentRepresentative) {
      setRepresentatives([...representatives, representative]);
    }

    setIsNewRepresentativeModalOpen(false);
  };

  const handleUpdateRepresentative = (representative: BasicRepresentative) => {
    setRepresentatives(
      representatives.map((r) =>
        r.id === representative.id ? representative : r,
      ),
    );

    setIsEditRepresentativeModalOpen(false);
  };

  const handleClickRepresentative = (representative: BasicRepresentative) => {
    setCurrentRepresentative(representative);
    setIsEditRepresentativeModalOpen(true);
  };

  return (
    <>
      <Modal
        title='Создание представителя'
        isOpen={isNewRepresentativeModalOpen}
        onClose={() => setIsNewRepresentativeModalOpen(false)}
      >
        <NewRepresentative
          clientId={id}
          onSubmit={handleSubmitRepresentative}
        />
      </Modal>
      <Modal
        title='Редактирование представителя'
        isOpen={isEditRepresentativeModalOpen}
        onClose={() => setIsEditRepresentativeModalOpen(false)}
      >
        {currentRepresentative && (
          <Representative
            representative={currentRepresentative}
            onSubmit={handleUpdateRepresentative}
          />
        )}
      </Modal>
      <BootLayout isLoading={getClientIndividualLoading || updateClientLoading}>
        <ContentLayout title={layoutTitle}>
          <Toolbar text='Физическое лицо'>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Сохранить
            </Button>
          </Toolbar>
          <Container>
            <Form>
              <ClientProperties
                values={formik.values.clientProperties}
                touched={formik.touched.clientProperties}
                errors={formik.errors.clientProperties}
                onChange={formik.handleChange}
              />
              <NamedGroup title='Дополнительные данные'>
                <DatePickerUI
                  label='Дата рождения'
                  name='clientIndividualProperties.dob'
                  value={formik.values.clientIndividualProperties.dob}
                  onChange={(date) =>
                    formik.setFieldValue('clientIndividualProperties.dob', date)
                  }
                />
                <Input
                  label='СНИЛС'
                  name='clientIndividualProperties.snils'
                  value={formik.values.clientIndividualProperties.snils}
                  onChange={formik.handleChange}
                />
              </NamedGroup>
              <ClientPassport
                prefix='clientIndividualProperties'
                values={formik.values.clientIndividualProperties.clientPassport}
                onChange={formik.handleChange}
              />
              <NamedGroup title='Представители по доверенности'>
                <CardList onAdd={() => setIsNewRepresentativeModalOpen(true)}>
                  {representatives.map((representative) => (
                    <RepresentativeCard
                      key={representative.id}
                      onClick={() => handleClickRepresentative(representative)}
                      {...representative}
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
