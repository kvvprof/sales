import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const bankPickerSchema = z.object({
  bank: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .nullable()
    .refine((value) => value, { message: 'Выберите банк' })
    .default(null),
});

export type BankPickerSchema = z.infer<typeof bankPickerSchema>;
export const initialValues = getDefaults(bankPickerSchema);
export const validationSchema = toFormikValidationSchema(bankPickerSchema);
