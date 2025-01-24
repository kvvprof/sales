import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

const representativePickerSchema = z.object({
  representative: z
    .object({
      id: z.number(),
      fullName: z.string(),
      clientFullName: z.string(),
    })
    .nullable()
    .refine((value) => value, { message: 'Выберите представителя' })
    .default(null),
});

export type RepresentativePickerSchema = z.infer<
  typeof representativePickerSchema
>;
export const initialValues = getDefaults(representativePickerSchema);
export const validationSchema = toFormikValidationSchema(
  representativePickerSchema,
);
