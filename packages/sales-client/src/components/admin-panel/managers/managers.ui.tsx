import { useMutation, useQuery } from '@apollo/client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BasicUser, UserRole } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  Checkbox,
  cn,
  ContentLayout,
  Form,
  Input,
  Modal,
  normalizePayload,
  Tag,
  Toolbar,
} from '@/common';
import {
  CREATE_USER,
  DELETE_USER,
  GET_USERS,
  UPDATE_USER,
} from '@/components/admin-panel/managers/managers.gql';
import {
  initialValues,
  UsersSchema,
  validationSchema,
} from '@/components/admin-panel/managers/managers.validation';

export const Managers = () => {
  const [prefix, setPrefix] = useState<string>('');
  const [debouncedValue] = useDebounce(prefix, 500);
  const [users, setUsers] = useState<BasicUser[]>([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);

  const {
    loading: getUsersLoading,
    data: getUsersData,
    refetch: usersRefetch,
  } = useQuery(GET_USERS, {
    onError(error) {
      toast.error(error.message);
    },
  });

  const [createUser, { loading: createUserLoading }] = useMutation(
    CREATE_USER,
    {
      onCompleted() {
        setIsUserModalOpen(false);
        toast.info('Пользователь создан успешно.');
        usersRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const [updateUser, { loading: updateUserLoading }] = useMutation(
    UPDATE_USER,
    {
      onCompleted() {
        setIsUserModalOpen(false);
        toast.info('Пользователь обновлен успешно.');
        usersRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const [deleteUser, { loading: deleteUserLoading }] = useMutation(
    DELETE_USER,
    {
      onCompleted() {
        setIsUserModalOpen(false);
        toast.info('Пользователь удален успешно.');
        usersRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const formik = useFormik<UsersSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      if (currentUserId) {
        updateUser({
          variables: {
            input: normalizePayload({ id: currentUserId, ...data }),
          },
        });
      } else {
        createUser({
          variables: {
            input: normalizePayload({
              ...data,
              isStaff: false,
              userRole: UserRole.SalesEmployee,
            }),
          },
        });
      }
    },
  });

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (getUsersData?.getUsers) {
      setUsers(getUsersData.getUsers);
      setPrefix(event.target.value);
    }
  };

  const handleSearchClear = () => {
    if (getUsersData?.getUsers) {
      setUsers(getUsersData.getUsers);
      setPrefix('');
    }
  };

  const handleCreateUser = () => {
    setCurrentUserId(null);
    setIsUserModalOpen(true);
    formik.setFieldValue('fullName', '');
    formik.setFieldValue('email', '');
    formik.setFieldValue('phone', '');
    formik.setFieldValue('isStaff', false);
    formik.setFieldValue('isManager', true);
  };

  const handleUpdateUser = (id: number) => {
    setCurrentUserId(id);
    formik.setFieldValue(
      'fullName',
      users.find((user) => user.id === id)!.fullName,
    );
    formik.setFieldValue('email', users.find((user) => user.id === id)!.email);
    formik.setFieldValue(
      'phone',
      users.find((user) => user.id === id)!.phone || '',
    );
    formik.setFieldValue(
      'isManager',
      users.find((user) => user.id === id)!.isManager,
    );
    formik.setFieldValue(
      'isStaff',
      users.find((user) => user.id === id)!.isStaff,
    );
    setIsUserModalOpen(true);
  };

  const handleDeleteUser = () => {
    deleteUser({ variables: { input: { id: currentUserId } } });
  };

  const handleCheckboxChange = () => {
    formik.setFieldValue('isManager', !formik.values.isManager);
  };

  useEffect(() => {
    if (getUsersData?.getUsers) {
      setUsers(getUsersData.getUsers);
    }
  }, [getUsersData?.getUsers]);

  useEffect(() => {
    setUsers((state) =>
      state.filter(({ fullName }) =>
        fullName.toLowerCase().startsWith(debouncedValue),
      ),
    );
  }, [debouncedValue]);

  return (
    <>
      <Modal
        title={
          currentUserId
            ? 'Редактирование пользователя'
            : 'Создание пользователя'
        }
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      >
        <BootLayout
          isLoading={
            createUserLoading || updateUserLoading || deleteUserLoading
          }
        >
          <Form>
            <Input
              label='Название'
              placeholder='Введите название'
              name='fullName'
              disabled={formik.values.isStaff ? true : false}
              value={formik.values.fullName}
              error={formik.touched.fullName ? formik.errors.fullName : null}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              label='Эл. почта'
              placeholder='Введите эл. почту'
              name='email'
              disabled={formik.values.isStaff ? true : false}
              value={formik.values.email}
              error={formik.touched.email ? formik.errors.email : null}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <Input
              label='Телефон'
              placeholder='Введите телефон'
              name='phone'
              disabled={formik.values.isStaff ? true : false}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='flex items-center justify-between'>
              <Checkbox
                label='Отображать в списке менеджеров'
                checked={formik.values.isManager}
                onChange={handleCheckboxChange}
              />
              {currentUserId && !formik.values.isStaff ? (
                <div
                  className='hover:text-c-danger flex cursor-pointer items-center text-xs'
                  onClick={handleDeleteUser}
                >
                  <XMarkIcon className='h-4 w-4' />
                  <p>Удалить</p>
                </div>
              ) : (
                currentUserId && <Tag>Сотрудник</Tag>
              )}
            </div>

            <Button type='submit' onClick={() => formik.handleSubmit()}>
              {currentUserId ? 'Сохранить' : 'Создать'}
            </Button>
          </Form>
        </BootLayout>
      </Modal>
      <ContentLayout title=''>
        <Toolbar>
          <Input
            placeholder='Поиск по названию'
            value={prefix}
            showClearButton={Boolean(prefix)}
            onChange={handleChangeSearch}
            onClear={handleSearchClear}
          />
          <Button onClick={handleCreateUser}>Создать</Button>
        </Toolbar>
        <BootLayout isLoading={getUsersLoading}>
          {users.map(({ id, fullName, isManager }) => (
            <div
              className='hover:bg-c-bg-secondary flex cursor-pointer items-center gap-2 rounded-lg p-3'
              key={id}
              onClick={() => handleUpdateUser(id)}
            >
              <p
                className={cn(
                  'text-lg font-medium',
                  !isManager && 'text-c-text-muted',
                )}
              >
                {fullName}
              </p>
            </div>
          ))}
        </BootLayout>
        <div className='flex items-end justify-end'>
          <Tag tagSize='s'>Количество: {users.length}</Tag>
        </div>
      </ContentLayout>
    </>
  );
};
