import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const entityPickerSchema = z.object({
  entity: z
    .object({
      id: z.number(),
      name: z.string(),
    })
    .nullable()
    .refine((value) => value, {
      message: 'Выберите юридическое лицо',
    })
    .default(null),
});

export type EntityPickerSchema = z.infer<typeof entityPickerSchema>;
export const initialValues = getDefaults(entityPickerSchema);
export const validationSchema = toFormikValidationSchema(entityPickerSchema);
