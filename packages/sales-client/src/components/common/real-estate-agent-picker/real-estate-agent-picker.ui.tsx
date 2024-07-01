import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { GET_REAL_ESTATE_AGENTS } from '@/components/common/real-estate-agent-picker/real-estate-agent-picker.gql';
import {
	IRealEstateAgentPicker,
	TRealEstateAgentPicker,
} from '@/components/common/real-estate-agent-picker/real-estate-agent-picker.interface';
import {
	RealEstateAgentPickerSchema,
	validationSchema,
	initialValues,
} from '@/components/common/real-estate-agent-picker/real-estate-agent-picker.validation';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { DEFAULT_OPTIONS_LIMIT } from '@/configs/default.config';

export const RealEstateAgentPicker = ({ onSubmit }: IRealEstateAgentPicker) => {
	const [realEstateAgentOptions, setRealEstateAgentOptions] = useState<
		IOption<TRealEstateAgentPicker>[]
	>([]);

	const [getRealEstateAgents, { loading }] = useLazyQuery(
		GET_REAL_ESTATE_AGENTS,
		{
			onCompleted(data) {
				setRealEstateAgentOptions(
					data.getRealEstateAgents.real_estate_agents.map(
						({ real_estate_agent }) => ({
							name: real_estate_agent.full_name,
							payload: real_estate_agent,
						}),
					),
				);
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<RealEstateAgentPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.real_estate_agent!);
		},
	});

	const loadRealEstateAgentOptions = (searchValue: string) => {
		getRealEstateAgents({
			variables: {
				input: {
					options: { limit: DEFAULT_OPTIONS_LIMIT, prefix: searchValue },
				},
			},
		});
	};

	const onSelectRealEstateAgent = ({
		payload,
	}: IOption<TRealEstateAgentPicker>) => {
		formik.setFieldValue('real_estate_agent', payload);
	};

	const onDeleteRealEstateAgent = () => {
		formik.setFieldValue('real_estate_agent', null);
	};

	return (
		<Form handleSubmit={formik.handleSubmit}>
			<Select
				label='Агент по недвижимости'
				placeholder='Поиск по названию'
				isLoading={loading}
				options={realEstateAgentOptions}
				error={
					formik.touched.real_estate_agent
						? formik.errors.real_estate_agent
						: null
				}
				loadOptions={loadRealEstateAgentOptions}
				onSelect={onSelectRealEstateAgent}
				onDelete={onDeleteRealEstateAgent}
			/>
			<Button type='submit'>Выбрать</Button>
		</Form>
	);
};
