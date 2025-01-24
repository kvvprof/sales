import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const subsidyPickerSchema = z.object({
  subsidy: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .nullable()
    .refine((value) => value, { message: 'Выберите субсидию' })
    .default(null),
});

export type SubsidyPickerSchema = z.infer<typeof subsidyPickerSchema>;
export const initialValues = getDefaults(subsidyPickerSchema);
export const validationSchema = toFormikValidationSchema(subsidyPickerSchema);
