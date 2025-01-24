import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ScheduledPaymentType } from '@/__types__/graphql';
import { getDefaults } from '@/common';

export const newScheduledPaymentsSchema = z.object({
  payments: z.array(
    z.object({
      payment: z.number().positive('Платеж должен быть больше 0').default(0),
      date: z.string().trim().min(1, 'Выберите дату').default(''),
      scheduledPaymentType: z
        .nativeEnum(ScheduledPaymentType)
        .nullable()
        .refine((value) => value, { message: 'Выберите тип платежа' })
        .default(null),
    }),
  ),
});

export const validationSchema = toFormikValidationSchema(
  newScheduledPaymentsSchema,
);
export const initialValues = getDefaults(newScheduledPaymentsSchema);
export type NewScheduledPaymentsSchema = z.infer<
  typeof newScheduledPaymentsSchema
>;
