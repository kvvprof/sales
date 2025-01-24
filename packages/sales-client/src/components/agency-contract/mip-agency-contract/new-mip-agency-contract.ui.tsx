import { useLazyQuery, useMutation } from '@apollo/client';
import { format } from 'date-fns';
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
  Button,
  CardList,
  Container,
  ContentLayout,
  DatePickerUI,
  Form,
  Loader,
  Modal,
  NamedGroup,
  normalizePayload,
  Toolbar,
  useAgencyStore,
} from '@/common';
import { TAgencyCard } from '@/components/agency/agency-card/agency-card.interface';
import { AgencyCard } from '@/components/agency/agency-card/agency-card.ui';
import { AgencyPicker } from '@/components/agency/agency-picker/agency-picker.ui';
import { AgencyContractCommission } from '@/components/agency-contract/agency-contract-commission/agency-contract-commission.ui';
import { AgencyContractSignatoryCard } from '@/components/agency-contract/agency-contract-signatory-card/agency-contract-signatory-card.ui';
import { AgencyContractSignatoryPicker } from '@/components/agency-contract/agency-contract-signatory-picker/agency-contract-signatory-picker.ui';
import { CREATE_AGENCY_CONTRACT } from '@/components/agency-contract/mip-agency-contract/mip-agency-contract.gql';
import {
  initialValues,
  MipAgencyContractSchema,
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

export const NewMipAgencyContract = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState<boolean>(false);
  const [responsibleUser, setResponsibleUser] = useState<TUserPicker | null>(
    null,
  );
  const [isObjectModalOpen, setIsObjectModalOpen] = useState<boolean>(false);
  const [object, setObject] = useState<TObjectPicker | null>(null);
  const [entity, setEntity] = useState<TEntityPicker | null>(null);
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState<boolean>(false);
  const [agency, setAgency] = useState<TAgencyCard | null>(null);
  const [
    isAgencyContractSignatoryModalOpen,
    setIsAgencyContractSignatoryModalOpen,
  ] = useState<boolean>(false);
  const [agencyContractSignatory, setAgencyContractSignatory] =
    useState<BasicAgencyContractSignatory | null>(null);
  const navigate = useNavigate();
  const selectedAgency = useAgencyStore((state) => state.agency);
  const setSelectedAgency = useAgencyStore((state) => state.setAgency);

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

  const [createAgencyContract, { loading: createAgencyContractLoading }] =
    useMutation(CREATE_AGENCY_CONTRACT, {
      onCompleted(data) {
        navigate(`/agency-contract/mip-agency/${data.createAgencyContract.id}`);
        toast.info('Контракт с агентством создан успешно.');
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
      createAgencyContract({
        variables: {
          input: normalizePayload({
            agencyContractProperties: {
              agencyContractType: AgencyContractType.MipAgencyContract,
              ...agencyContractProperties,
              number: undefined,
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

  const handleSubmitAgencyPicker = (agency: TAgencyCard) => {
    formik.setFieldValue('agencyContractProperties.agencyId', agency.id);
    setAgency(agency);
    setIsAgencyModalOpen(false);
  };

  const handleDeleteAgencyCard = () => {
    formik.setFieldValue('agencyContractProperties.agencyId', null);
    setAgency(null);
  };

  const handleDefaultCommissionValues = () => {
    formik.setFieldValue(
      'mipAgencyContractProperties.agencyContractCommission.percent',
      4,
    );
    formik.setFieldValue(
      'mipAgencyContractProperties.agencyContractCommission.threshold',
      0,
    );
    formik.setFieldValue(
      'mipAgencyContractProperties.agencyContractCommission.maxDays',
      5,
    );
  };

  useEffect(() => {
    formik.setFieldValue('agencyContractProperties.number', 'null');
    formik.setFieldValue(
      'agencyContractProperties.date',
      format(new Date(), 'yyyy-MM-dd'),
    );

    if (selectedAgency) {
      formik.setFieldValue(
        'agencyContractProperties.agencyId',
        selectedAgency.id,
      );
      setAgency(selectedAgency);
    }

    return () => {
      setSelectedAgency(null);
    };
  }, []);

  return (
    <>
      <Modal
        title='Выбор агентства'
        isOpen={isAgencyModalOpen}
        onClose={() => setIsAgencyModalOpen(false)}
      >
        <AgencyPicker onSubmit={handleSubmitAgencyPicker} />
      </Modal>
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
          agencyId={agency?.id}
          onSubmit={handleSubmitSignatoryPicker}
        />
      </Modal>
      <BootLayout isLoading={createAgencyContractLoading}>
        <ContentLayout title='Новый контракт агентства'>
          <Toolbar text='Контракт агентства МиП'>
            <Button type='submit' onClick={() => formik.handleSubmit()}>
              Создать
            </Button>
          </Toolbar>
          <Container>
            <Form>
              <NamedGroup title='Основные данные'>
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
                <CardList
                  showAddButton={!agency}
                  onAdd={() => setIsAgencyModalOpen(true)}
                  error={
                    formik.touched.agencyContractProperties?.agencyId
                      ? formik.errors.agencyContractProperties?.agencyId
                      : null
                  }
                >
                  {agency && (
                    <AgencyCard {...agency} onDelete={handleDeleteAgencyCard} />
                  )}
                </CardList>
              </NamedGroup>
              {agency && (
                <NamedGroup title='Подписант'>
                  <CardList
                    showAddButton={!agencyContractSignatory}
                    onAdd={() => setIsAgencyContractSignatoryModalOpen(true)}
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
              )}
              <NamedGroup title='Объект'>
                <CardList
                  showAddButton={!object}
                  onAdd={() => setIsObjectModalOpen(true)}
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
                  onAdd={() => setIsUserModalOpen(true)}
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
                handleDefaultValues={handleDefaultCommissionValues}
              />
            </Form>
          </Container>
        </ContentLayout>
      </BootLayout>
    </>
  );
};
