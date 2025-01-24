import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import {
  BootLayout,
  Button,
  DatePickerUI,
  Form,
  Input,
  normalizePayload,
} from '@/common';
import { UPDATE_REPRESENTATIVE } from '@/components/client/representative/representative/representative.gql';
import { IRepresentative } from '@/components/client/representative/representative/representative.interface';
import {
  RepresentativeSchema,
  initialValues,
  validationSchema,
} from '@/components/client/representative/representative/representative.validation';

export const Representative = ({
  representative,
  onSubmit,
}: IRepresentative) => {
  const [updateRepresentative, { loading: updateRepresentativeLoading }] =
    useMutation(UPDATE_REPRESENTATIVE, {
      onCompleted(data) {
        onSubmit?.(data.updateRepresentative);
        toast.info('Представитель обновлен успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<RepresentativeSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      updateRepresentative({
        variables: {
          input: normalizePayload({ ...data, id: representative.id }),
        },
      });
    },
  });

  useEffect(() => {
    formik.setValues({
      fullName: representative.fullName,
      attorneyNumber: representative.attorneyNumber || '',
      attorneyDate: representative.attorneyDate || '',
      authorizedBy: representative.authorizedBy || '',
      authorizedRole: representative.authorizedRole || '',
    });
  }, []);

  return (
    <BootLayout isLoading={updateRepresentativeLoading}>
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
        <Button type='submit'>Сохранить</Button>
      </Form>
    </BootLayout>
  );
};
