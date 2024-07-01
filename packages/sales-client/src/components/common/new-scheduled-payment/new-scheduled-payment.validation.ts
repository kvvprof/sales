import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ScheduledPaymentType } from '@/__types__/graphql';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const newScheduledPaymentSchema = z.object({
	payment: z.number().positive('Платеж должен быть больше 0').default(0),
	date: z.string().trim().min(1, 'Выберите дату').default(''),
	scheduled_payment_type: z
		.nativeEnum(ScheduledPaymentType)
		.nullable()
		.refine((value) => value, { message: 'Выберите тип платежа' })
		.default(null),
});

export const validationSchema = toFormikValidationSchema(
	newScheduledPaymentSchema,
);
export const initialValues = getDefaults(newScheduledPaymentSchema);
export type NewScheduledPaymentSchema = z.infer<
	typeof newScheduledPaymentSchema
>;
