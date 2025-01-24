import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import {
  BootLayout,
  Button,
  DatePickerUI,
  Form,
  Input,
  normalizePayload,
} from '@/common';
import { CREATE_REPRESENTATIVE } from '@/components/client/representative/new-representative/new-representative.gql';
import { INewRepresentative } from '@/components/client/representative/new-representative/new-representative.interface';
import {
  NewRepresentativeSchema,
  initialValues,
  validationSchema,
} from '@/components/client/representative/new-representative/new-representative.validation';

export const NewRepresentative = ({
  clientId,
  onSubmit,
}: INewRepresentative) => {
  const [createRepresentative, { loading: createRepresentativeLoading }] =
    useMutation(CREATE_REPRESENTATIVE, {
      onCompleted(data) {
        onSubmit?.(data.createRepresentative);
        toast.info('Представитель создан успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<NewRepresentativeSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      createRepresentative({
        variables: {
          input: normalizePayload({ clientId, ...data }),
        },
      });
    },
  });

  return (
    <BootLayout isLoading={createRepresentativeLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <Input
          label='ФИО'
          name='fullName'
          value={formik.values.fullName}
          error={formik.touched?.fullName ? formik.errors?.fullName : null}
          onChange={formik.handleChange}
        />
        <Input
          label='Номер доверенности'
          name='attorneyNumber'
          value={formik.values.attorneyNumber}
          onChange={formik.handleChange}
        />
        <DatePickerUI
          label='Дата доверенности'
          name='attorneyDate'
          value={formik.values.attorneyDate}
          onChange={(date) => formik.setFieldValue('attorneyDate', date)}
        />
        <Input
          label='Кем удостоверена'
          name='authorizedBy'
          value={formik.values.authorizedBy}
          onChange={formik.handleChange}
        />
        <Input
          label='Должность удостоверителя'
          name='authorizedRole'
          value={formik.values.authorizedRole}
          onChange={formik.handleChange}
        />
        <Button type='submit'>Создать</Button>
      </Form>
    </BootLayout>
  );
};
