import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const realEstateAgentSchema = z.object({
	full_name: z.string().trim().min(1, 'Введите ФИО').default(''),
	phone: z.string().default(''),
	agency_ids: z.number().int().nonnegative().array().default([]),
});

export type RealEstateAgentSchema = z.infer<typeof realEstateAgentSchema>;
export const initialValues = getDefaults(realEstateAgentSchema);
export const validationSchema = toFormikValidationSchema(realEstateAgentSchema);
