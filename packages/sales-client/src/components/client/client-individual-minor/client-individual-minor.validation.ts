import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';
import { clientPassportSchema } from '@/components/client/client-passport/client-passport.validation';
import { clientPropertiesSchema } from '@/components/client/client-properties/client-properties.validation';

export const clientIndividualMinorSchema = z.object({
  clientProperties: clientPropertiesSchema,
  clientIndividualMinorProperties: z.object({
    dob: z.string().default(''),
    snils: z.string().default(''),
    birthCertificate: z.string().default(''),
    clientPassport: clientPassportSchema,
    representativeIds: z.number().int().nonnegative().array().default([]),
  }),
});

export const validationSchema = toFormikValidationSchema(
  clientIndividualMinorSchema,
);
export const initialValues = getDefaults(clientIndividualMinorSchema);
export type ClientIndividualMinorSchema = z.infer<
  typeof clientIndividualMinorSchema
>;
