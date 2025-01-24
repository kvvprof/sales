import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const realEstateAgentSchema = z.object({
  fullName: z.string().trim().min(1, 'Введите ФИО').default(''),
  phone: z.string().default(''),
  oneGtId: z.any().optional().default(''),
  agencyIds: z.number().int().nonnegative().array().default([]),
});

export type RealEstateAgentSchema = z.infer<typeof realEstateAgentSchema>;
export const initialValues = getDefaults(realEstateAgentSchema);
export const validationSchema = toFormikValidationSchema(realEstateAgentSchema);
