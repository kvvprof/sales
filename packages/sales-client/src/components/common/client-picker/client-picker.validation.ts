import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ClientCategory } from '@/__types__/graphql';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

const clientPickerSchema = z.object({
	client: z
		.object({
			id: z.number(),
			full_name: z.string(),
			client_category: z.nativeEnum(ClientCategory),
		})
		.nullable()
		.refine((value) => value, { message: 'Выберите клиента' })
		.default(null),
});

export type ClientPickerSchema = z.infer<typeof clientPickerSchema>;
export const initialValues = getDefaults(clientPickerSchema);
export const validationSchema = toFormikValidationSchema(clientPickerSchema);
