import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { ClientCategory } from '@/__types__/graphql';
import { ClientProperties } from '@/components/common/client-properties/client-properties.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Container } from '@/components/ui/container/container.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Input } from '@/components/ui/input/input.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import { CREATE_CLIENT_ENTITY } from '@/components/widgets/client-entity/client-entity.gql';
import {
	initialValues,
	validationSchema,
	ClientEntitySchema,
} from '@/components/widgets/client-entity/client-entity.validation';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewClientEntity = () => {
	const navigate = useNavigate();

	const [createClient, { loading }] = useMutation(CREATE_CLIENT_ENTITY, {
		onCompleted(data) {
			navigate(`/client/entity/${data.createClient.id}`);
			toast.info('Клиент создан успешно.');
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<ClientEntitySchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createClient({
				variables: {
					input: normalizePayload({
						client_properties: {
							...data.client_properties,
							client_category: ClientCategory.Entity,
						},
						client_entity_properties: data.client_entity_properties,
					}),
				},
			});
		},
	});

	return (
		<BootLayout isLoading={loading}>
			<ContentLayout title='Новый клиент'>
				<Toolbar text='Юридическое лицо'>
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
								label='КПП'
								name='client_entity_properties.kpp'
								value={formik.values.client_entity_properties.kpp}
								onChange={formik.handleChange}
							/>
						</NamedGroup>
					</Form>
				</Container>
			</ContentLayout>
		</BootLayout>
	);
};
