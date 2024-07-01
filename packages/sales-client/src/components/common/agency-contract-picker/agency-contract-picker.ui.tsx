import { useLazyQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicAgency } from '@/__types__/graphql';
import { TAgencyContractCard } from '@/components/common/agency-contract-card/agency-contract-card.interface';
import {
	GET_AGENCIES,
	GET_AGENCY_CONTRACTS,
} from '@/components/common/agency-contract-picker/agency-contract-picker.gql';
import { IAgencyContractPicker } from '@/components/common/agency-contract-picker/agency-contract-picker.interface';
import {
	AgencyContractPickerSchema,
	validationSchema,
	initialValues,
} from '@/components/common/agency-contract-picker/agency-contract-picker.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { DEFAULT_OPTIONS_LIMIT } from '@/configs/default.config';
import { AGENCY_CONTRACT_TYPE_MAP } from '@/configs/enums.map';

export const AgencyContractPicker = ({
	object_id,
	onSubmit,
}: IAgencyContractPicker) => {
	const [agencyOptions, setAgencyOptions] = useState<IOption<BasicAgency>[]>(
		[],
	);
	const [agencyContractOptions, setAgencyContractOptions] = useState<
		IOption<TAgencyContractCard>[]
	>([]);

	const [getAgencies, { loading: getAgenciesLoading }] = useLazyQuery(
		GET_AGENCIES,
		{
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
		},
	);

	const [getAgencyContracts, { loading: getAgencyContractsLoading }] =
		useLazyQuery(GET_AGENCY_CONTRACTS, {
			onCompleted(data) {
				setAgencyContractOptions(
					data.getAgencyContracts.map((agencyContract) => ({
						name: `${AGENCY_CONTRACT_TYPE_MAP[agencyContract.agency_contract_properties.agency_contract_type]} - ${agencyContract.object.name} - ${agencyContract.agency_contract_properties.number}`,
						payload: agencyContract,
					})),
				);
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const formik = useFormik<AgencyContractPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.agency_contract!);
		},
	});

	const loadAgencyOptions = (searchValue: string) => {
		getAgencies({
			variables: {
				input: {
					options: { limit: DEFAULT_OPTIONS_LIMIT, prefix: searchValue },
				},
			},
		});
	};

	const onSelectAgency = ({ payload }: IOption<BasicAgency>) => {
		formik.setFieldValue('agency', payload);
		getAgencyContracts({
			variables: { input: { agency_id: payload?.id, object_id } },
		});
	};

	const onDeleteAgency = () => {
		formik.setFieldValue('agency', null);
		formik.setFieldValue('agency_contract', null);
	};

	const onSelectAgencyContract = ({
		payload,
	}: IOption<TAgencyContractCard>) => {
		formik.setFieldValue('agency_contract', payload);
	};

	const onDeleteAgencyContract = () => {
		formik.setFieldValue('agency_contract', null);
	};

	return (
		<Form handleSubmit={formik.handleSubmit}>
			<Select
				label='Агентство'
				placeholder='Поиск по названию или ИНН'
				options={agencyOptions}
				isLoading={getAgenciesLoading}
				error={formik.touched.agency ? formik.errors.agency : null}
				onSelect={onSelectAgency}
				onDelete={onDeleteAgency}
				loadOptions={loadAgencyOptions}
			/>

			{formik.values.agency && (
				<BootLayout isLoading={getAgencyContractsLoading}>
					<Select
						label='Контракт агентства'
						placeholder='Выберите контракт агентства'
						options={agencyContractOptions}
						error={
							formik.touched.agency_contract
								? formik.errors.agency_contract
								: null
						}
						onSelect={onSelectAgencyContract}
						onDelete={onDeleteAgencyContract}
					/>
				</BootLayout>
			)}
			<Button type='submit'>Выбрать</Button>
		</Form>
	);
};
