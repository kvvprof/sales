import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

const newAgencySchema = z.object({
	agency: z
		.object({
			name: z.string(),
			inn: z.string(),
			common_db_contractors_id: z.number().int().nonnegative(),
		})
		.nullable()
		.refine((value) => value, { message: 'Выберите агентство' })
		.default(null),
});

export type NewAgencySchema = z.infer<typeof newAgencySchema>;
export const initialValues = getDefaults(newAgencySchema);
export const validationSchema = toFormikValidationSchema(newAgencySchema);
