import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';
import { clientPassportSchema } from '@/components/client/client-passport/client-passport.validation';
import { clientPropertiesSchema } from '@/components/client/client-properties/client-properties.validation';

export const clientIndividualSchema = z.object({
  clientProperties: clientPropertiesSchema,
  clientIndividualProperties: z.object({
    dob: z.string().default(''),
    snils: z.string().default(''),
    clientPassport: clientPassportSchema,
  }),
});

export type ClientIndividualSchema = z.infer<typeof clientIndividualSchema>;
export const initialValues = getDefaults(clientIndividualSchema);
export const validationSchema = toFormikValidationSchema(
  clientIndividualSchema,
);
