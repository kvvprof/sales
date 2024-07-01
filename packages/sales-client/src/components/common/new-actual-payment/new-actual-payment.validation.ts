import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const newActualPaymentSchema = z.object({
	payment: z
		.number({ message: 'Введите платеж' })
		.positive('Платеж должен быть больше 0')
		.default(0),
	date: z
		.string({ message: 'Выберите дату' })
		.date('Выберите дату')
		.default(''),
});

export type NewActualPaymentSchema = z.infer<typeof newActualPaymentSchema>;
export const initialValues = getDefaults(newActualPaymentSchema);
export const validationSchema = toFormikValidationSchema(
	newActualPaymentSchema,
);
