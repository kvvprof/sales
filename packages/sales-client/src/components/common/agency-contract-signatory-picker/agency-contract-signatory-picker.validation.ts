import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const signatoryPickerSchema = z.object({
	signatory: z
		.object({
			id: z.number(),
			full_name: z.string(),
			email: z.string(),
			phone: z.string(),
			title: z.string(),
			based_on: z.string(),
		})
		.nullable()
		.refine((value) => value, { message: 'Выберите подписанта' })
		.default(null),
});

export type SignatoryPickerSchema = z.infer<typeof signatoryPickerSchema>;
export const initialValues = getDefaults(signatoryPickerSchema);
export const validationSchema = toFormikValidationSchema(signatoryPickerSchema);
