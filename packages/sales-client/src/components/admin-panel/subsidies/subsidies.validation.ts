import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const subsidiesSchema = z.object({
  name: z.string().trim().min(1, 'Введите название').default(''),
  isVisible: z.boolean().default(true),
});

export type SubsidiesSchema = z.infer<typeof subsidiesSchema>;
export const initialValues = getDefaults(subsidiesSchema);
export const validationSchema = toFormikValidationSchema(subsidiesSchema);
