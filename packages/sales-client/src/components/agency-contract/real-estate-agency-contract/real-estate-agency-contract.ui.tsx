import { useLazyQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  AgencyContractType,
  BasicAgencyContractSignatory,
} from '@/__types__/graphql';
import {
  BootLayout,
  CardList,
  Container,
  ContentLayout,
  DatePickerUI,
  Dropdown,
  DropdownItem,
  Form,
  Input,
  Loader,
  Modal,
  NamedGroup,
  normalizePayload,
  Toolbar,
} from '@/common';
import { TAgencyCard } from '@/components/agency/agency-card/agency-card.interface';
import { AgencyCard } from '@/components/agency/agency-card/agency-card.ui';
import { AgencyContractCommission } from '@/components/agency-contract/agency-contract-commission/agency-contract-commission.ui';
import { AgencyContractSignatoryCard } from '@/components/agency-contract/agency-contract-signatory-card/agency-contract-signatory-card.ui';
import { AgencyContractSignatoryPicker } from '@/components/agency-contract/agency-contract-signatory-picker/agency-contract-signatory-picker.ui';
import {
  GET_REAL_ESTATE_AGENCY_CONTRACT,
  UPDATE_AGENCY_CONTRACT,
} from '@/components/agency-contract/real-estate-agency-contract/real-estate-agency-contract.gql';
import { IRealEstateAgencyContract } from '@/components/agency-contract/real-estate-agency-contract/real-estate-agency-contract.interface';
import {
  initialValues,
  NewRealEstateAgencyContractSchema,
  validationSchema,
} from '@/components/agency-contract/real-estate-agency-contract/real-estate-agency-contract.validation';
import { EntityCard } from '@/components/entity/entity-card/entity-card.ui';
import { GET_ENTITIES } from '@/components/entity/entity-picker/entity-picker.gql';
import { TEntityPicker } from '@/components/entity/entity-picker/entity-picker.interface';
import { ObjectCard } from '@/components/object/object-card/object-card.ui';
import { TObjectPicker } from '@/components/object/object-picker/object-picker.interface';
import { ObjectPicker } from '@/components/object/object-picker/object-picker.ui';
import { Printout } from '@/components/printout/printout.ui';
import { UserCard } from '@/components/user/user-card/user-card.ui';
import { TUserPicker } from '@/components/user/user-picker/user-picker.interface';
import { UserPicker } from '@/components/user/user-picker/user-picker.ui';

export const RealEstateAgencyContract = ({ id }: IRealEstateAgencyContract) => {
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [responsibleUser, setResponsibleUser] = useState<TUserPicker | null>(
    null,
  );
  const [isObjectModalOpen, setIsObjectModalOpen] = useState<boolean>(false);
  const [agency, setAgency] = useState<TAgencyCard | null>(null);
  const [object, setObject] = useState<TObjectPicker | null>(null);
  const [entity, setEntity] = useState<TEntityPicker | null>(null);
  const [
    isAgencyContractSignatoryModalOpen,
    setIsAgencyContractSignatoryModalOpen,
  ] = useState<boolean>(false);
  const [agencyContractSignatory, setAgencyContractSignatory] =
    useState<BasicAgencyContractSignatory | null>(null);
  const navigate = useNavigate();
  const [toolbarTitle, setToolbarTitle] = useState<string>('');
  const [layoutTitle, setLayoutTitle] = useState<string>('');
  const [isPrintoutModalOpen, setIsPrintoutModalOpen] =
    useState<boolean>(false);

  const [
    getRealEstateAgencyContract,
    {
      loading: getRealEstateAgencyContractLoading,
      data: getRealEstateAgencyContractData,
    },
  ] = useLazyQuery(GET_REAL_ESTATE_AGENCY_CONTRACT, {
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
        realEstateAgencyContractProperties: {
          agencyContractCommission: {
            percent: Number(
              data.getAgencyContract.realEstateAgencyContractProperties
                ?.agencyContractCommission.percent,
            ),
            threshold: Number(
              data.getAgencyContract.realEstateAgencyContractProperties
                ?.agencyContractCommission.threshold,
            ),
            maxDays:
              data.getAgencyContract.realEstateAgencyContractProperties
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

  const [updateAgencyContract, { loading: updateAgencyContractLoading }] =
    useMutation(UPDATE_AGENCY_CONTRACT, {
      onCompleted: async () => {
        await getRealEstateAgencyContract();
        toast.info('Контракт обновлен успешно.');
      },
      onError(error) {
        toast.error(error.message);
      },
    });

  const formik = useFormik<NewRealEstateAgencyContractSchema>({
    initialValues,
    validationSchema,
    onSubmit: (data) => {
      const { agencyContractProperties, realEstateAgencyContractProperties } =
        data;
      updateAgencyContract({
        variables: {
          input: normalizePayload({
            agencyContractProperties: {
              id,
              ...agencyContractProperties,
            },
            realEstateAgencyContractProperties,
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
    setIsUserModalOpen(false);
  };

  const handleDeleteUserCard = () => {
    formik.setFieldValue('agencyContractProperties.responsibleUserId', null);
    setResponsibleUser(null);
  };

  const handleSubmitObjectPicker = (object: TObjectPicker) => {
    formik.setFieldValue('agencyContractProperties.objectId', object.id);
    setObject(object);
    setIsObjectModalOpen(false);
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
    setIsAgencyContractSignatoryModalOpen(false);
  };

  const handleDeleteAgencyContractSignatoryCard = () => {
    formik.setFieldValue(
      'agencyContractProperties.agencyContractSignatoryId',
      null,
    );
    setAgencyContractSignatory(null);
  };

  useEffect(() => {
    getRealEstateAgencyContract();
  }, []);

  return (
    <>
      <Modal
        title='Выбор пользователя'
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      >
        <UserPicker onSubmit={handleSubmitUserPicker} />
      </Modal>
      <Modal
        title='Выбор объекта'
        isOpen={isObjectModalOpen}
        onClose={() => setIsObjectModalOpen(false)}
      >
        <ObjectPicker onSubmit={handleSubmitObjectPicker} />
      </Modal>
      <Modal
        title='Выбор подписанта'
        isOpen={isAgencyContractSignatoryModalOpen}
        onClose={() => setIsAgencyContractSignatoryModalOpen(false)}
      >
        <AgencyContractSignatoryPicker
          agencyId={
            getRealEstateAgencyContractData?.getAgencyContract.agency.id
          }
          onSubmit={handleSubmitSignatoryPicker}
        />
      </Modal>
      <Modal
        title=''
        isOpen={isPrintoutModalOpen}
        onClose={() => setIsPrintoutModalOpen(false)}
      >
        <Printout
          kind='ContractRealEstateAgency'
          id={id}
          callback={async () => {
            setIsPrintoutModalOpen(false);
            await getRealEstateAgencyContract();
            toast.info('Ссылка на распечатку обновлена успешно.');
          }}
        />
      </Modal>
      <BootLayout
        isLoading={
          getRealEstateAgencyContractLoading || updateAgencyContractLoading
        }
      >
        <ContentLayout title={layoutTitle}>
          <Toolbar text={toolbarTitle}>
            <Dropdown>
              <DropdownItem
                type='submit'
                name='Сохранить'
                onClick={() => formik.handleSubmit()}
              />
              <DropdownItem
                name='Создать распечатку'
                onClick={() => {
                  if (
                    !getRealEstateAgencyContractData?.getAgencyContract
                      .agencyContractSignatory
                  ) {
                    toast.error('Выберите подписанта и сохраните контракт.');
                  } else {
                    setIsPrintoutModalOpen(true);
                  }
                }}
              />
            </Dropdown>
          </Toolbar>
          <Container>
            <Form>
              <NamedGroup title='Основные данные'>
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
                  error={
                    formik.touched.agencyContractProperties
                      ?.agencyContractSignatoryId
                      ? formik.errors.agencyContractProperties
                          ?.agencyContractSignatoryId
                      : null
                  }
                  onAdd={() => setIsAgencyContractSignatoryModalOpen(true)}
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
                  error={
                    formik.touched.agencyContractProperties?.objectId
                      ? formik.errors.agencyContractProperties?.objectId
                      : null
                  }
                  onAdd={() => setIsObjectModalOpen(true)}
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
                  error={
                    formik.touched.agencyContractProperties?.responsibleUserId
                      ? formik.errors.agencyContractProperties
                          ?.responsibleUserId
                      : null
                  }
                  onAdd={() => setIsUserModalOpen(true)}
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
                prefix='realEstateAgencyContractProperties'
                values={
                  formik.values.realEstateAgencyContractProperties
                    .agencyContractCommission
                }
                touched={
                  formik.touched.realEstateAgencyContractProperties
                    ?.agencyContractCommission
                }
                errors={
                  formik.errors.realEstateAgencyContractProperties
                    ?.agencyContractCommission
                }
                onChange={formik.handleChange}
              />
              <NamedGroup title='Дополнительные данные'>
                <Input
                  label='Ссылка на распечатку'
                  disabled={true}
                  value={
                    getRealEstateAgencyContractData?.getAgencyContract
                      .agencyContractProperties.link || ''
                  }
                  linkTo={
                    getRealEstateAgencyContractData?.getAgencyContract
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
