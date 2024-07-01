import { z } from 'zod';

import { toFormikValidationSchema } from 'zod-formik-adapter';

import { clientPassportSchema } from '@/components/common/client-passport/client-passport.validation';
import { clientPropertiesSchema } from '@/components/common/client-properties/client-properties.validation';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const clientIndividualMinorSchema = z.object({
	client_properties: clientPropertiesSchema,
	client_individual_minor_properties: z.object({
		dob: z.string().default(''),
		snils: z.string().default(''),
		birth_certificate: z.string().default(''),
		client_passport: clientPassportSchema,
		representative_ids: z.number().int().nonnegative().array().default([]),
	}),
});

export const validationSchema = toFormikValidationSchema(
	clientIndividualMinorSchema,
);
export const initialValues = getDefaults(clientIndividualMinorSchema);
export type ClientIndividualMinorSchema = z.infer<
	typeof clientIndividualMinorSchema
>;
