import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BootLayout, Button, Form, IOption, Select } from '@/common';
import { GET_ENTITIES } from '@/components/entity/entity-picker/entity-picker.gql';
import {
  IEntityPicker,
  TEntityPicker,
} from '@/components/entity/entity-picker/entity-picker.interface';
import {
  EntityPickerSchema,
  initialValues,
  validationSchema,
} from '@/components/entity/entity-picker/entity-picker.validation';

export const EntityPicker = ({ objectId, onSubmit }: IEntityPicker) => {
  const [entityOptions, setEntityOptions] = useState<IOption<TEntityPicker>[]>(
    [],
  );

  const { loading: getEntitiesLoading } = useQuery(GET_ENTITIES, {
    onCompleted(data) {
      const options = data.getEntities
        .filter(({ objects }) => objects.some(({ id }) => id === objectId))
        .map(({ entity }) => ({ name: entity.name, payload: entity }));

      setEntityOptions(options);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<EntityPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.entity!);
    },
  });

  const handleSelectEntity = ({ payload }: IOption<TEntityPicker>) => {
    formik.setFieldValue('entity', payload);
  };

  const handleDeleteEntity = () => {
    formik.setFieldValue('entity', null);
  };

  return (
    <BootLayout isLoading={getEntitiesLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <Select
          label='Юридическое лицо'
          placeholder='Выберите юридическое лицо'
          options={entityOptions}
          error={formik.touched.entity ? formik.errors.entity : null}
          onSelect={handleSelectEntity}
          onDelete={handleDeleteEntity}
        />
        <Button type='submit'>Выбрать</Button>
      </Form>
    </BootLayout>
  );
};
