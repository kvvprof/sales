import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const realEstateAgencyActSchema = z.object({
  id: z.number().int().nonnegative(),
  date: z.string().trim().min(1, 'Выберите дату').default(''),
  retention: z
    .number()
    .nonnegative({ message: 'Удержание не должно быть отрицательным числом' })
    .default(0),
  note: z.string().trim().default(''),
});

export type RealEstateAgencyActSchema = z.infer<
  typeof realEstateAgencyActSchema
>;
export const initialValues = getDefaults(realEstateAgencyActSchema);
export const validationSchema = toFormikValidationSchema(
  realEstateAgencyActSchema,
);
