import { useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { ScheduledPaymentType } from '@/__types__/graphql';
import { CREATE_SCHEDULED_PAYMENT } from '@/components/common/new-scheduled-payment/new-scheduled-payment.gql';
import { INewScheduledPayment } from '@/components/common/new-scheduled-payment/new-scheduled-payment.interface';
import {
	NewScheduledPaymentSchema,
	validationSchema,
	initialValues,
} from '@/components/common/new-scheduled-payment/new-scheduled-payment.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { Input } from '@/components/ui/input/input.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const NewScheduledPayment = ({
	client_contract_id,
	onSubmit,
}: INewScheduledPayment) => {
	const SCHEDULED_PAYMENT_TYPES = [
		{
			name: 'Собственные',
			payload: { scheduled_payment_type: ScheduledPaymentType.Own },
		},
		{
			name: 'Ипотека',
			payload: { scheduled_payment_type: ScheduledPaymentType.Mortgage },
		},
		{
			name: 'Материнский капитал',
			payload: {
				scheduled_payment_type: ScheduledPaymentType.MaternityCapital,
			},
		},
		{
			name: 'Обмен',
			payload: { scheduled_payment_type: ScheduledPaymentType.Exchange },
		},
	];

	const [createScheduledPayment, { loading }] = useMutation(
		CREATE_SCHEDULED_PAYMENT,
		{
			onCompleted() {
				toast.info('Запланированный платеж создан успешно.');
				onSubmit();
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<NewScheduledPaymentSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			const { scheduled_payment_type, ...rest } = data;
			createScheduledPayment({
				variables: {
					input: normalizePayload({
						client_contract_id,
						scheduled_payment_type: scheduled_payment_type!,
						...rest,
					}),
				},
			});
			onSubmit();
		},
	});

	const onSelectScheduledPaymentType = ({
		payload,
	}: IOption<{ scheduled_payment_type: ScheduledPaymentType }>) => {
		formik.setFieldValue(
			'scheduled_payment_type',
			payload?.scheduled_payment_type,
		);
	};

	const onDeleteScheduledPaymentType = () => {
		formik.setFieldValue('scheduled_payment_type', null);
	};

	return (
		<BootLayout isLoading={loading}>
			<Form handleSubmit={formik.handleSubmit}>
				<Select
					label='Тип платежа'
					placeholder='Выберите тип платежа'
					options={SCHEDULED_PAYMENT_TYPES}
					error={
						formik.touched.scheduled_payment_type
							? formik.errors.scheduled_payment_type
							: null
					}
					onSelect={onSelectScheduledPaymentType}
					onDelete={onDeleteScheduledPaymentType}
				/>
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
