import { z } from 'zod';

import { toFormikValidationSchema } from 'zod-formik-adapter';

import { clientPropertiesSchema } from '@/components/common/client-properties/client-properties.validation';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const clientEntitySchema = z.object({
	client_properties: clientPropertiesSchema,
	client_entity_properties: z.object({
		kpp: z.string().default(''),
	}),
});

export type ClientEntitySchema = z.infer<typeof clientEntitySchema>;
export const initialValues = getDefaults(clientEntitySchema);
export const validationSchema = toFormikValidationSchema(clientEntitySchema);
