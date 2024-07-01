import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { TAgencyCard } from '@/components/common/agency-card/agency-card.interface';
import { GET_AGENCIES } from '@/components/common/agency-picker/agency-picker.gql';
import { IAgencyPicker } from '@/components/common/agency-picker/agency-picker.interface';
import {
	AgencyPickerSchema,
	initialValues,
	validationSchema,
} from '@/components/common/agency-picker/agency-picker.validation';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { DEFAULT_OPTIONS_LIMIT } from '@/configs/default.config';

export const AgencyPicker = ({ onSubmit }: IAgencyPicker) => {
	const [agencyOptions, setAgencyOptions] = useState<IOption<TAgencyCard>[]>(
		[],
	);

	const [getAgencies, { loading }] = useLazyQuery(GET_AGENCIES, {
		onCompleted(data) {
			setAgencyOptions(
				data.getAgencies.agencies.map((agency) => ({
					name: agency.name,
					payload: agency,
				})),
			);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<AgencyPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.agency!);
		},
	});

	const loadAgencyOptions = (searchValue: string) => {
		getAgencies({
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

	const onSelectAgency = ({ payload }: IOption<TAgencyCard>) => {
		formik.setFieldValue('agency', payload);
	};

	const onDeleteAgency = () => {
		formik.setFieldValue('agency', null);
	};

	return (
		<Form handleSubmit={formik.handleSubmit}>
			<Select
				label='Агентство'
				placeholder='Поиск по названию или ИНН'
				options={agencyOptions}
				isLoading={loading}
				error={formik.touched.agency ? formik.errors.agency : null}
				loadOptions={loadAgencyOptions}
				onSelect={onSelectAgency}
				onDelete={onDeleteAgency}
			/>
			<Button type='submit'>Выбрать</Button>
		</Form>
	);
};
