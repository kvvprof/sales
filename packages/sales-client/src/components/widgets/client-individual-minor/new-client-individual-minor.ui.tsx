import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ClientCategory } from '@/__types__/graphql';
import {
	IClientCard,
	TClientCard,
} from '@/components/common/client-card/client-card.interface';
import { ClientCard } from '@/components/common/client-card/client-card.ui';
import { ClientPassport } from '@/components/common/client-passport/client-passport.ui';
import { TClientPicker } from '@/components/common/client-picker/client-picker.interface';
import { ClientPicker } from '@/components/common/client-picker/client-picker.ui';
import { ClientProperties } from '@/components/common/client-properties/client-properties.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { CardList } from '@/components/ui/card-list/card-list.ui';
import { Container } from '@/components/ui/container/container.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Input } from '@/components/ui/input/input.ui';
import { Modal } from '@/components/ui/modal/modal.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import { CREATE_CLIENT_INDIVIDUAL_MINOR } from '@/components/widgets/client-individual-minor/client-individual-minor.gql';
import {
	initialValues,
	validationSchema,
	ClientIndividualMinorSchema,
} from '@/components/widgets/client-individual-minor/client-individual-minor.validation';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewClientIndividualMinor = () => {
	const navigate = useNavigate();
	const [isOpenRepresentativeModal, setIsOpenRepresentativeModal] =
		useState(false);
	const [representatives, setRepresentatives] = useState<
		Omit<IClientCard<TClientPicker>, 'onDelete'>[]
	>([]);

	const [createClient, { loading: createClientLoading }] = useMutation(
		CREATE_CLIENT_INDIVIDUAL_MINOR,
		{
			onCompleted(data) {
				navigate(`/client/individual-minor/${data.createClient.id}`);
				toast.info('Клиент создан успешно.');
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<ClientIndividualMinorSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createClient({
				variables: {
					input: normalizePayload({
						client_properties: {
							...data.client_properties,
							client_category: ClientCategory.IndividualMinor,
						},
						client_individual_minor_properties:
							data.client_individual_minor_properties,
					}),
				},
			});
		},
	});

	const onDeleteRepresentative = (representative: TClientCard) => {
		formik.setFieldValue(
			'client_individual_minor_properties.representative_ids',
			formik.values.client_individual_minor_properties.representative_ids.filter(
				(id) => id !== representative.id,
			),
		);
		setRepresentatives(
			representatives.filter((r) => r.id !== representative.id),
		);
	};

	const onSubmitClientPicker = (client: TClientPicker) => {
		if (client.client_category !== ClientCategory.Individual) {
			toast.error('Представитель должен быть физическим лицом.');
			return;
		}

		formik.setFieldValue(
			'client_individual_minor_properties.representative_ids',
			[
				...new Set([
					...formik.values.client_individual_minor_properties
						.representative_ids,
					client.id,
				]),
			],
		);

		setRepresentatives((state) => {
			const clientExists = state.some((c) => c.id === client.id);
			return !clientExists ? [...state, { ...client, payload: client }] : state;
		});

		setIsOpenRepresentativeModal(false);
	};

	return (
		<>
			<Modal
				title='Выбор представителя'
				isOpen={isOpenRepresentativeModal}
				onClose={() => setIsOpenRepresentativeModal(false)}
			>
				<ClientPicker onSubmit={onSubmitClientPicker} />
			</Modal>
			<BootLayout isLoading={createClientLoading}>
				<ContentLayout title='Новый клиент'>
					<Toolbar text='Физическое лицо несовершеннолетний'>
						<Button type='submit' onClick={() => formik.handleSubmit()}>
							Создать
						</Button>
					</Toolbar>
					<Container>
						<Form>
							<NamedGroup title='Представители'>
								<CardList onAdd={() => setIsOpenRepresentativeModal(true)}>
									{representatives.map((representative) => (
										<ClientCard
											key={representative.id}
											{...representative}
											onDelete={() => onDeleteRepresentative(representative)}
										/>
									))}
								</CardList>
							</NamedGroup>
							<ClientProperties
								values={formik.values.client_properties}
								handleChange={formik.handleChange}
								touched={formik.touched.client_properties}
								errors={formik.errors.client_properties}
							/>
							<NamedGroup title='Дополнительные данные'>
								<Input
									label='Дата рождения'
									type='date'
									name='client_individual_minor_properties.dob'
									value={formik.values.client_individual_minor_properties.dob}
									onChange={formik.handleChange}
								/>
								<Input
									label='СНИЛС'
									name='client_individual_minor_properties.snils'
									value={formik.values.client_individual_minor_properties.snils}
									onChange={formik.handleChange}
								/>
								<Input
									label='Свидетельство о рождении'
									name='client_individual_minor_properties.birth_certificate'
									value={
										formik.values.client_individual_minor_properties
											.birth_certificate
									}
									onChange={formik.handleChange}
								/>
							</NamedGroup>
							<ClientPassport
								prefix='client_individual_minor_properties'
								values={
									formik.values.client_individual_minor_properties
										.client_passport
								}
								handleChange={formik.handleChange}
							/>
						</Form>
					</Container>
				</ContentLayout>
			</BootLayout>
		</>
	);
};
