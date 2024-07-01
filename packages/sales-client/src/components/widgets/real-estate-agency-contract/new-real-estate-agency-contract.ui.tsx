import { useLazyQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
	AgencyContractType,
	BasicAgencyContractSignatory,
} from '@/__types__/graphql';

import { TAgencyCard } from '@/components/common/agency-card/agency-card.interface';
import { AgencyCard } from '@/components/common/agency-card/agency-card.ui';
import { AgencyContractCommission } from '@/components/common/agency-contract-commission/agency-contract-commission.ui';
import { AgencyContractSignatoryCard } from '@/components/common/agency-contract-signatory-card/agency-contract-signatory-card.ui';
import { AgencyContractSignatoryPicker } from '@/components/common/agency-contract-signatory-picker/agency-contract-signatory-picker.ui';
import { AgencyPicker } from '@/components/common/agency-picker/agency-picker.ui';
import { EntityCard } from '@/components/common/entity-card/entity-card.ui';
import { GET_ENTITIES } from '@/components/common/entity-picker/entity-picker.gql';
import { TEntityPicker } from '@/components/common/entity-picker/entity-picker.interface';
import { ObjectCard } from '@/components/common/object-card/object-card.ui';
import { TObjectPicker } from '@/components/common/object-picker/object-picker.interface';
import { ObjectPicker } from '@/components/common/object-picker/object-picker.ui';
import { UserCard } from '@/components/common/user-card/user-card.ui';
import { TUserPicker } from '@/components/common/user-picker/user-picker.interface';
import { UserPicker } from '@/components/common/user-picker/user-picker.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { CardList } from '@/components/ui/card-list/card-list.ui';
import { Container } from '@/components/ui/container/container.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Loader } from '@/components/ui/loader/loader';
import { Modal } from '@/components/ui/modal/modal.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import { CREATE_AGENCY_CONTRACT } from '@/components/widgets/real-estate-agency-contract/real-estate-agency-contract.gql';
import {
	NewRealEstateAgencyContractSchema,
	validationSchema,
	initialValues,
} from '@/components/widgets/real-estate-agency-contract/real-estate-agency-contract.validation';
import { useAgencyStore } from '@/stores/agency.store';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewRealEstateAgencyContract = () => {
	const [isOpenUserModal, setIsOpenUserModal] = useState<boolean>(false);
	const [responsibleUser, setResponsibleUser] = useState<TUserPicker | null>(
		null,
	);
	const [isOpenObjectModal, setIsOpenObjectModal] = useState<boolean>(false);
	const [object, setObject] = useState<TObjectPicker | null>(null);
	const [entity, setEntity] = useState<TEntityPicker | null>(null);
	const [isOpenAgencyModal, setIsOpenAgencyModal] = useState<boolean>(false);
	const [agency, setAgency] = useState<TAgencyCard | null>(null);
	const [
		isOpenAgencyContractSignatoryModal,
		setIsOpenAgencyContractSignatoryModal,
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
					'agency_contract_properties.entity_id',
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
				navigate(
					`/agency-contract/real-estate-agency/${data.createAgencyContract.id}`,
				);
				toast.info('Контракт с агентством создан успешно.');
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const formik = useFormik<NewRealEstateAgencyContractSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			const {
				agency_contract_properties,
				real_estate_agency_contract_properties,
			} = data;
			createAgencyContract({
				variables: {
					input: normalizePayload({
						agency_contract_properties: {
							agency_contract_type: AgencyContractType.RealEstateAgencyContract,
							...agency_contract_properties,
						},
						real_estate_agency_contract_properties,
					}),
				},
			});
		},
	});

	const onSubmitUserPicker = (responsibleUser: TUserPicker) => {
		formik.setFieldValue(
			'agency_contract_properties.responsible_user_id',
			responsibleUser.id,
		);
		setResponsibleUser(responsibleUser);
		setIsOpenUserModal(false);
	};

	const onDeleteUserCard = () => {
		formik.setFieldValue(
			'agency_contract_properties.responsible_user_id',
			null,
		);
		setResponsibleUser(null);
	};

	const onSubmitObjectPicker = (object: TObjectPicker) => {
		formik.setFieldValue('agency_contract_properties.object_id', object.id);
		setObject(object);
		setIsOpenObjectModal(false);
		getEntities();
	};

	const onDeleteObjectCard = () => {
		formik.setFieldValue('agency_contract_properties.object_id', null);
		formik.setFieldValue('agency_contract_properties.entity_id', null);
		setObject(null);
		setEntity(null);
	};

	const onSubmitSignatoryPicker = (
		agencyContractSignatory: BasicAgencyContractSignatory,
	) => {
		formik.setFieldValue(
			'agency_contract_properties.agency_contract_signatory_id',
			agencyContractSignatory.id,
		);
		setAgencyContractSignatory(agencyContractSignatory);
		setIsOpenAgencyContractSignatoryModal(false);
	};

	const onDeleteAgencyContractSignatoryCard = () => {
		formik.setFieldValue(
			'agency_contract_properties.agency_contract_signatory_id',
			null,
		);
		setAgencyContractSignatory(null);
	};

	const onSubmitAgencyPicker = (agency: TAgencyCard) => {
		formik.setFieldValue('agency_contract_properties.agency_id', agency.id);
		setAgency(agency);
		setIsOpenAgencyModal(false);
	};

	const onDeleteAgencyCard = () => {
		formik.setFieldValue('agency_contract_properties.agency_id', null);
		setAgency(null);
	};

	const onDefaultCommissionValues = () => {
		formik.setFieldValue(
			'real_estate_agency_contract_properties.agency_contract_commission.percent',
			3,
		);
		formik.setFieldValue(
			'real_estate_agency_contract_properties.agency_contract_commission.threshold',
			30,
		);
		formik.setFieldValue(
			'real_estate_agency_contract_properties.agency_contract_commission.max_days',
			5,
		);
	};

	useEffect(() => {
		if (selectedAgency) {
			formik.setFieldValue(
				'agency_contract_properties.agency_id',
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
				isOpen={isOpenAgencyModal}
				onClose={() => setIsOpenAgencyModal(false)}
			>
				<AgencyPicker onSubmit={onSubmitAgencyPicker} />
			</Modal>
			<Modal
				title='Выбор пользователя'
				isOpen={isOpenUserModal}
				onClose={() => setIsOpenUserModal(false)}
			>
				<UserPicker onSubmit={onSubmitUserPicker} />
			</Modal>
			<Modal
				title='Выбор объекта'
				isOpen={isOpenObjectModal}
				onClose={() => setIsOpenObjectModal(false)}
			>
				<ObjectPicker onSubmit={onSubmitObjectPicker} />
			</Modal>
			<Modal
				title='Выбор подписанта'
				isOpen={isOpenAgencyContractSignatoryModal}
				onClose={() => setIsOpenAgencyContractSignatoryModal(false)}
			>
				<AgencyContractSignatoryPicker
					agencyId={agency?.id}
					onSubmit={onSubmitSignatoryPicker}
				/>
			</Modal>
			<BootLayout isLoading={createAgencyContractLoading}>
				<ContentLayout title='Новый контракт агентства'>
					<Toolbar text='Контракт агентства недвижимости'>
						<Button type='submit' onClick={() => formik.handleSubmit()}>
							Создать
						</Button>
					</Toolbar>
					<Container>
						<Form>
							<NamedGroup title='Агентство'>
								<CardList
									showAddButton={!agency}
									onAdd={() => setIsOpenAgencyModal(true)}
									error={
										formik.touched.agency_contract_properties?.agency_id
											? formik.errors.agency_contract_properties?.agency_id
											: null
									}
								>
									{agency && (
										<AgencyCard {...agency} onDelete={onDeleteAgencyCard} />
									)}
								</CardList>
							</NamedGroup>
							{agency && (
								<NamedGroup title='Подписант'>
									<CardList
										showAddButton={!agencyContractSignatory}
										onAdd={() => setIsOpenAgencyContractSignatoryModal(true)}
										error={
											formik.touched.agency_contract_properties
												?.agency_contract_signatory_id
												? formik.errors.agency_contract_properties
														?.agency_contract_signatory_id
												: null
										}
									>
										{agencyContractSignatory && (
											<AgencyContractSignatoryCard
												{...agencyContractSignatory}
												onDelete={onDeleteAgencyContractSignatoryCard}
											/>
										)}
									</CardList>
								</NamedGroup>
							)}
							<NamedGroup title='Объект'>
								<CardList
									showAddButton={!object}
									onAdd={() => setIsOpenObjectModal(true)}
									error={
										formik.touched.agency_contract_properties?.object_id
											? formik.errors.agency_contract_properties?.object_id
											: null
									}
								>
									{object && (
										<ObjectCard {...object} onDelete={onDeleteObjectCard} />
									)}
								</CardList>
							</NamedGroup>
							{object && (
								<NamedGroup title='Юридическое лицо'>
									{!getEntitiesLoading ? (
										<CardList
											showAddButton={false}
											error={
												formik.touched.agency_contract_properties?.entity_id
													? formik.errors.agency_contract_properties?.entity_id
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
										formik.touched.agency_contract_properties
											?.responsible_user_id
											? formik.errors.agency_contract_properties
													?.responsible_user_id
											: null
									}
								>
									{responsibleUser && (
										<UserCard
											{...responsibleUser}
											onDelete={onDeleteUserCard}
										/>
									)}
								</CardList>
							</NamedGroup>
							<AgencyContractCommission
								prefix='real_estate_agency_contract_properties'
								values={
									formik.values.real_estate_agency_contract_properties
										.agency_contract_commission
								}
								touched={
									formik.touched.real_estate_agency_contract_properties
										?.agency_contract_commission
								}
								errors={
									formik.errors.real_estate_agency_contract_properties
										?.agency_contract_commission
								}
								handleChange={formik.handleChange}
								onDefaultValues={onDefaultCommissionValues}
							/>
						</Form>
					</Container>
				</ContentLayout>
			</BootLayout>
		</>
	);
};
