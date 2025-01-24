import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BootLayout, Button, Form, IOption, Select } from '@/common';
import { GET_OBJECTS } from '@/components/object/object-picker/object-picker.gql';
import {
  IObjectPicker,
  TObjectPicker,
} from '@/components/object/object-picker/object-picker.interface';
import {
  ObjectPickerSchema,
  initialValues,
  validationSchema,
} from '@/components/object/object-picker/object-picker.validation';

export const ObjectPicker = ({ onSubmit }: IObjectPicker) => {
  const [objectOptions, setObjectOptions] = useState<IOption<TObjectPicker>[]>(
    [],
  );

  const { loading: getObjectLoading } = useQuery(GET_OBJECTS, {
    onCompleted(data) {
      setObjectOptions(
        data.getObjects.map((object) => ({
          name: object.name,
          payload: object,
        })),
      );
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<ObjectPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.object!);
    },
  });

  const handleSelectObject = ({ payload }: IOption<TObjectPicker>) => {
    formik.setFieldValue('object', payload);
  };

  const handleDeleteObject = () => {
    formik.setFieldValue('object', null);
  };

  return (
    <BootLayout isLoading={getObjectLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <Select
          label='Объект'
          placeholder='Выберите объект'
          options={objectOptions}
          error={formik.touched.object ? formik.errors.object : null}
          onSelect={handleSelectObject}
          onDelete={handleDeleteObject}
        />
        <Button type='submit'>Выбрать</Button>
      </Form>
    </BootLayout>
  );
};
