import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const signatoryPickerSchema = z.object({
  signatory: z
    .object({
      id: z.number(),
      fullName: z.string(),
      title: z.string().nullable(),
      basedOn: z.string().nullable(),
    })
    .nullable()
    .refine((value) => value, { message: 'Выберите подписанта' })
    .default(null),
});

export type SignatoryPickerSchema = z.infer<typeof signatoryPickerSchema>;
export const initialValues = getDefaults(signatoryPickerSchema);
export const validationSchema = toFormikValidationSchema(signatoryPickerSchema);
