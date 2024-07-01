import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const objectPickerSchema = z.object({
	object: z
		.object({
			id: z.number(),
			name: z.string(),
		})
		.nullable()
		.refine((value) => value, { message: 'Выберите объект' })
		.default(null),
});

export type ObjectPickerSchema = z.infer<typeof objectPickerSchema>;
export const initialValues = getDefaults(objectPickerSchema);
export const validationSchema = toFormikValidationSchema(objectPickerSchema);
