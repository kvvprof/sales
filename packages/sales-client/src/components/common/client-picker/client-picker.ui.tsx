import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { GET_CLIENTS } from '@/components/common/client-picker/client-picker.gql';
import {
	IClientPicker,
	TClientPicker,
} from '@/components/common/client-picker/client-picker.interface';
import {
	ClientPickerSchema,
	initialValues,
	validationSchema,
} from '@/components/common/client-picker/client-picker.validation';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { DEFAULT_OPTIONS_LIMIT } from '@/configs/default.config';

export const ClientPicker = ({ onSubmit }: IClientPicker) => {
	const [clientOptions, setClientOptions] = useState<IOption<TClientPicker>[]>(
		[],
	);

	const [getClients, { loading }] = useLazyQuery(GET_CLIENTS, {
		onCompleted(data) {
			setClientOptions(
				data.getClients.clients.map((client) => ({
					name: client.client_properties.full_name,
					payload: client.client_properties,
				})),
			);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<ClientPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.client!);
		},
	});

	const loadClientOptions = (searchValue: string) => {
		getClients({
			variables: {
				input: {
					options: {
						limit: DEFAULT_OPTIONS_LIMIT,
						prefix: searchValue,
					},
				},
			},
		});
	};

	const onSelectClient = ({ payload }: IOption<TClientPicker>) => {
		formik.setFieldValue('client', payload);
	};

	const onDeleteClient = () => {
		formik.setFieldValue('client', null);
	};

	return (
		<Form handleSubmit={formik.handleSubmit}>
			<Select
				label='Клиент'
				placeholder='Поиск по названию'
				options={clientOptions}
				isLoading={loading}
				error={formik.errors.client}
				loadOptions={loadClientOptions}
				onSelect={onSelectClient}
				onDelete={onDeleteClient}
			/>
			<Button type='submit'>Выбрать</Button>
		</Form>
	);
};
