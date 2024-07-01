import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ClientCategory } from '@/__types__/graphql';
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
import { CREATE_CLIENT_INDIVIDUAL } from '@/components/widgets/client-individual/client-individual.gql';
import {
	initialValues,
	validationSchema,
	ClientIndividualSchema,
} from '@/components/widgets/client-individual/client-individual.validation';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewClientIndividual = () => {
	const navigate = useNavigate();

	const [createClient, { loading }] = useMutation(CREATE_CLIENT_INDIVIDUAL, {
		onCompleted(data) {
			navigate(`/client/individual/${data.createClient.id}`);
			toast.info('Клиент создан успешно.');
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<ClientIndividualSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createClient({
				variables: {
					input: normalizePayload({
						client_properties: {
							...data.client_properties,
							client_category: ClientCategory.Individual,
						},
						client_individual_properties: data.client_individual_properties,
					}),
				},
			});
		},
	});

	return (
		<BootLayout isLoading={loading}>
			<ContentLayout title='Новый клиент'>
				<Toolbar text='Физическое лицо'>
					<Button type='submit' onClick={() => formik.handleSubmit()}>
						Создать
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
