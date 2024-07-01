import { useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ClientPassport } from '@/components/common/client-passport/client-passport.ui';
import { ClientProperties } from '@/components/common/client-properties/client-properties.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Container } from '@/components/ui/container/container.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Input } from '@/components/ui/input/input.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import {
	GET_CLIENT_INDIVIDUAL,
	UPDATE_CLIENT_INDIVIDUAL,
} from '@/components/widgets/client-individual/client-individual.gql';
import { IClientIndividual } from '@/components/widgets/client-individual/client-individual.interface';
import {
	initialValues,
	validationSchema,
	ClientIndividualSchema,
} from '@/components/widgets/client-individual/client-individual.validation';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const ClientIndividual = ({ id }: IClientIndividual) => {
	const [layoutTitle, setLayoutTitle] = useState<string>('');
	const navigate = useNavigate();

	const { loading: getClientIndividualLoading } = useQuery(
		GET_CLIENT_INDIVIDUAL,
		{
			variables: { input: { id } },
			onCompleted(data) {
				formik.setValues({
					client_properties: {
						full_name: data.getClient.client_properties.full_name || '',
						address: data.getClient.client_properties.address || '',
						email: data.getClient.client_properties.email || '',
						inn: data.getClient.client_properties.inn || '',
						phone: data.getClient.client_properties.phone || '',
					},
					client_individual_properties: {
						dob: data.getClient.client_individual_properties?.dob || '',
						snils: data.getClient.client_individual_properties?.snils || '',
						client_passport: {
							code:
								data.getClient.client_individual_properties?.client_passport
									?.code || '',
							issued:
								data.getClient.client_individual_properties?.client_passport
									?.issued || '',
							number:
								data.getClient.client_individual_properties?.client_passport
									?.number || '',
							place_of_birth:
								data.getClient.client_individual_properties?.client_passport
									?.place_of_birth || '',
							registration_address:
								data.getClient.client_individual_properties?.client_passport
									?.registration_address || '',
						},
					},
				});

				setLayoutTitle(data.getClient.client_properties.full_name);
			},
			onError(error) {
				navigate('/', { replace: true });
				toast.error(error.message);
			},
		},
	);

	const [updateClient, { loading: updateClientLoading }] = useMutation(
		UPDATE_CLIENT_INDIVIDUAL,
		{
			onCompleted(data) {
				setLayoutTitle(data.updateClient.full_name);
				toast.info('Клиент обновлен успешно.');
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<ClientIndividualSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			updateClient({
				variables: {
					input: normalizePayload({
						...data,
						client_properties: { ...data.client_properties, id },
					}),
				},
			});
		},
	});

	return (
		<BootLayout isLoading={getClientIndividualLoading || updateClientLoading}>
			<ContentLayout title={layoutTitle}>
				<Toolbar text='Физическое лицо'>
					<Button type='submit' onClick={() => formik.handleSubmit()}>
						Сохранить
					</Button>
				</Toolbar>
				<Container>
					<Form>
						<ClientProperties
							values={formik.values.client_properties}
							touched={formik.touched.client_properties}
							errors={formik.errors.client_properties}
							handleChange={formik.handleChange}
						/>
						<NamedGroup title='Дополнительные данные'>
							<Input
								label='Дата рождения'
								type='date'
								name='client_individual_properties.dob'
								value={formik.values.client_individual_properties.dob}
								onChange={formik.handleChange}
							/>
							<Input
								label='СНИЛС'
								name='client_individual_properties.snils'
								value={formik.values.client_individual_properties.snils}
								onChange={formik.handleChange}
							/>
						</NamedGroup>
						<ClientPassport
							prefix='client_individual_properties'
							values={
								formik.values.client_individual_properties.client_passport
							}
							handleChange={formik.handleChange}
						/>
					</Form>
				</Container>
			</ContentLayout>
		</BootLayout>
	);
};
