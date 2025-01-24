import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ClientCategory } from '@/__types__/graphql';
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
import { CREATE_CLIENT_INDIVIDUAL_MINOR } from '@/components/client/client-individual-minor/client-individual-minor.gql';
import {
  ClientIndividualMinorSchema,
  initialValues,
  validationSchema,
} from '@/components/client/client-individual-minor/client-individual-minor.validation';
import { ClientPassport } from '@/components/client/client-passport/client-passport.ui';
import { TClientPicker } from '@/components/client/client-picker/client-picker.interface';
import { ClientPicker } from '@/components/client/client-picker/client-picker.ui';
import { ClientProperties } from '@/components/client/client-properties/client-properties.ui';

export const NewClientIndividualMinor = () => {
  const navigate = useNavigate();
  const [isRepresentativeModalOpen, setIsRepresentativeModalOpen] =
    useState(false);
  const [representatives, setRepresentatives] = useState<
    Omit<IClientCard<TClientPicker>, 'onDelete'>[]
  >([]);

  const [createClient, { loading: createClientLoading }] = useMutation(
    CREATE_CLIENT_INDIVIDUAL_MINOR,
    {
      onCompleted(data) {
        navigate(`/client/individual-minor/${data.createClient.id}`);
        toast.info('Клиент создан успешно.');
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
      createClient({
        variables: {
          input: normalizePayload({
            clientProperties: {
              ...data.clientProperties,
              clientCategory: ClientCategory.IndividualMinor,
            },
            clientIndividualMinorProperties:
              data.clientIndividualMinorProperties,
          }),
        },
      });
    },
  });

  const handleDeleteRepresentative = (representative: TClientCard) => {
    formik.setFieldValue(
      'clientIndividualMinorProperties.representativeIds',
      formik.values.clientIndividualMinorProperties.representativeIds.filter(
        (id) => id !== representative.id,
      ),
    );
    setRepresentatives(
      representatives.filter((r) => r.id !== representative.id),
    );
  };

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

    setRepresentatives((state) => {
      const clientExists = state.some((c) => c.id === client.id);
      return !clientExists ? [...state, { ...client, payload: client }] : state;
    });

    setIsRepresentativeModalOpen(false);
  };

  return (
    <>
      <Modal
        title='Выбор представителя'
        isOpen={isRepresentativeModalOpen}
        onClose={() => setIsRepresentativeModalOpen(false)}
      >
        <ClientPicker onSubmit={handleSubmitClientPicker} />
      </Modal>
      <BootLayout isLoading={createClientLoading}>
        <ContentLayout title='Новый клиент'>
          <Toolbar text='Физическое лицо несовершеннолетний'>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Создать
            </Button>
          </Toolbar>
          <Container>
            <Form>
              <NamedGroup title='Представители'>
                <CardList onAdd={() => setIsRepresentativeModalOpen(true)}>
                  {representatives.map((representative) => (
                    <ClientCard
                      key={representative.id}
                      {...representative}
                      onDelete={() =>
                        handleDeleteRepresentative(representative)
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
            </Form>
          </Container>
        </ContentLayout>
      </BootLayout>
    </>
  );
};
