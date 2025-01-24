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
  Form,
  Input,
  Modal,
  NamedGroup,
  Toolbar,
  normalizePayload,
} from '@/common';
import {
  GET_CLIENT_ENTITY,
  UPDATE_CLIENT_ENTITY,
} from '@/components/client/client-entity/client-entity.gql';
import { IClientEntity } from '@/components/client/client-entity/client-entity.interface';
import {
  ClientEntitySchema,
  initialValues,
  validationSchema,
} from '@/components/client/client-entity/client-entity.validation';
import { ClientProperties } from '@/components/client/client-properties/client-properties.ui';
import { NewRepresentative } from '@/components/client/representative/new-representative/new-representative.ui';
import { Representative } from '@/components/client/representative/representative/representative.ui';
import { RepresentativeCard } from '@/components/client/representative/representative-card/representative.ui';

export const ClientEntity = ({ id }: IClientEntity) => {
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

  const { loading: getClientLoading } = useQuery(GET_CLIENT_ENTITY, {
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
        clientEntityProperties: {
          kpp: data.getClient.clientEntityProperties?.kpp || '',
        },
      });
      setRepresentatives(data.getClient.representatives || []);
      setLayoutTitle(data.getClient.clientProperties.fullName);
    },
    onError(error) {
      navigate('/', { replace: true });
      toast.error(error.message);
    },
  });

  const [updateClient, { loading: updateClientLoading }] = useMutation(
    UPDATE_CLIENT_ENTITY,
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

  const formik = useFormik<ClientEntitySchema>({
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
      <BootLayout isLoading={getClientLoading || updateClientLoading}>
        <ContentLayout title={layoutTitle}>
          <Toolbar text='Юридическое лицо'>
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
                <Input
                  label='КПП'
                  name='clientEntityProperties.kpp'
                  value={formik.values.clientEntityProperties.kpp}
                  onChange={formik.handleChange}
                />
              </NamedGroup>
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
