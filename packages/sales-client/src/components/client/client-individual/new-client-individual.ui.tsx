import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ClientCategory } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  Container,
  ContentLayout,
  DatePickerUI,
  Form,
  Input,
  NamedGroup,
  Toolbar,
  normalizePayload,
} from '@/common';
import { CREATE_CLIENT_INDIVIDUAL } from '@/components/client/client-individual/client-individual.gql';
import {
  ClientIndividualSchema,
  initialValues,
  validationSchema,
} from '@/components/client/client-individual/client-individual.validation';
import { ClientPassport } from '@/components/client/client-passport/client-passport.ui';
import { ClientProperties } from '@/components/client/client-properties/client-properties.ui';

export const NewClientIndividual = () => {
  const navigate = useNavigate();

  const [createClient, { loading: createClientLoading }] = useMutation(
    CREATE_CLIENT_INDIVIDUAL,
    {
      onCompleted(data) {
        navigate(`/client/individual/${data.createClient.id}`);
        toast.info('Клиент создан успешно.');
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
      createClient({
        variables: {
          input: normalizePayload({
            clientProperties: {
              ...data.clientProperties,
              clientCategory: ClientCategory.Individual,
            },
            clientIndividualProperties: data.clientIndividualProperties,
          }),
        },
      });
    },
  });

  return (
    <BootLayout isLoading={createClientLoading}>
      <ContentLayout title='Новый клиент'>
        <Toolbar text='Физическое лицо'>
          <Button type='submit' onClick={() => formik.handleSubmit()}>
            Создать
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
          </Form>
        </Container>
      </ContentLayout>
    </BootLayout>
  );
};
