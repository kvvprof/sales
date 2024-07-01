import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';

import { toast } from 'react-toastify';

import { CREATE_AGENCY_CONTRACT_SIGNATORY } from '@/components/common/new-agency-contract-signatory/new-agency-contract-signatory.gql';
import { INewAgencyContractSignatory } from '@/components/common/new-agency-contract-signatory/new-agency-contract-signatory.interface';
import {
	NewAgencyContractSignatorySchema,
	initialValues,
	validationSchema,
} from '@/components/common/new-agency-contract-signatory/new-agency-contract-signatory.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Input } from '@/components/ui/input/input.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewAgencyContractSignatory = ({
	agencyId,
	onSubmit,
}: INewAgencyContractSignatory) => {
	const [createAgencyContractSignatory, { loading }] = useMutation(
		CREATE_AGENCY_CONTRACT_SIGNATORY,
		{
			onCompleted(data) {
				onSubmit(data.createAgencyContractSignatory);
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<NewAgencyContractSignatorySchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createAgencyContractSignatory({
				variables: {
					input: normalizePayload({ agency_id: agencyId, ...data }),
				},
			});
		},
	});

	return (
		<BootLayout isLoading={loading}>
			<NamedGroup title='Данные'>
				<Form handleSubmit={formik.handleSubmit}>
					<Input
						label='ФИО'
						name='full_name'
						value={formik.values.full_name}
						error={formik.touched?.full_name ? formik.errors?.full_name : null}
						onChange={formik.handleChange}
					/>
					<Input
						label='Телефон'
						name='phone'
						value={formik.values.phone}
						error={formik.touched?.phone ? formik.errors?.phone : null}
						onChange={formik.handleChange}
					/>
					<Input
						label='Эл. почта'
						name='email'
						value={formik.values.email}
						error={formik.touched?.email ? formik.errors?.email : null}
						onChange={formik.handleChange}
					/>
					<Input
						label='Должность'
						name='title'
						value={formik.values.title}
						error={formik.touched?.title ? formik.errors?.title : null}
						onChange={formik.handleChange}
					/>
					<Input
						label='Основание'
						name='based_on'
						value={formik.values.based_on}
						error={formik.touched?.based_on ? formik.errors?.based_on : null}
						onChange={formik.handleChange}
					/>
					<Button type='submit'>Создать</Button>
				</Form>
			</NamedGroup>
		</BootLayout>
	);
};
