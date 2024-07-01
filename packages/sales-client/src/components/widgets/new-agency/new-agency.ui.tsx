import { useLazyQuery, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { CommonContractor } from '@/__types__/graphql';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Container } from '@/components/ui/container/container.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { JSONView } from '@/components/ui/json-view/json-view.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import {
	GET_CONTRACTORS,
	CREATE_AGENCY,
} from '@/components/widgets/new-agency/new-agency.gql';
import {
	NewAgencySchema,
	validationSchema,
	initialValues,
} from '@/components/widgets/new-agency/new-agency.validation';
import { DEFAULT_OPTIONS_LIMIT } from '@/configs/default.config';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewAgency = () => {
	const [agencyOptions, setAgencyOptions] = useState<
		IOption<CommonContractor>[]
	>([]);
	const [currentContractor, setCurrentContractor] =
		useState<CommonContractor | null>(null);
	const navigate = useNavigate();

	const [getContractorsInCommon, { loading: getCommonContractorsLoading }] =
		useLazyQuery(GET_CONTRACTORS, {
			onCompleted(data) {
				setAgencyOptions(
					data.getCommonContractors.contractors.map((contractor) => ({
						name: contractor.contractor.name,
						payload: contractor,
					})),
				);
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const [createAgency, { loading: createAgencyLoading }] = useMutation(
		CREATE_AGENCY,
		{
			onCompleted(data) {
				navigate(`/agency/${data.createAgency.id}`);
				toast.info('Агентство создано успешно.');
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<NewAgencySchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createAgency({
				variables: {
					input: normalizePayload(data.agency!),
				},
			});
		},
	});

	const loadAgencyOptions = (searchValue: string) => {
		getContractorsInCommon({
			variables: {
				input: {
					options: { limit: DEFAULT_OPTIONS_LIMIT, prefix: searchValue },
				},
			},
		});
	};

	const onSelectAgency = ({ payload }: IOption<CommonContractor>) => {
		setCurrentContractor(payload!);

		formik.setFieldValue('agency', {
			name: payload!.contractor.name,
			inn: payload!.contractor.inn,
			common_db_contractors_id: payload!.contractor.id,
		});
	};

	const onDeleteAgency = () => {
		formik.setFieldValue('agency', null);
	};

	return (
		<BootLayout isLoading={createAgencyLoading}>
			<ContentLayout title='Новое агентство'>
				<Toolbar text='Заполните данные и нажмите Создать'>
					<Button type='submit' onClick={() => formik.handleSubmit()}>
						Создать
					</Button>
				</Toolbar>
				<Container>
					<Form>
						<NamedGroup title='Данные'>
							<Select
								label='Агентство'
								placeholder='Поиск в общей базе по ИНН'
								options={agencyOptions}
								isLoading={getCommonContractorsLoading}
								error={formik.touched.agency ? formik.errors.agency : null}
								loadOptions={loadAgencyOptions}
								onSelect={onSelectAgency}
								onDelete={onDeleteAgency}
							/>
							{formik.values.agency && <JSONView data={currentContractor} />}
						</NamedGroup>
					</Form>
				</Container>
			</ContentLayout>
		</BootLayout>
	);
};
