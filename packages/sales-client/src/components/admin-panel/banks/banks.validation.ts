import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const banksSchema = z.object({
  name: z.string().trim().min(1, 'Введите название').default(''),
  isVisible: z.boolean().default(true),
});

export type BanksSchema = z.infer<typeof banksSchema>;
export const initialValues = getDefaults(banksSchema);
export const validationSchema = toFormikValidationSchema(banksSchema);
