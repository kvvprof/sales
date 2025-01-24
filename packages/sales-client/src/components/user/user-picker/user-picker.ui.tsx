import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BootLayout, Button, Form, IOption, Select } from '@/common';
import { GET_USERS } from '@/components/user/user-picker/user-picker.gql';
import {
  IUserPicker,
  TUserPicker,
} from '@/components/user/user-picker/user-picker.interface';
import {
  UserPickerSchema,
  initialValues,
  validationSchema,
} from '@/components/user/user-picker/user-picker.validation';

export const UserPicker = ({ onSubmit }: IUserPicker) => {
  const [userOptions, setUserOptions] = useState<IOption<TUserPicker>[]>([]);

  const { loading: getUsersLoading } = useQuery(GET_USERS, {
    onCompleted(data) {
      setUserOptions(
        data.getUsers
          .filter((user) => user.isManager)
          .map((user) => ({
            name: user.fullName,
            payload: user,
          })),
      );
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<UserPickerSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      onSubmit(data.user!);
    },
  });

  const handleSelectUser = ({ payload }: IOption<TUserPicker>) => {
    formik.setFieldValue('user', payload);
  };

  const handleDeleteUser = () => {
    formik.setFieldValue('user', null);
  };

  return (
    <BootLayout isLoading={getUsersLoading}>
      <Form handleSubmit={formik.handleSubmit}>
        <Select
          label='Пользователь'
          placeholder='Выберите пользователя'
          options={userOptions}
          error={formik.touched.user ? formik.errors.user : null}
          onSelect={handleSelectUser}
          onDelete={handleDeleteUser}
        />
        <Button type='submit'>Выбрать</Button>
      </Form>
    </BootLayout>
  );
};
