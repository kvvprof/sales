import { useMutation, useQuery } from '@apollo/client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BasicSubsidy } from '@/__types__/graphql';
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
  CREATE_SUBSIDY,
  DELETE_SUBSIDY,
  GET_SUBSIDIES,
  UPDATE_SUBSIDY,
} from '@/components/admin-panel/subsidies/subsidies.gql';
import {
  initialValues,
  SubsidiesSchema,
  validationSchema,
} from '@/components/admin-panel/subsidies/subsidies.validation';

export const Subsidies = () => {
  const [prefix, setPrefix] = useState<string>('');
  const [debouncedValue] = useDebounce(prefix, 500);
  const [subsidies, setSubsidies] = useState<BasicSubsidy[]>([]);
  const [isSubsidyModalOpen, setIsSubsidyModalOpen] = useState<boolean>(false);
  const [currentSubsidyId, setCurrentSubsidyId] = useState<number | null>(null);

  const {
    loading: getSubsidiesLoading,
    data: getSubsidiesData,
    refetch: subsidiesRefetch,
  } = useQuery(GET_SUBSIDIES, {
    onError(error) {
      toast.error(error.message);
    },
  });

  const [createSubsidy, { loading: createSubsidyLoading }] = useMutation(
    CREATE_SUBSIDY,
    {
      onCompleted() {
        setIsSubsidyModalOpen(false);
        toast.info('Субсидия создана успешно.');
        subsidiesRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const [updateSubsidy, { loading: updateSubsidyLoading }] = useMutation(
    UPDATE_SUBSIDY,
    {
      onCompleted() {
        setIsSubsidyModalOpen(false);
        toast.info('Субсидия обновлена успешно.');
        subsidiesRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const [deleteSubsidy, { loading: deleteSubsidyLoading }] = useMutation(
    DELETE_SUBSIDY,
    {
      onCompleted() {
        setIsSubsidyModalOpen(false);
        toast.info('Субсидия удалена успешно.');
        subsidiesRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (getSubsidiesData?.getSubsidies) {
      setSubsidies(getSubsidiesData.getSubsidies);
      setPrefix(event.target.value);
    }
  };

  const handleSearchClear = () => {
    if (getSubsidiesData?.getSubsidies) {
      setSubsidies(getSubsidiesData.getSubsidies);
      setPrefix('');
    }
  };

  const formik = useFormik<SubsidiesSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      if (currentSubsidyId) {
        updateSubsidy({
          variables: {
            input: normalizePayload({ id: currentSubsidyId, ...data }),
          },
        });
      } else {
        createSubsidy({
          variables: {
            input: normalizePayload(data),
          },
        });
      }
    },
  });

  const handleCreateSubsidy = () => {
    setCurrentSubsidyId(null);
    setIsSubsidyModalOpen(true);
    formik.setFieldValue('name', '');
  };

  const handleUpdateSubsidy = (id: number) => {
    setCurrentSubsidyId(id);
    formik.setFieldValue(
      'name',
      subsidies.find((subsidy) => subsidy.id === id)!.name,
    );
    formik.setFieldValue(
      'isVisible',
      subsidies.find((subsidy) => subsidy.id === id)!.isVisible,
    );
    setIsSubsidyModalOpen(true);
  };

  const handleDeleteSubsidy = () => {
    deleteSubsidy({
      variables: { input: { id: currentSubsidyId } },
    });
  };

  const handleCheckboxChange = () => {
    formik.setFieldValue('isVisible', !formik.values.isVisible);
  };

  useEffect(() => {
    if (getSubsidiesData?.getSubsidies) {
      setSubsidies(getSubsidiesData.getSubsidies);
    }
  }, [getSubsidiesData?.getSubsidies]);

  useEffect(() => {
    setSubsidies((state) =>
      state.filter(({ name }) => name.toLowerCase().startsWith(debouncedValue)),
    );
  }, [debouncedValue]);

  return (
    <>
      <Modal
        title={
          currentSubsidyId ? 'Редактирование субсидии' : 'Создание субсидии'
        }
        isOpen={isSubsidyModalOpen}
        onClose={() => setIsSubsidyModalOpen(false)}
      >
        <BootLayout
          isLoading={
            createSubsidyLoading || updateSubsidyLoading || deleteSubsidyLoading
          }
        >
          <Form>
            <Input
              label='Название'
              placeholder='Введите название'
              name='name'
              value={formik.values.name}
              error={formik.touched.name ? formik.errors.name : null}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <div className='flex items-center justify-between'>
              <Checkbox
                label='Отображать в списке субсидий'
                checked={formik.values.isVisible}
                onChange={handleCheckboxChange}
              />
              {currentSubsidyId && (
                <div
                  className='hover:text-c-danger flex cursor-pointer items-center text-xs'
                  onClick={handleDeleteSubsidy}
                >
                  <XMarkIcon className='h-4 w-4' />
                  <p>Удалить</p>
                </div>
              )}
            </div>

            <Button type='submit' onClick={() => formik.handleSubmit()}>
              {currentSubsidyId ? 'Сохранить' : 'Создать'}
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
          <Button onClick={handleCreateSubsidy}>Создать</Button>
        </Toolbar>
        <BootLayout isLoading={getSubsidiesLoading}>
          {subsidies.map(({ id, name, isVisible }) => (
            <div
              className='hover:bg-c-bg-secondary flex cursor-pointer items-center gap-2 rounded-lg p-3'
              key={id}
              onClick={() => handleUpdateSubsidy(id)}
            >
              <p
                className={cn(
                  'text-lg font-medium',
                  !isVisible && 'text-c-text-muted',
                )}
              >
                {name}
              </p>
            </div>
          ))}
        </BootLayout>
        <div className='flex items-end justify-end'>
          <Tag tagSize='s'>Количество: {subsidies.length}</Tag>
        </div>
      </ContentLayout>
    </>
  );
};
