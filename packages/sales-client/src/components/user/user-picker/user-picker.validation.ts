import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const userPickerSchema = z.object({
  user: z
    .object({
      id: z.number(),
      fullName: z.string(),
    })
    .nullable()
    .refine((value) => value, { message: 'Выберите пользователя' })
    .default(null),
});

export type UserPickerSchema = z.infer<typeof userPickerSchema>;
export const initialValues = getDefaults(userPickerSchema);
export const validationSchema = toFormikValidationSchema(userPickerSchema);
