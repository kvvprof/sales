import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
	BasicBank,
	BasicClientContractToClient,
	ClientContractType,
} from '@/__types__/graphql';
import { TAgencyContractCard } from '@/components/common/agency-contract-card/agency-contract-card.interface';
import { AgencyContractCard } from '@/components/common/agency-contract-card/agency-contract-card.ui';
import { AgencyContractPicker } from '@/components/common/agency-contract-picker/agency-contract-picker.ui';
import { BankCard } from '@/components/common/bank-card/bank-card.ui';
import { BankPicker } from '@/components/common/bank-picker/bank-picker.ui';
import {
	IClientCard,
	TClientCard,
} from '@/components/common/client-card/client-card.interface';
import { ClientCard } from '@/components/common/client-card/client-card.ui';
import { TClientPicker } from '@/components/common/client-picker/client-picker.interface';
import { ClientPicker } from '@/components/common/client-picker/client-picker.ui';
import { TProductCard } from '@/components/common/product-card/product-card.interface';
import { ProductCard } from '@/components/common/product-card/product-card.ui';
import { ProductInfo } from '@/components/common/product-info/product-info.ui';
import { ProductPicker } from '@/components/common/product-picker/product-picker.ui';
import { TRealEstateAgentCard } from '@/components/common/real-estate-agent-card/real-estate-agent-card.interface';
import { RealEstateAgentCard } from '@/components/common/real-estate-agent-card/real-estate-agent-card.ui';
import { RealEstateAgentPicker } from '@/components/common/real-estate-agent-picker/real-estate-agent-picker.ui';
import { UserCard } from '@/components/common/user-card/user-card.ui';
import { TUserPicker } from '@/components/common/user-picker/user-picker.interface';
import { UserPicker } from '@/components/common/user-picker/user-picker.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { CardList } from '@/components/ui/card-list/card-list.ui';
import { Checkbox } from '@/components/ui/checkbox/checkbox.ui';
import { Container } from '@/components/ui/container/container.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Input } from '@/components/ui/input/input.ui';
import { Modal } from '@/components/ui/modal/modal.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import { CREATE_CLIENT_CONTRACT } from '@/components/widgets/ddu-client-contract/ddu-client-contract.gql';
import {
	DDUClientContractSchema,
	initialValues,
	validationSchema,
} from '@/components/widgets/ddu-client-contract/ddu-client-contract.validation';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewDDUClientContract = () => {
	const [isOpenClientModal, setIsOpenClientModal] = useState(false);
	const [clients, setClients] = useState<
		Omit<IClientCard<BasicClientContractToClient>, 'onDelete'>[]
	>([]);
	const [isOpenProductModal, setIsOpenProductModal] = useState(false);
	const [isOpenProductInfoModal, setIsOpenProductInfoModal] = useState(false);
	const [product, setProduct] = useState<TProductCard | null>(null);
	const [isOpenUserModal, setIsOpenUserModal] = useState<boolean>(false);
	const [manager, setManager] = useState<TUserPicker | null>(null);
	const [isOpenRealEstateAgentModal, setIsOpenRealEstateAgentModal] =
		useState(false);
	const [realEstateAgent, setRealEstateAgent] =
		useState<TRealEstateAgentCard | null>(null);
	const [isOpenBankModal, setIsOpenBankModal] = useState<boolean>(false);
	const [bank, setBank] = useState<BasicBank | null>(null);
	const [isOpenAgencyContractModal, setIsOpenAgencyContractModal] =
		useState<boolean>(false);
	const [agencyContracts, setAgencyContracts] = useState<TAgencyContractCard[]>(
		[],
	);
	const navigate = useNavigate();

	const [createClientContract, { loading: createClientContractLoading }] =
		useMutation(CREATE_CLIENT_CONTRACT, {
			onCompleted(data) {
				navigate(`/client-contract/ddu/${data.createClientContract.id}`);
				toast.info('Контракт клиента создан успешно.');
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const formik = useFormik<DDUClientContractSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			const negativeShares = data.client_contract_properties.clients.find(
				({ share }) => share && share < 0,
			);

			if (negativeShares) {
				toast.error('Доля не может быть отрицательной.');
				return;
			}

			const shares = data.client_contract_properties.clients.reduce(
				(acc, data) => acc + (data.share || 0),
				0,
			);

			if (shares !== 100 && shares !== 0) {
				toast.error('Доли распределены некорректно.');
				return;
			}

			createClientContract({
				variables: {
					input: normalizePayload({
						client_contract_properties: {
							...data.client_contract_properties,
							client_contract_type: ClientContractType.Ddu,
						},
						ddu_client_contract_properties: data.ddu_client_contract_properties,
					}),
				},
			});
		},
	});

	const onSubmitClientPicker = (client: TClientPicker) => {
		const clientExists = clients.some((c) => c.id === client.id);

		if (!clientExists) {
			formik.setFieldValue('client_contract_properties.clients', [
				...formik.values.client_contract_properties.clients,
				{ client_id: client.id, is_main: false, share: 0 },
			]);

			setClients([
				...clients,
				{
					...client,
					payload: { client: client, is_main: false, share: 0 },
				},
			]);
		}

		setIsOpenClientModal(false);
	};

	const onDeleteClient = (client: TClientCard) => {
		const filteredClients =
			formik.values.client_contract_properties.clients.filter(
				(c) => c.client_id !== client.id,
			);

		if (filteredClients.length === 1) {
			const updatedClients = filteredClients.map((client, index) => {
				if (index === 0) {
					return {
						...client,
						share: 0,
						is_main: false,
					};
				}
				return client;
			});

			formik.setFieldValue(
				'client_contract_properties.clients',
				updatedClients,
			);
		} else {
			formik.setFieldValue(
				'client_contract_properties.clients',
				filteredClients,
			);
		}

		setClients((state) => {
			const filteredClients = state.filter((c) => c.id !== client.id);

			if (filteredClients.length === 1) {
				return filteredClients.map((client, index) => {
					if (index === 0) {
						return {
							...client,
							payload: { ...client.payload, is_main: false, share: 0 },
						};
					}
					return client;
				});
			}

			return filteredClients;
		});
	};

	const onSubmitProductPicker = (product: TProductCard) => {
		formik.setFieldValue(
			'client_contract_properties.product_id',
			product.product.id,
		);
		setProduct(product);
		setIsOpenProductModal(false);
	};

	const onDeleteProduct = () => {
		formik.setFieldValue('client_contract_properties.product_id', null);
		setProduct(null);
		setIsOpenProductInfoModal(false);
	};

	const onSubmitUserPicker = (user: TUserPicker) => {
		formik.setFieldValue('client_contract_properties.manager_id', user.id);
		setManager(user);
		setIsOpenUserModal(false);
	};

	const onDeleteUserCard = () => {
		formik.setFieldValue('client_contract_properties.manager_id', null);
		setManager(null);
	};

	const onSubmitRealEstateAgentPicker = (
		realEstateAgent: TRealEstateAgentCard,
	) => {
		formik.setFieldValue(
			'client_contract_properties.real_estate_agent_id',
			realEstateAgent.id,
		);
		setRealEstateAgent(realEstateAgent);
		setIsOpenRealEstateAgentModal(false);
	};

	const onDeleteRealEstateAgentCard = () => {
		formik.setFieldValue(
			'client_contract_properties.real_estate_agent_id',
			null,
		);
		setRealEstateAgent(null);
	};

	const onSubmitBankPicker = (bank: BasicBank) => {
		formik.setFieldValue('client_contract_properties.bank_id', bank.id);
		setBank(bank);
		setIsOpenBankModal(false);
	};

	const onDeleteBankCard = () => {
		formik.setFieldValue('client_contract_properties.bank_id', null);
		setBank(null);
	};

	const onSubmitAgencyContract = (agencyContract: TAgencyContractCard) => {
		formik.setFieldValue('client_contract_properties.agency_contract_ids', [
			...new Set([
				...formik.values.client_contract_properties.agency_contract_ids,
				agencyContract.agency_contract_properties.id,
			]),
		]);

		setAgencyContracts((state) => {
			const agencyContractExists = state.some(
				(a) =>
					a.agency_contract_properties.id ===
					agencyContract.agency_contract_properties.id,
			);
			return !agencyContractExists ? [...state, agencyContract] : state;
		});

		setIsOpenAgencyContractModal(false);
	};

	const onDeleteAgencyContractCard = (agencyContract: TAgencyContractCard) => {
		formik.setFieldValue(
			'client_contract_properties.agency_contract_ids',
			formik.values.client_contract_properties.agency_contract_ids.filter(
				(c) => c !== agencyContract.agency_contract_properties.id,
			),
		);
		setAgencyContracts((state) =>
			state.filter(
				(c) =>
					c.agency_contract_properties.id !==
					agencyContract.agency_contract_properties.id,
			),
		);
	};

	const inChangeEscrowDiscount = () => {
		formik.setFieldValue(
			'ddu_client_contract_properties.is_escrow_discount',
			!formik.values.ddu_client_contract_properties.is_escrow_discount,
		);
	};

	const onIsClientMainChange = (client: TClientCard) => {
		formik.setFieldValue(
			'client_contract_properties.clients',
			formik.values.client_contract_properties.clients.map((c) =>
				c.client_id === client.id
					? { ...c, is_main: true }
					: { ...c, is_main: false },
			),
		);

		setClients((state) =>
			state.map((c) =>
				c.id === client.id
					? { ...c, payload: { ...c.payload, is_main: true } }
					: { ...c, payload: { ...c.payload, is_main: false } },
			),
		);
	};

	const onClientShareChange = (
		event: React.ChangeEvent<HTMLInputElement>,
		client: TClientCard,
	) => {
		formik.setFieldValue(
			'client_contract_properties.clients',
			formik.values.client_contract_properties.clients.map((c) =>
				c.client_id === client.id
					? {
							...c,
							share: parseInt(event.target.value, 10),
						}
					: c,
			),
		);

		setClients((state) =>
			state.map((c) =>
				c.id === client.id
					? {
							...c,
							payload: {
								...c.payload,
								share: parseInt(event.target.value),
							},
						}
					: c,
			),
		);
	};

	return (
		<>
			<Modal
				title='Выбор клиента'
				isOpen={isOpenClientModal}
				onClose={() => setIsOpenClientModal(false)}
			>
				<ClientPicker onSubmit={onSubmitClientPicker} />
			</Modal>
			<Modal
				title='Выбор продукта'
				isOpen={isOpenProductModal}
				onClose={() => setIsOpenProductModal(false)}
			>
				<ProductPicker onSubmit={onSubmitProductPicker} />
			</Modal>
			<Modal
				title='Информация о продукте'
				isOpen={isOpenProductInfoModal}
				onClose={() => setIsOpenProductInfoModal(false)}
			>
				<ProductInfo id={product?.product.pricing_products_id} />
			</Modal>
			<Modal
				title='Выбор менеджера'
				isOpen={isOpenUserModal}
				onClose={() => setIsOpenUserModal(false)}
			>
				<UserPicker onSubmit={onSubmitUserPicker} />
			</Modal>
			<Modal
				title='Выбор агента по недвижимости'
				isOpen={isOpenRealEstateAgentModal}
				onClose={() => setIsOpenRealEstateAgentModal(false)}
			>
				<RealEstateAgentPicker onSubmit={onSubmitRealEstateAgentPicker} />
			</Modal>
			<Modal
				title='Выбор банка'
				isOpen={isOpenBankModal}
				onClose={() => setIsOpenBankModal(false)}
			>
				<BankPicker onSubmit={onSubmitBankPicker} />
			</Modal>
			<Modal
				title='Выбор контракта агентства'
				isOpen={isOpenAgencyContractModal}
				onClose={() => setIsOpenAgencyContractModal(false)}
			>
				<AgencyContractPicker
					object_id={product?.object.id}
					onSubmit={onSubmitAgencyContract}
				/>
			</Modal>
			<BootLayout isLoading={createClientContractLoading}>
				<ContentLayout title='Новый контракт клиента'>
					<Toolbar text='ДДУ'>
						<Button type='submit' onClick={() => formik.handleSubmit()}>
							Создать
						</Button>
					</Toolbar>
					<Container>
						<Form>
							<NamedGroup title='Клиенты'>
								<CardList
									onAdd={() => setIsOpenClientModal(true)}
									error={
										formik.touched.client_contract_properties?.clients
											? (formik.errors.client_contract_properties
													?.clients as string)
											: null
									}
								>
									{clients.map((client) => (
										<div className='flex flex-col gap-2' key={client.id}>
											<ClientCard
												{...client}
												onDelete={() => onDeleteClient(client)}
											/>
											{clients.length > 1 && (
												<div className='border-1 border-c-inactive hover:border-c-text-primary hover:text-c-text-primary flex flex-col gap-2 rounded-lg border-dashed p-2'>
													<Checkbox
														label='основной клиент'
														checked={client.payload?.is_main || false}
														onChange={() => onIsClientMainChange(client)}
													/>
													<Input
														type='number'
														placeholder='Доля %'
														value={client.payload?.share || 0}
														onChange={(
															event: React.ChangeEvent<HTMLInputElement>,
														) => onClientShareChange(event, client)}
													/>
												</div>
											)}
										</div>
									))}
								</CardList>
							</NamedGroup>
							<NamedGroup title='Продукт'>
								<CardList
									showAddButton={!product}
									onAdd={() => setIsOpenProductModal(true)}
									error={
										formik.touched.client_contract_properties?.product_id
											? formik.errors.client_contract_properties?.product_id
											: null
									}
								>
									{product && (
										<ProductCard
											{...product}
											onClick={() => setIsOpenProductInfoModal(true)}
											onDelete={onDeleteProduct}
										/>
									)}
								</CardList>
							</NamedGroup>
							{product && (
								<NamedGroup title='Контракты агентств'>
									<CardList onAdd={() => setIsOpenAgencyContractModal(true)}>
										{agencyContracts.map((agencyContract) => (
											<AgencyContractCard
												key={agencyContract.agency_contract_properties.id}
												{...agencyContract}
												onDelete={() =>
													onDeleteAgencyContractCard(agencyContract)
												}
											/>
										))}
									</CardList>
								</NamedGroup>
							)}
							<NamedGroup title='Банк'>
								<CardList
									showAddButton={!bank}
									onAdd={() => setIsOpenBankModal(true)}
								>
									{bank && <BankCard {...bank} onDelete={onDeleteBankCard} />}
								</CardList>
							</NamedGroup>
							<NamedGroup title='Менеджер'>
								<CardList
									showAddButton={!manager}
									error={
										formik.touched.client_contract_properties?.manager_id
											? formik.errors.client_contract_properties?.manager_id
											: null
									}
									onAdd={() => setIsOpenUserModal(true)}
								>
									{manager && (
										<UserCard {...manager} onDelete={onDeleteUserCard} />
									)}
								</CardList>
							</NamedGroup>
							<NamedGroup title='Агент по недвижимости'>
								<CardList
									showAddButton={!realEstateAgent}
									onAdd={() => setIsOpenRealEstateAgentModal(true)}
								>
									{realEstateAgent && (
										<RealEstateAgentCard
											{...realEstateAgent}
											onDelete={onDeleteRealEstateAgentCard}
										/>
									)}
								</CardList>
							</NamedGroup>
							<Input
								label='Номер'
								name='client_contract_properties.number'
								value={formik.values.client_contract_properties.number}
								error={
									formik.touched.client_contract_properties?.number
										? formik.errors.client_contract_properties?.number
										: null
								}
								onChange={formik.handleChange}
							/>
							<Input
								label='Дата'
								type='date'
								name='client_contract_properties.date'
								value={formik.values.client_contract_properties.date}
								error={
									formik.touched.client_contract_properties?.date
										? formik.errors.client_contract_properties?.date
										: null
								}
								onChange={formik.handleChange}
							/>
							<Input
								label='Дата регистрации'
								type='date'
								name='client_contract_properties.registration_date'
								value={
									formik.values.client_contract_properties.registration_date
								}
								error={
									formik.touched.client_contract_properties?.registration_date
										? formik.errors.client_contract_properties
												?.registration_date
										: null
								}
								onChange={formik.handleChange}
							/>
							<Input
								label='Стоимость'
								name='client_contract_properties.price'
								type='number'
								step='0.01'
								value={formik.values.client_contract_properties.price}
								error={
									formik.touched.client_contract_properties?.price
										? formik.errors.client_contract_properties?.price
										: null
								}
								onChange={formik.handleChange}
							/>
							<Input
								label='Ссылка на ДДУ'
								name='ddu_client_contract_properties.ddu_link'
								value={formik.values.ddu_client_contract_properties.ddu_link}
								error={
									formik.touched.ddu_client_contract_properties?.ddu_link
										? formik.errors.ddu_client_contract_properties?.ddu_link
										: null
								}
								linkTo={formik.values.ddu_client_contract_properties.ddu_link}
								onChange={formik.handleChange}
							/>
							<Input
								label='Возвратный счет'
								name='ddu_client_contract_properties.return_account'
								value={
									formik.values.ddu_client_contract_properties.return_account
								}
								error={
									formik.touched.ddu_client_contract_properties?.return_account
										? formik.errors.ddu_client_contract_properties
												?.return_account
										: null
								}
								onChange={formik.handleChange}
							/>

							<NamedGroup title='Эскроу'>
								<div className='flex'>
									<Checkbox
										label='Эскроу дисконт'
										checked={
											formik.values.ddu_client_contract_properties
												.is_escrow_discount
										}
										error={
											formik.touched.ddu_client_contract_properties
												?.is_escrow_discount
												? formik.errors.ddu_client_contract_properties
														?.is_escrow_discount
												: null
										}
										onChange={inChangeEscrowDiscount}
									/>
								</div>
								<Input
									label='Номер счета эскроу'
									name='ddu_client_contract_properties.escrow_account_number'
									value={
										formik.values.ddu_client_contract_properties
											.escrow_account_number
									}
									error={
										formik.touched.ddu_client_contract_properties
											?.escrow_account_number
											? formik.errors.ddu_client_contract_properties
													?.escrow_account_number
											: null
									}
									onChange={formik.handleChange}
								/>
								<Input
									label='Дата открытия счета эскроу'
									type='date'
									name='ddu_client_contract_properties.escrow_account_opening_date'
									value={
										formik.values.ddu_client_contract_properties
											.escrow_account_opening_date
									}
									error={
										formik.touched.ddu_client_contract_properties
											?.escrow_account_opening_date
											? formik.errors.ddu_client_contract_properties
													?.escrow_account_opening_date
											: null
									}
									onChange={formik.handleChange}
								/>
								<Input
									label='Срок условного депонирования'
									type='date'
									name='ddu_client_contract_properties.escrow_period'
									value={
										formik.values.ddu_client_contract_properties.escrow_period
									}
									error={
										formik.touched.ddu_client_contract_properties?.escrow_period
											? formik.errors.ddu_client_contract_properties
													?.escrow_period
											: null
									}
									onChange={formik.handleChange}
								/>
							</NamedGroup>
						</Form>
					</Container>
				</ContentLayout>
			</BootLayout>
		</>
	);
};
