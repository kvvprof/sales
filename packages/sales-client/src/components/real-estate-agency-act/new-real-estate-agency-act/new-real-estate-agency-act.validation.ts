import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const newRealEstateAgencyActSchema = z.object({
  clientContractId: z.number().int().nonnegative(),
  date: z.string().trim().min(1, 'Выберите дату').default(''),
  retention: z
    .number()
    .nonnegative({ message: 'Удержание не должно быть отрицательным числом' })
    .default(0),
  note: z.string().trim().default(''),
});

export type NewRealEstateAgencyActSchema = z.infer<
  typeof newRealEstateAgencyActSchema
>;
export const initialValues = getDefaults(newRealEstateAgencyActSchema);
export const validationSchema = toFormikValidationSchema(
  newRealEstateAgencyActSchema,
);
