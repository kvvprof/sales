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
  Form,
  Input,
  NamedGroup,
  Toolbar,
  normalizePayload,
} from '@/common';
import { CREATE_CLIENT_ENTITY } from '@/components/client/client-entity/client-entity.gql';
import {
  initialValues,
  validationSchema,
  ClientEntitySchema,
} from '@/components/client/client-entity/client-entity.validation';
import { ClientProperties } from '@/components/client/client-properties/client-properties.ui';

export const NewClientEntity = () => {
  const navigate = useNavigate();

  const [createClient, { loading: createClientLoading }] = useMutation(
    CREATE_CLIENT_ENTITY,
    {
      onCompleted(data) {
        navigate(`/client/entity/${data.createClient.id}`);
        toast.info('Клиент создан успешно.');
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
      createClient({
        variables: {
          input: normalizePayload({
            clientProperties: {
              ...data.clientProperties,
              clientCategory: ClientCategory.Entity,
            },
            clientEntityProperties: data.clientEntityProperties,
          }),
        },
      });
    },
  });

  return (
    <BootLayout isLoading={createClientLoading}>
      <ContentLayout title='Новый клиент'>
        <Toolbar text='Юридическое лицо'>
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
              <Input
                label='КПП'
                name='clientEntityProperties.kpp'
                value={formik.values.clientEntityProperties.kpp}
                onChange={formik.handleChange}
              />
            </NamedGroup>
          </Form>
        </Container>
      </ContentLayout>
    </BootLayout>
  );
};
