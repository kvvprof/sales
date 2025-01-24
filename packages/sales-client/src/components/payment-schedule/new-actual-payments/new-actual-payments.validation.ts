import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const newActualPaymentsSchema = z.object({
  payments: z.array(
    z.object({
      payment: z
        .number({ message: 'Введите платеж' })
        .positive('Платеж должен быть больше 0')
        .default(0),
      date: z
        .string({ message: 'Выберите дату' })
        .date('Выберите дату')
        .default(''),
    }),
  ),
});

export type NewActualPaymentsSchema = z.infer<typeof newActualPaymentsSchema>;
export const initialValues = getDefaults(newActualPaymentsSchema);
export const validationSchema = toFormikValidationSchema(
  newActualPaymentsSchema,
);
