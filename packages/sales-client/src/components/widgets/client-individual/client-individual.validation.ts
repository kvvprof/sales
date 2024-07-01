import { z } from 'zod';

import { toFormikValidationSchema } from 'zod-formik-adapter';

import { clientPassportSchema } from '@/components/common/client-passport/client-passport.validation';
import { clientPropertiesSchema } from '@/components/common/client-properties/client-properties.validation';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const clientIndividualSchema = z.object({
	client_properties: clientPropertiesSchema,
	client_individual_properties: z.object({
		dob: z.string().default(''),
		snils: z.string().default(''),
		client_passport: clientPassportSchema,
	}),
});

export type ClientIndividualSchema = z.infer<typeof clientIndividualSchema>;
export const initialValues = getDefaults(clientIndividualSchema);
export const validationSchema = toFormikValidationSchema(
	clientIndividualSchema,
);
