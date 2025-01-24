import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const transferActSchema = z.object({
  id: z.number().int().nonnegative(),
  date: z.string().trim().min(1, 'Выберите дату').default(''),
  representativeIds: z.number().int().nonnegative().array().default([]),
});

export type TransferActSchema = z.infer<typeof transferActSchema>;
export const initialValues = getDefaults(transferActSchema);
export const validationSchema = toFormikValidationSchema(transferActSchema);
