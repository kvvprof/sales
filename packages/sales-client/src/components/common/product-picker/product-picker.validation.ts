import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const productPickerSchema = z.object({
	object: z
		.object({
			id: z.number(),
			name: z.string(),
			common_db_objects_id: z.number(),
		})
		.nullable()
		.refine((value) => value, {
			message: 'Выберите объект',
		})
		.default(null),
	product: z
		.object({
			product: z.object({
				id: z.number(),
				number: z.string(),
				area: z.string(),
				price: z.string(),
			}),
			object: z.object({ id: z.number(), name: z.string() }),
			category: z.object({ id: z.number(), name: z.string() }),
		})
		.nullable()
		.refine((value) => value, {
			message: 'Выберите продукт',
		})
		.default(null),
});

export type ProductPickerSchema = z.infer<typeof productPickerSchema>;
export const initialValues = getDefaults(productPickerSchema);
export const validationSchema = toFormikValidationSchema(productPickerSchema);
