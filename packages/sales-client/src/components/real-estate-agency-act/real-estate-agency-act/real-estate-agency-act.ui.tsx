import { useLazyQuery, useMutation } from '@apollo/client';
import { format } from 'date-fns';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
import { AgencyCard } from '@/components/agency/agency-card/agency-card.ui';
import { AgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.ui';
import { ClientContractCard } from '@/components/client-contract/client-contract-card/client-contract-card.ui';
import { Printout } from '@/components/printout/printout.ui';
import {
  GET_REAL_ESTATE_AGENCY_ACT,
  UPDATE_REAL_ESTATE_AGENCY_ACT,
} from '@/components/real-estate-agency-act/real-estate-agency-act/real-estate-agency-act.gql';
import { IRealEstateAgencyAct } from '@/components/real-estate-agency-act/real-estate-agency-act/real-estate-agency-act.interface';
import {
  RealEstateAgencyActSchema,
  initialValues,
  validationSchema,
} from '@/components/real-estate-agency-act/real-estate-agency-act/real-estate-agency-act.validation';

export const RealEstateAgencyAct = ({ id }: IRealEstateAgencyAct) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [isPrintoutModalOpen, setIsPrintoutModalOpen] =
    useState<boolean>(false);

  const [
    getRealEstateAgencyAct,
    {
      loading: getRealEstateAgencyActLoading,
      data: getRealEstateAgencyActData,
    },
  ] = useLazyQuery(GET_REAL_ESTATE_AGENCY_ACT, {
    variables: { input: { id } },
    onCompleted(data) {
      formik.setValues({
        id,
        date: data.getRealEstateAgencyAct.realEstateAgencyAct.date || '',
        retention:
          Number(data.getRealEstateAgencyAct.realEstateAgencyAct.retention) ||
          0,
        note: data.getRealEstateAgencyAct.realEstateAgencyAct.note || '',
      });

      setTitle(
        `${data.getRealEstateAgencyAct.realEstateAgencyAct.number} от ${format(data.getRealEstateAgencyAct.realEstateAgencyAct.date, 'dd.MM.yyyy')}`,
      );
    },
    onError(error) {
      navigate('/', { replace: true });
      toast.error(error.message);
    },
  });

  const [
    updateRealEstateAgencyAct,
    { loading: updateRealEstateAgencyActLoading },
  ] = useMutation(UPDATE_REAL_ESTATE_AGENCY_ACT, {
    onCompleted() {
      toast.info('Акт обновлен успешно.');
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const formik = useFormik<RealEstateAgencyActSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      updateRealEstateAgencyAct({
        variables: { input: normalizePayload(data) },
      });
    },
  });

  useEffect(() => {
    getRealEstateAgencyAct();
  }, []);

  return (
    <>
      <Modal
        title=''
        isOpen={isPrintoutModalOpen}
        onClose={() => setIsPrintoutModalOpen(false)}
      >
        <Printout
          kind='ActRealEstateAgency'
          id={id}
          callback={async () => {
            setIsPrintoutModalOpen(false);
            await getRealEstateAgencyAct();
            toast.info('Ссылка на распечатку обновлена успешно.');
          }}
        />
      </Modal>
      <BootLayout
        isLoading={
          getRealEstateAgencyActLoading || updateRealEstateAgencyActLoading
        }
      >
        <ContentLayout title='Акт агентства недвижимости'>
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
              {getRealEstateAgencyActData && (
                <>
                  <NamedGroup title='Агентство'>
                    <CardList showAddButton={false}>
                      <AgencyCard
                        {...getRealEstateAgencyActData.getRealEstateAgencyAct
                          .agency}
                      />
                    </CardList>
                  </NamedGroup>
                  <NamedGroup title='Контракт клиента'>
                    <CardList showAddButton={false}>
                      <ClientContractCard
                        {...getRealEstateAgencyActData.getRealEstateAgencyAct
                          .clientContract.clientContract}
                      />
                    </CardList>
                  </NamedGroup>
                  <NamedGroup title='Контракт агентства'>
                    <CardList showAddButton={false}>
                      <AgencyContractCard
                        agency={
                          getRealEstateAgencyActData.getRealEstateAgencyAct
                            .agency
                        }
                        object={
                          getRealEstateAgencyActData.getRealEstateAgencyAct
                            .clientContract.object
                        }
                        agencyContractProperties={
                          getRealEstateAgencyActData.getRealEstateAgencyAct
                            .agencyContract.agencyContract
                        }
                        realEstateAgencyContractProperties={
                          getRealEstateAgencyActData.getRealEstateAgencyAct
                            .agencyContract.realEstateAgencyContractProperties
                        }
                      />
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
                    getRealEstateAgencyActData?.getRealEstateAgencyAct
                      .realEstateAgencyAct.number || ''
                  }
                />
                <DatePickerUI
                  label='Дата'
                  name='date'
                  value={formik.values.date}
                  error={formik.touched.date ? formik.errors.date : null}
                  onChange={(date) => formik.setFieldValue('date', date)}
                />
                <Input
                  label='Сумма к выплате'
                  name='amount'
                  disabled={true}
                  type='number'
                  step='0.01'
                  value={
                    getRealEstateAgencyActData?.getRealEstateAgencyAct
                      .realEstateAgencyAct.amount || 0
                  }
                />
                <Input
                  label='Удержание'
                  name='retention'
                  type='number'
                  step='0.01'
                  value={formik.values.retention}
                  error={
                    formik.touched.retention ? formik.errors.retention : null
                  }
                  onChange={formik.handleChange}
                />
                <Input
                  label='Примечание'
                  name='note'
                  value={formik.values.note}
                  error={formik.touched.note ? formik.errors.note : null}
                  onChange={formik.handleChange}
                />
              </NamedGroup>
              <NamedGroup title='Дополнительные данные'>
                <Input
                  label='Ссылка на распечатку'
                  disabled={true}
                  value={
                    getRealEstateAgencyActData?.getRealEstateAgencyAct
                      .realEstateAgencyAct.link || ''
                  }
                  linkTo={
                    getRealEstateAgencyActData?.getRealEstateAgencyAct
                      .realEstateAgencyAct.link
                  }
                />
              </NamedGroup>
            </Form>
          </Container>
        </ContentLayout>
      </BootLayout>
    </>
  );
};
