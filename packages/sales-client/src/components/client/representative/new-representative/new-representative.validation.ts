import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const newRepresentativeSchema = z.object({
  fullName: z.string().trim().min(1, 'Введите ФИО').default(''),
  attorneyNumber: z.string().trim().default(''),
  attorneyDate: z.string().trim().default(''),
  authorizedBy: z.string().trim().default(''),
  authorizedRole: z.string().trim().default(''),
});

export const validationSchema = toFormikValidationSchema(
  newRepresentativeSchema,
);
export const initialValues = getDefaults(newRepresentativeSchema);
export type NewRepresentativeSchema = z.infer<typeof newRepresentativeSchema>;
