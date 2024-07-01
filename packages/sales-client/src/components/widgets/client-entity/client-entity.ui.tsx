import { useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
	GET_CLIENT_ENTITY,
	UPDATE_CLIENT_ENTITY,
} from '@/components/widgets/client-entity/client-entity.gql';
import { IClientEntity } from '@/components/widgets/client-entity/client-entity.interface';
import {
	initialValues,
	validationSchema,
	ClientEntitySchema,
} from '@/components/widgets/client-entity/client-entity.validation';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const ClientEntity = ({ id }: IClientEntity) => {
	const [layoutTitle, setLayoutTitle] = useState<string>('');
	const navigate = useNavigate();

	const { loading: getClientLoading } = useQuery(GET_CLIENT_ENTITY, {
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
				client_entity_properties: {
					kpp: data.getClient.client_entity_properties?.kpp || '',
				},
			});

			setLayoutTitle(data.getClient.client_properties.full_name);
		},
		onError(error) {
			navigate('/', { replace: true });
			toast.error(error.message);
		},
	});

	const [updateClient, { loading: updateClientLoading }] = useMutation(
		UPDATE_CLIENT_ENTITY,
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

	const formik = useFormik<ClientEntitySchema>({
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
		<BootLayout isLoading={getClientLoading || updateClientLoading}>
			<ContentLayout title={layoutTitle}>
				<Toolbar text='Юридическое лицо'>
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
