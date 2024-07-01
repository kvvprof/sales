import { useMutation } from '@apollo/client';
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
import { CREATE_REAL_ESTATE_AGENT } from '@/components/widgets/real-estate-agent/real-estate-agent.gql';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewRealEstateAgent = () => {
	const [isOpenAgencyModal, setIsOpenAgencyModal] = useState<boolean>(false);
	const [agencies, setAgencies] = useState<TAgencyCard[]>([]);
	const navigate = useNavigate();

	const [createRealEstateAgent, { loading: createRealEstateAgentLoading }] =
		useMutation(CREATE_REAL_ESTATE_AGENT, {
			onCompleted(data) {
				navigate(`/real-estate-agent/${data.createRealEstateAgent.id}`);
				toast.info('Агент создан успешно.');
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const formik = useFormik<RealEstateAgentSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createRealEstateAgent({
				variables: {
					input: normalizePayload(data),
				},
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

	const onDeleteCard = (id: number) => {
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
			<BootLayout isLoading={createRealEstateAgentLoading}>
				<ContentLayout title='Новый агент'>
					<Toolbar text='Агент по недвижимости'>
						<Button type='submit' onClick={() => formik.handleSubmit()}>
							Создать
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
											onDelete={() => onDeleteCard(agency.id)}
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
