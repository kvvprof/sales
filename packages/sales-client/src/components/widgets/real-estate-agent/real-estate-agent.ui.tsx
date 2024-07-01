import { useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { TAgencyCard } from '@/components/common/agency-card/agency-card.interface';
import { AgencyCard } from '@/components/common/agency-card/agency-card.ui';
import { AgencyPicker } from '@/components/common/agency-picker/agency-picker.ui';
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
import {
	RealEstateAgentSchema,
	initialValues,
	validationSchema,
} from '@/components/widgets/real-estate-agent/new-real-estate-agent.validation';
import {
	GET_REAL_ESTATE_AGENT,
	UPDATE_REAL_ESTATE_AGENT,
} from '@/components/widgets/real-estate-agent/real-estate-agent.gql';
import { IRealEstateAgent } from '@/components/widgets/real-estate-agent/real-estate-agent.interface';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const RealEstateAgent = ({ id }: IRealEstateAgent) => {
	const [layoutTitle, setLayoutTitle] = useState<string>('');
	const navigate = useNavigate();
	const [isOpenAgencyModal, setIsOpenAgencyModal] = useState<boolean>(false);
	const [agencies, setAgencies] = useState<TAgencyCard[]>([]);

	const { loading: getRealEstateAgentLoading } = useQuery(
		GET_REAL_ESTATE_AGENT,
		{
			variables: { input: { id } },
			onCompleted(data) {
				formik.setValues({
					full_name: data.getRealEstateAgent.real_estate_agent.full_name || '',
					phone: data.getRealEstateAgent.real_estate_agent.phone || '',
					agency_ids:
						data.getRealEstateAgent.agencies.map(({ id }) => id) || [],
				});
				setLayoutTitle(data.getRealEstateAgent.real_estate_agent.full_name);
				setAgencies(
					data.getRealEstateAgent.agencies.map(({ id, name }) => ({
						id,
						name,
					})),
				);
			},
			onError(error) {
				navigate('/', { replace: true });
				toast.error(error.message);
			},
		},
	);

	const [updateRealEstateAgent, { loading: realEstateAgentLoading }] =
		useMutation(UPDATE_REAL_ESTATE_AGENT, {
			onCompleted(data) {
				setLayoutTitle(data.updateRealEstateAgent.full_name);
				toast.info('Агент обновлен успешно.');
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const formik = useFormik<RealEstateAgentSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			updateRealEstateAgent({
				variables: { input: normalizePayload({ id, ...data }) },
			});
		},
	});

	const onSubmitAgencyPicker = (agency: TAgencyCard) => {
		formik.setFieldValue('agency_ids', [
			...new Set([...formik.values.agency_ids, agency.id]),
		]);

		setAgencies((state) => {
			const agencyExists = state.some((a) => a.id === agency.id);
			return !agencyExists ? [...state, agency] : state;
		});

		setIsOpenAgencyModal(false);
	};

	const onDeleteAgencyCard = (id: number) => {
		formik.setFieldValue(
			'agency_ids',
			formik.values.agency_ids.filter((agencyId) => agencyId !== id),
		);
		setAgencies((state) => state.filter((agency) => agency.id !== id));
	};

	return (
		<>
			<Modal
				title='Выбор агентства'
				isOpen={isOpenAgencyModal}
				onClose={() => setIsOpenAgencyModal(false)}
			>
				<AgencyPicker onSubmit={onSubmitAgencyPicker} />
			</Modal>
			<BootLayout
				isLoading={getRealEstateAgentLoading || realEstateAgentLoading}
			>
				<ContentLayout title={layoutTitle}>
					<Toolbar text='Агент по недвижимости'>
						<Button type='submit' onClick={() => formik.handleSubmit()}>
							Сохранить
						</Button>
					</Toolbar>
					<Container>
						<Form>
							<NamedGroup title='Данные'>
								<Input
									label='ФИО'
									name='full_name'
									value={formik.values.full_name}
									error={
										formik.touched.full_name ? formik.errors.full_name : null
									}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
								<Input
									label='Телефон'
									name='phone'
									value={formik.values.phone}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
								/>
							</NamedGroup>
							<NamedGroup title='Агентства'>
								<CardList onAdd={() => setIsOpenAgencyModal(true)}>
									{agencies.map((agency) => (
										<AgencyCard
											key={agency.id}
											{...agency}
											onDelete={() => onDeleteAgencyCard(agency.id)}
										/>
									))}
								</CardList>
							</NamedGroup>
						</Form>
					</Container>
				</ContentLayout>
			</BootLayout>
		</>
	);
};
