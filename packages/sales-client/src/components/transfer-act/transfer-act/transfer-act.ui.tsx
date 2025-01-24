import { useLazyQuery, useMutation } from '@apollo/client';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { BasicRepresentative } from '@/__types__/graphql';
import {
  BootLayout,
  CardList,
  Container,
  ContentLayout,
  DatePickerUI,
  Dropdown,
  Form,
  Input,
  Modal,
  NamedGroup,
  Toolbar,
  normalizePayload,
} from '@/common';
import { IRepresentativeCard } from '@/components/client/representative/representative-card/representative.interface';
import { RepresentativeCard } from '@/components/client/representative/representative-card/representative.ui';
import { RepresentativePicker } from '@/components/client/representative/representative-picker/representative-picker.ui';
import { ClientContractCard } from '@/components/client-contract/client-contract-card/client-contract-card.ui';
import { Printout } from '@/components/printout/printout.ui';
import { ProductCard } from '@/components/product/product-card/product-card.ui';
import { ProductInfo } from '@/components/product/product-info/product-info.ui';
import {
  GET_TRANSFER_ACT,
  UPDATE_TRANSFER_ACT,
} from '@/components/transfer-act/transfer-act/transfer-act.gql';
import { ITransferAct } from '@/components/transfer-act/transfer-act/transfer-act.interface';
import {
  TransferActSchema,
  initialValues,
  validationSchema,
} from '@/components/transfer-act/transfer-act/transfer-act.validation';

export const TransferAct = ({ id }: ITransferAct) => {
  const navigate = useNavigate();
  const [isPrintoutModalOpen, setIsPrintoutModalOpen] =
    useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  const [isProductInfoModalOpen, setIsProductInfoModalOpen] = useState(false);
  const [isRepresentativeModalOpen, setIsRepresentativeModalOpen] =
    useState<boolean>(false);
  const [representatives, setRepresentatives] = useState<IRepresentativeCard[]>(
    [],
  );

  const [
    getTransferAct,
    { loading: getTransferActLoading, data: getTransferActData },
  ] = useLazyQuery(GET_TRANSFER_ACT, {
    variables: { input: { id } },
    onCompleted(data) {
      formik.setValues({
        id,
        date: data.getTransferAct.transferAct.date || '',
        representativeIds:
          data.getTransferAct.representatives?.map(
            ({ representative: { id } }) => id,
          ) || [],
      });

      setTitle(
        `${data.getTransferAct.transferAct.number} от ${format(data.getTransferAct.transferAct.date, 'dd.MM.yyyy')}`,
      );

      setRepresentatives(
        data.getTransferAct.representatives?.map(
          ({ representative, client }) => ({
            ...representative,
            clientFullName: client.fullName,
          }),
        ) || [],
      );
    },
    onError(error) {
      navigate('/', { replace: true });
      toast.error(error.message);
    },
  });

  const [updateTransferAct, { loading: updateTransferActLoading }] =
    useMutation(UPDATE_TRANSFER_ACT, {
      onCompleted() {
        toast.info('Акт обновлен успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<TransferActSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      updateTransferAct({
        variables: { input: normalizePayload(data) },
      });
    },
  });

  const handleSubmitRepresentative = (representative: BasicRepresentative) => {
    const existentRepresentative = representatives.find(
      ({ id }) => id === representative.id,
    );

    if (!existentRepresentative) {
      setRepresentatives([...representatives, representative]);

      formik.setFieldValue('representativeIds', [
        ...formik.values.representativeIds,
        representative.id,
      ]);
    }

    setIsRepresentativeModalOpen(false);
  };

  const handleDeleteRepresentative = (representative: BasicRepresentative) => {
    setRepresentatives(
      representatives.filter(({ id }) => id !== representative.id),
    );

    formik.setFieldValue(
      'representativeIds',
      formik.values.representativeIds.filter((id) => id !== representative.id),
    );
  };

  useEffect(() => {
    getTransferAct();
  }, []);

  return (
    <>
      <Modal
        title=''
        isOpen={isPrintoutModalOpen}
        onClose={() => setIsPrintoutModalOpen(false)}
      >
        <Printout
          kind='BuyerAcceptanceCertificate'
          id={id}
          callback={async () => {
            setIsPrintoutModalOpen(false);
            await getTransferAct();
            toast.info('Ссылка на распечатку обновлена успешно.');
          }}
        />
      </Modal>
      <Modal
        title='Информация о продукте'
        isOpen={isProductInfoModalOpen}
        onClose={() => setIsProductInfoModalOpen(false)}
      >
        <ProductInfo
          id={getTransferActData?.getTransferAct.product.pricingProductsId}
        />
      </Modal>
      <Modal
        title='Выбор представителя'
        isOpen={isRepresentativeModalOpen}
        onClose={() => setIsRepresentativeModalOpen(false)}
      >
        <RepresentativePicker
          clientIds={
            getTransferActData?.getTransferAct.clients?.map(({ id }) => id) ||
            []
          }
          onSubmit={handleSubmitRepresentative}
        />
      </Modal>
      <BootLayout isLoading={getTransferActLoading || updateTransferActLoading}>
        <ContentLayout title='Акт приема-передачи'>
          <Toolbar text={title}>
            <Dropdown>
              <Dropdown.Item
                type='submit'
                name='Сохранить'
                onClick={() => formik.handleSubmit()}
              />
              <Dropdown.Item
                name='Создать распечатку'
                onClick={() => setIsPrintoutModalOpen(true)}
              />
            </Dropdown>
          </Toolbar>
          <Container>
            <Form>
              {getTransferActData && (
                <>
                  <NamedGroup title='Контракт клиента'>
                    <CardList showAddButton={false}>
                      <ClientContractCard
                        {...getTransferActData.getTransferAct.clientContract}
                      />
                    </CardList>
                  </NamedGroup>
                  <NamedGroup title='Продукт'>
                    <CardList showAddButton={false}>
                      {getTransferActData.getTransferAct.product && (
                        <ProductCard
                          product={getTransferActData.getTransferAct.product}
                          object={getTransferActData.getTransferAct.object}
                          onClick={() => setIsProductInfoModalOpen(true)}
                        />
                      )}
                    </CardList>
                  </NamedGroup>
                  <NamedGroup title='Представители по доверенности'>
                    <CardList
                      onAdd={() => setIsRepresentativeModalOpen(true)}
                      showAddButton={
                        representatives.length !==
                        getTransferActData.getTransferAct.clients?.length
                      }
                    >
                      {representatives.map((representative) => (
                        <RepresentativeCard
                          key={representative.id}
                          onDelete={() =>
                            handleDeleteRepresentative(representative)
                          }
                          {...representative}
                        />
                      ))}
                    </CardList>
                  </NamedGroup>
                </>
              )}
              <NamedGroup title='Основные данные'>
                <Input
                  label='Номер'
                  name='number'
                  disabled={true}
                  value={
                    getTransferActData?.getTransferAct.transferAct.number || ''
                  }
                />
                <DatePickerUI
                  label='Дата'
                  name='date'
                  value={formik.values.date}
                  error={formik.touched.date ? formik.errors.date : null}
                  onChange={(date) => formik.setFieldValue('date', date)}
                />
              </NamedGroup>
              <NamedGroup title='Дополнительные данные'>
                <Input
                  label='Ссылка на распечатку'
                  disabled={true}
                  value={
                    getTransferActData?.getTransferAct.transferAct.link || ''
                  }
                  linkTo={getTransferActData?.getTransferAct.transferAct.link}
                />
              </NamedGroup>
            </Form>
          </Container>
        </ContentLayout>
      </BootLayout>
    </>
  );
};
