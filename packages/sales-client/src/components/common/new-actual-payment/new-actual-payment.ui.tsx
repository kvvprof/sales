import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { CREATE_ACTUAL_PAYMENT } from '@/components/common/new-actual-payment/new-actual-payment.gql';
import { INewActualPayment } from '@/components/common/new-actual-payment/new-actual-payment.interface';
import {
	NewActualPaymentSchema,
	initialValues,
	validationSchema,
} from '@/components/common/new-actual-payment/new-actual-payment.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Input } from '@/components/ui/input/input.ui';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewActualPayment = ({
	client_contract_id,
	onSubmit,
}: INewActualPayment) => {
	const [createActualPayment, { loading }] = useMutation(
		CREATE_ACTUAL_PAYMENT,
		{
			onCompleted() {
				toast.info('Фактический платеж создан успешно.');
				onSubmit();
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<NewActualPaymentSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createActualPayment({
				variables: {
					input: normalizePayload({
						client_contract_id,
						...data,
					}),
				},
			});
		},
	});

	return (
		<BootLayout isLoading={loading}>
			<Form handleSubmit={formik.handleSubmit}>
				<Input
					label='Дата платежа'
					type='date'
					name='date'
					value={formik.values.date}
					error={formik.touched.date ? formik.errors.date : null}
					onChange={formik.handleChange}
				/>
				<Input
					label='Платеж'
					type='number'
					step='0.01'
					name='payment'
					value={formik.values.payment}
					error={formik.touched.payment ? formik.errors.payment : null}
					onChange={formik.handleChange}
				/>
				<Button type='submit'>Создать</Button>
			</Form>
		</BootLayout>
	);
};
