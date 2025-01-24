import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const newAgencyContractSignatorySchema = z.object({
  fullName: z.string().trim().min(1, 'Введите ФИО').default(''),
  basedOn: z.string().trim().default(''),
  title: z.string().trim().default(''),
});

export const validationSchema = toFormikValidationSchema(
  newAgencyContractSignatorySchema,
);
export const initialValues = getDefaults(newAgencyContractSignatorySchema);
export type NewAgencyContractSignatorySchema = z.infer<
  typeof newAgencyContractSignatorySchema
>;
