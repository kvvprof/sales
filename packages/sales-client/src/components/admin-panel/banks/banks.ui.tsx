import { useMutation, useQuery } from '@apollo/client';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDebounce } from 'use-debounce';

import { BasicBank } from '@/__types__/graphql';
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
  CREATE_BANK,
  DELETE_BANK,
  GET_BANKS,
  UPDATE_BANK,
} from '@/components/admin-panel/banks/banks.gql';
import {
  BanksSchema,
  initialValues,
  validationSchema,
} from '@/components/admin-panel/banks/banks.validation';

export const Banks = () => {
  const [prefix, setPrefix] = useState<string>('');
  const [debouncedValue] = useDebounce(prefix, 500);
  const [banks, setBanks] = useState<BasicBank[]>([]);
  const [isBankModalOpen, setIsBankModalOpen] = useState<boolean>(false);
  const [currentBankId, setCurrentBankId] = useState<number | null>(null);

  const {
    loading: getBanksLoading,
    data: getBanksData,
    refetch: banksRefetch,
  } = useQuery(GET_BANKS, {
    onError(error) {
      toast.error(error.message);
    },
  });

  const [createBank, { loading: createBankLoading }] = useMutation(
    CREATE_BANK,
    {
      onCompleted() {
        setIsBankModalOpen(false);
        toast.info('Банк создан успешно.');
        banksRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const [updateBank, { loading: updateBankLoading }] = useMutation(
    UPDATE_BANK,
    {
      onCompleted() {
        setIsBankModalOpen(false);
        toast.info('Банк обновлен успешно.');
        banksRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const [deleteBank, { loading: deleteBankLoading }] = useMutation(
    DELETE_BANK,
    {
      onCompleted() {
        setIsBankModalOpen(false);
        toast.info('Банк удален успешно.');
        banksRefetch();
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const formik = useFormik<BanksSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      if (currentBankId) {
        updateBank({
          variables: {
            input: normalizePayload({ id: currentBankId, ...data }),
          },
        });
      } else {
        createBank({
          variables: {
            input: normalizePayload(data),
          },
        });
      }
    },
  });

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (getBanksData?.getBanks) {
      setBanks(getBanksData.getBanks);
      setPrefix(event.target.value);
    }
  };

  const handleSearchClear = () => {
    if (getBanksData?.getBanks) {
      setBanks(getBanksData.getBanks);
      setPrefix('');
    }
  };

  const handleCreateBank = () => {
    setCurrentBankId(null);
    setIsBankModalOpen(true);
    formik.setFieldValue('name', '');
  };

  const handleUpdateBank = (id: number) => {
    setCurrentBankId(id);
    formik.setFieldValue('name', banks.find((bank) => bank.id === id)!.name);
    formik.setFieldValue(
      'isVisible',
      banks.find((bank) => bank.id === id)!.isVisible,
    );
    setIsBankModalOpen(true);
  };

  const handleCheckboxChange = () => {
    formik.setFieldValue('isVisible', !formik.values.isVisible);
  };

  const handleDeleteBank = () => {
    deleteBank({ variables: { input: { id: currentBankId } } });
  };

  useEffect(() => {
    if (getBanksData?.getBanks) {
      setBanks(getBanksData.getBanks);
    }
  }, [getBanksData?.getBanks]);

  useEffect(() => {
    setBanks((state) =>
      state.filter(({ name }) => name.toLowerCase().startsWith(debouncedValue)),
    );
  }, [debouncedValue]);

  return (
    <>
      <Modal
        title={currentBankId ? 'Редактирование банка' : 'Создание банка'}
        isOpen={isBankModalOpen}
        onClose={() => setIsBankModalOpen(false)}
      >
        <BootLayout
          isLoading={
            createBankLoading || updateBankLoading || deleteBankLoading
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
                label='Отображать в списке банков'
                checked={formik.values.isVisible}
                onChange={handleCheckboxChange}
              />
              {currentBankId && (
                <div
                  className='hover:text-c-danger flex cursor-pointer items-center text-xs'
                  onClick={handleDeleteBank}
                >
                  <XMarkIcon className='h-4 w-4' />
                  <p>Удалить</p>
                </div>
              )}
            </div>

            <Button type='submit' onClick={() => formik.handleSubmit()}>
              {currentBankId ? 'Сохранить' : 'Создать'}
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
          <Button onClick={handleCreateBank}>Создать</Button>
        </Toolbar>
        <BootLayout isLoading={getBanksLoading}>
          {banks.map(({ id, name, isVisible }) => (
            <div
              className='hover:bg-c-bg-secondary flex cursor-pointer items-center gap-2 rounded-lg p-3'
              key={id}
              onClick={() => handleUpdateBank(id)}
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
          <Tag tagSize='s'>Количество: {banks.length}</Tag>
        </div>
      </ContentLayout>
    </>
  );
};
