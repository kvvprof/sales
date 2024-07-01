import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const agencyPickerSchema = z.object({
	agency: z
		.object({
			id: z.number(),
			name: z.string(),
		})
		.nullable()
		.refine((value) => value, { message: 'Выберите агентство' })
		.default(null),
});

export type AgencyPickerSchema = z.infer<typeof agencyPickerSchema>;
export const initialValues = getDefaults(agencyPickerSchema);
export const validationSchema = toFormikValidationSchema(agencyPickerSchema);
