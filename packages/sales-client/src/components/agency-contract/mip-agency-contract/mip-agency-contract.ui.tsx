import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  AgencyContractType,
  BasicAgencyContractSignatory,
} from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  CardList,
  Container,
  ContentLayout,
  DatePickerUI,
  Form,
  Input,
  Loader,
  Modal,
  NamedGroup,
  Toolbar,
  normalizePayload,
} from '@/common';
import { TAgencyCard } from '@/components/agency/agency-card/agency-card.interface';
import { AgencyCard } from '@/components/agency/agency-card/agency-card.ui';
import { AgencyContractCommission } from '@/components/agency-contract/agency-contract-commission/agency-contract-commission.ui';
import { AgencyContractSignatoryCard } from '@/components/agency-contract/agency-contract-signatory-card/agency-contract-signatory-card.ui';
import { AgencyContractSignatoryPicker } from '@/components/agency-contract/agency-contract-signatory-picker/agency-contract-signatory-picker.ui';
import {
  GET_MIP_AGENCY_CONTRACT,
  UPDATE_AGENCY_CONTRACT,
} from '@/components/agency-contract/mip-agency-contract/mip-agency-contract.gql';
import { IMipAgencyContract } from '@/components/agency-contract/mip-agency-contract/mip-agency-contract.interface';
import {
  MipAgencyContractSchema,
  initialValues,
  validationSchema,
} from '@/components/agency-contract/mip-agency-contract/mip-agency-contract.validation';
import { EntityCard } from '@/components/entity/entity-card/entity-card.ui';
import { GET_ENTITIES } from '@/components/entity/entity-picker/entity-picker.gql';
import { TEntityPicker } from '@/components/entity/entity-picker/entity-picker.interface';
import { ObjectCard } from '@/components/object/object-card/object-card.ui';
import { TObjectPicker } from '@/components/object/object-picker/object-picker.interface';
import { ObjectPicker } from '@/components/object/object-picker/object-picker.ui';
import { UserCard } from '@/components/user/user-card/user-card.ui';
import { TUserPicker } from '@/components/user/user-picker/user-picker.interface';
import { UserPicker } from '@/components/user/user-picker/user-picker.ui';

export const MipAgencyContract = ({ id }: IMipAgencyContract) => {
  const [isOpenUserModal, setIsOpenUserModal] = useState<boolean>(false);
  const [responsibleUser, setResponsibleUser] = useState<TUserPicker | null>(
    null,
  );
  const [isOpenObjectModal, setIsOpenObjectModal] = useState<boolean>(false);
  const [agency, setAgency] = useState<TAgencyCard | null>(null);
  const [object, setObject] = useState<TObjectPicker | null>(null);
  const [entity, setEntity] = useState<TEntityPicker | null>(null);
  const [
    isOpenAgencyContractSignatoryModal,
    setIsOpenAgencyContractSignatoryModal,
  ] = useState<boolean>(false);
  const [agencyContractSignatory, setAgencyContractSignatory] =
    useState<BasicAgencyContractSignatory | null>(null);
  const navigate = useNavigate();
  const [toolbarTitle, setToolbarTitle] = useState<string>('');
  const [layoutTitle, setLayoutTitle] = useState<string>('');

  const [getEntities, { loading: getEntitiesLoading }] = useLazyQuery(
    GET_ENTITIES,
    {
      onCompleted(data) {
        const entity = data?.getEntities.filter(({ objects }) =>
          objects.some(({ id }) => id === object!.id),
        );
        formik.setFieldValue(
          'agencyContractProperties.entityId',
          entity![0].entity.id,
        );
        setEntity(entity![0].entity);
      },
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  const {
    loading: getMipAgencyContractLoading,
    data: getMipAgencyContractData,
    refetch: getMipAgencyContractRefetch,
  } = useQuery(GET_MIP_AGENCY_CONTRACT, {
    variables: { input: { id } },
    onCompleted(data) {
      formik.setValues({
        agencyContractProperties: {
          number: data.getAgencyContract.agencyContractProperties.number,
          date: data.getAgencyContract.agencyContractProperties.date,
          objectId: data.getAgencyContract.object.id,
          entityId: data.getAgencyContract.entity.id,
          agencyId: data.getAgencyContract.agency.id,
          agencyContractSignatoryId:
            data.getAgencyContract.agencyContractSignatory?.id,
          responsibleUserId: data.getAgencyContract.responsibleUser?.id,
        },
        mipAgencyContractProperties: {
          agencyContractCommission: {
            percent: Number(
              data.getAgencyContract.mipAgencyContractProperties
                ?.agencyContractCommission.percent,
            ),
            threshold: Number(
              data.getAgencyContract.mipAgencyContractProperties
                ?.agencyContractCommission.threshold,
            ),
            maxDays:
              data.getAgencyContract.mipAgencyContractProperties
                ?.agencyContractCommission.maxDays,
          },
        },
      });

      setAgency(data.getAgencyContract.agency);
      setLayoutTitle(
        `Контракт агентства ${data.getAgencyContract.agencyContractProperties.agencyContractType === AgencyContractType.RealEstateAgencyContract ? 'недвижимости' : 'МиП'}`,
      );
      setToolbarTitle(data.getAgencyContract.agency.name);
      setResponsibleUser(data.getAgencyContract.responsibleUser || null);
      setObject(data.getAgencyContract.object);
      setEntity(data.getAgencyContract.entity);
      setAgencyContractSignatory(
        data.getAgencyContract.agencyContractSignatory || null,
      );
    },
    onError(error) {
      navigate('/', { replace: true });
      toast.error(error.message);
    },
  });

  const [updateAgencyContract, { loading: updateAgencyContractLoading }] =
    useMutation(UPDATE_AGENCY_CONTRACT, {
      onCompleted: async () => {
        await getMipAgencyContractRefetch();
        toast.info('Контракт обновлен успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<MipAgencyContractSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      const { agencyContractProperties, mipAgencyContractProperties } = data;
      updateAgencyContract({
        variables: {
          input: normalizePayload({
            agencyContractProperties: {
              id,
              ...agencyContractProperties,
            },
            mipAgencyContractProperties,
          }),
        },
      });
    },
  });

  const handleSubmitUserPicker = (responsibleUser: TUserPicker) => {
    formik.setFieldValue(
      'agencyContractProperties.responsibleUserId',
      responsibleUser.id,
    );
    setResponsibleUser(responsibleUser);
    setIsOpenUserModal(false);
  };

  const handleDeleteUserCard = () => {
    formik.setFieldValue('agencyContractProperties.responsibleUserId', null);
    setResponsibleUser(null);
  };

  const handleSubmitObjectPicker = (object: TObjectPicker) => {
    formik.setFieldValue('agencyContractProperties.objectId', object.id);
    setObject(object);
    setIsOpenObjectModal(false);
    getEntities();
  };

  const handleDeleteObjectCard = () => {
    formik.setFieldValue('agencyContractProperties.objectId', null);
    formik.setFieldValue('agencyContractProperties.entityId', null);
    setObject(null);
    setEntity(null);
  };

  const handleSubmitSignatoryPicker = (
    agencyContractSignatory: BasicAgencyContractSignatory,
  ) => {
    formik.setFieldValue(
      'agencyContractProperties.agencyContractSignatoryId',
      agencyContractSignatory.id,
    );
    setAgencyContractSignatory(agencyContractSignatory);
    setIsOpenAgencyContractSignatoryModal(false);
  };

  const handleDeleteAgencyContractSignatoryCard = () => {
    formik.setFieldValue(
      'agencyContractProperties.agencyContractSignatoryId',
      null,
    );
    setAgencyContractSignatory(null);
  };

  return (
    <>
      <Modal
        title='Выбор пользователя'
        isOpen={isOpenUserModal}
        onClose={() => setIsOpenUserModal(false)}
      >
        <UserPicker onSubmit={handleSubmitUserPicker} />
      </Modal>
      <Modal
        title='Выбор объекта'
        isOpen={isOpenObjectModal}
        onClose={() => setIsOpenObjectModal(false)}
      >
        <ObjectPicker onSubmit={handleSubmitObjectPicker} />
      </Modal>
      <Modal
        title='Выбор подписанта'
        isOpen={isOpenAgencyContractSignatoryModal}
        onClose={() => setIsOpenAgencyContractSignatoryModal(false)}
      >
        <AgencyContractSignatoryPicker
          agencyId={getMipAgencyContractData?.getAgencyContract.agency.id}
          onSubmit={handleSubmitSignatoryPicker}
        />
      </Modal>
      <BootLayout
        isLoading={getMipAgencyContractLoading || updateAgencyContractLoading}
      >
        <ContentLayout title={layoutTitle}>
          <Toolbar text={toolbarTitle}>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Сохранить
            </Button>
          </Toolbar>
          <Container>
            <Form>
              <NamedGroup title='Данные'>
                <Input
                  label='Номер'
                  name='agencyContractProperties.number'
                  value={formik.values.agencyContractProperties.number}
                  error={
                    formik.touched.agencyContractProperties?.number
                      ? formik.errors.agencyContractProperties?.number
                      : null
                  }
                  onChange={formik.handleChange}
                />
                <DatePickerUI
                  label='Дата'
                  name='agencyContractProperties.date'
                  value={formik.values.agencyContractProperties.date}
                  error={
                    formik.touched.agencyContractProperties?.date
                      ? formik.errors.agencyContractProperties?.date
                      : null
                  }
                  onChange={(date) =>
                    formik.setFieldValue('agencyContractProperties.date', date)
                  }
                />
              </NamedGroup>
              <NamedGroup title='Агентство'>
                <CardList showAddButton={false}>
                  {agency && <AgencyCard {...agency} />}
                </CardList>
              </NamedGroup>
              <NamedGroup title='Подписант'>
                <CardList
                  showAddButton={!agencyContractSignatory}
                  onAdd={() => setIsOpenAgencyContractSignatoryModal(true)}
                  error={
                    formik.touched.agencyContractProperties
                      ?.agencyContractSignatoryId
                      ? formik.errors.agencyContractProperties
                          ?.agencyContractSignatoryId
                      : null
                  }
                >
                  {agencyContractSignatory && (
                    <AgencyContractSignatoryCard
                      {...agencyContractSignatory}
                      onDelete={handleDeleteAgencyContractSignatoryCard}
                    />
                  )}
                </CardList>
              </NamedGroup>
              <NamedGroup title='Объект'>
                <CardList
                  showAddButton={!object}
                  onAdd={() => setIsOpenObjectModal(true)}
                  error={
                    formik.touched.agencyContractProperties?.objectId
                      ? formik.errors.agencyContractProperties?.objectId
                      : null
                  }
                >
                  {object && (
                    <ObjectCard {...object} onDelete={handleDeleteObjectCard} />
                  )}
                </CardList>
              </NamedGroup>
              {object && (
                <NamedGroup title='Юридическое лицо'>
                  {!getEntitiesLoading ? (
                    <CardList
                      showAddButton={false}
                      error={
                        formik.touched.agencyContractProperties?.entityId
                          ? formik.errors.agencyContractProperties?.entityId
                          : null
                      }
                    >
                      {entity && <EntityCard {...entity} />}
                    </CardList>
                  ) : (
                    <Loader size='medium' />
                  )}
                </NamedGroup>
              )}
              <NamedGroup title='Ответственный сотрудник'>
                <CardList
                  showAddButton={!responsibleUser}
                  onAdd={() => setIsOpenUserModal(true)}
                  error={
                    formik.touched.agencyContractProperties?.responsibleUserId
                      ? formik.errors.agencyContractProperties
                          ?.responsibleUserId
                      : null
                  }
                >
                  {responsibleUser && (
                    <UserCard
                      {...responsibleUser}
                      onDelete={handleDeleteUserCard}
                    />
                  )}
                </CardList>
              </NamedGroup>
              <AgencyContractCommission
                prefix='mipAgencyContractProperties'
                values={
                  formik.values.mipAgencyContractProperties
                    .agencyContractCommission
                }
                touched={
                  formik.touched.mipAgencyContractProperties
                    ?.agencyContractCommission
                }
                errors={
                  formik.errors.mipAgencyContractProperties
                    ?.agencyContractCommission
                }
                onChange={formik.handleChange}
              />
              <NamedGroup title='Дополнительные данные'>
                <Input
                  label='Ссылка на распечатку'
                  disabled={true}
                  value={
                    getMipAgencyContractData?.getAgencyContract
                      .agencyContractProperties.link || ''
                  }
                  linkTo={
                    getMipAgencyContractData?.getAgencyContract
                      .agencyContractProperties.link
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
