import { useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BasicRepresentative, ClientCategory } from '@/__types__/graphql';
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
  IClientCard,
  TClientCard,
} from '@/components/client/client-card/client-card.interface';
import { ClientCard } from '@/components/client/client-card/client-card.ui';
import {
  GET_CLIENT_INDIVIDUAL_MINOR,
  UPDATE_CLIENT_INDIVIDUAL_MINOR,
} from '@/components/client/client-individual-minor/client-individual-minor.gql';
import { IClientIndividualMinor } from '@/components/client/client-individual-minor/client-individual-minor.interface';
import {
  ClientIndividualMinorSchema,
  initialValues,
  validationSchema,
} from '@/components/client/client-individual-minor/client-individual-minor.validation';
import { ClientPassport } from '@/components/client/client-passport/client-passport.ui';
import { TClientPicker } from '@/components/client/client-picker/client-picker.interface';
import { ClientPicker } from '@/components/client/client-picker/client-picker.ui';
import { ClientProperties } from '@/components/client/client-properties/client-properties.ui';
import { NewRepresentative } from '@/components/client/representative/new-representative/new-representative.ui';
import { Representative } from '@/components/client/representative/representative/representative.ui';
import { RepresentativeCard } from '@/components/client/representative/representative-card/representative.ui';

export const ClientIndividualMinor = ({ id }: IClientIndividualMinor) => {
  const [layoutTitle, setLayoutTitle] = useState<string>('');
  const [isMinorRepresentativeModalOpen, setIsMinorRepresentativeModalOpen] =
    useState(false);
  const [minorRepresentatives, setMinorRepresentatives] = useState<
    Omit<IClientCard<TClientCard>, 'onDelete'>[]
  >([]);
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

  const { loading: getClientIndividualMinorLoading } = useQuery(
    GET_CLIENT_INDIVIDUAL_MINOR,
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
          clientIndividualMinorProperties: {
            birthCertificate:
              data.getClient.clientIndividualMinorProperties
                ?.birthCertificate || '',
            dob: data.getClient.clientIndividualMinorProperties?.dob || '',
            snils: data.getClient.clientIndividualMinorProperties?.snils || '',
            clientPassport: {
              code:
                data.getClient.clientIndividualMinorProperties?.clientPassport
                  ?.code || '',
              issued:
                data.getClient.clientIndividualMinorProperties?.clientPassport
                  ?.issued || '',
              number:
                data.getClient.clientIndividualMinorProperties?.clientPassport
                  ?.number || '',
              placeOfBirth:
                data.getClient.clientIndividualMinorProperties?.clientPassport
                  ?.placeOfBirth || '',
              registrationAddress:
                data.getClient.clientIndividualMinorProperties?.clientPassport
                  ?.registrationAddress || '',
            },
            representativeIds:
              data.getClient.clientIndividualMinorProperties?.representatives?.map(
                (representative) => representative.id,
              ) || [],
          },
        });
        setRepresentatives(data.getClient.representatives || []);
        setLayoutTitle(data.getClient.clientProperties.fullName);

        if (
          data.getClient.clientIndividualMinorProperties?.representatives
            ?.length
        ) {
          setMinorRepresentatives(
            data.getClient.clientIndividualMinorProperties?.representatives.map(
              (representative) => ({
                ...representative,
                payload: representative,
              }),
            ),
          );
        }
      },
      onError(error) {
        navigate('/', { replace: true });
        toast.error(error.message);
      },
    },
  );

  const [updateClient, { loading: updateClientLoading }] = useMutation(
    UPDATE_CLIENT_INDIVIDUAL_MINOR,
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

  const formik = useFormik<ClientIndividualMinorSchema>({
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

  const handleSubmitClientPicker = (client: TClientPicker) => {
    if (client.clientCategory !== ClientCategory.Individual) {
      toast.error('Представитель должен быть физическим лицом.');
      return;
    }

    formik.setFieldValue('clientIndividualMinorProperties.representativeIds', [
      ...new Set([
        ...formik.values.clientIndividualMinorProperties.representativeIds,
        client.id,
      ]),
    ]);

    setMinorRepresentatives((state) => {
      const clientExists = state.some((c) => c.id === client.id);
      return !clientExists ? [...state, { ...client, payload: client }] : state;
    });

    setIsMinorRepresentativeModalOpen(false);
  };

  const handleDeleteMinorRepresentative = (representative: TClientCard) => {
    formik.setFieldValue(
      'clientIndividualMinorProperties.representativeIds',
      formik.values.clientIndividualMinorProperties.representativeIds.filter(
        (id) => id !== representative.id,
      ),
    );
    setMinorRepresentatives(
      minorRepresentatives.filter((r) => r.id !== representative.id),
    );
  };

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
        title='Выбор представителя'
        isOpen={isMinorRepresentativeModalOpen}
        onClose={() => setIsMinorRepresentativeModalOpen(false)}
      >
        <ClientPicker onSubmit={handleSubmitClientPicker} />
      </Modal>
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
      <BootLayout
        isLoading={getClientIndividualMinorLoading || updateClientLoading}
      >
        <ContentLayout title={layoutTitle}>
          <Toolbar text='Физическое лицо несовершеннолетний'>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Сохранить
            </Button>
          </Toolbar>
          <Container>
            <Form>
              <NamedGroup title='Представители'>
                <CardList onAdd={() => setIsMinorRepresentativeModalOpen(true)}>
                  {minorRepresentatives.map((representative) => (
                    <ClientCard
                      key={representative.id}
                      {...representative}
                      onDelete={() =>
                        handleDeleteMinorRepresentative(representative)
                      }
                    />
                  ))}
                </CardList>
              </NamedGroup>
              <ClientProperties
                values={formik.values.clientProperties}
                onChange={formik.handleChange}
                touched={formik.touched.clientProperties}
                errors={formik.errors.clientProperties}
              />
              <NamedGroup title='Дополнительные данные'>
                <DatePickerUI
                  label='Дата рождения'
                  name='clientIndividualMinorProperties.dob'
                  value={formik.values.clientIndividualMinorProperties.dob}
                  onChange={(date) =>
                    formik.setFieldValue(
                      'clientIndividualMinorProperties.dob',
                      date,
                    )
                  }
                />
                <Input
                  label='СНИЛС'
                  name='clientIndividualMinorProperties.snils'
                  value={formik.values.clientIndividualMinorProperties.snils}
                  onChange={formik.handleChange}
                />
                <Input
                  label='Свидетельство о рождении'
                  name='clientIndividualMinorProperties.birthCertificate'
                  value={
                    formik.values.clientIndividualMinorProperties
                      .birthCertificate
                  }
                  onChange={formik.handleChange}
                />
              </NamedGroup>
              <ClientPassport
                prefix='clientIndividualMinorProperties'
                values={
                  formik.values.clientIndividualMinorProperties.clientPassport
                }
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
