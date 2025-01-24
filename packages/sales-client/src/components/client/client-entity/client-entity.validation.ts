import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';
import { clientPropertiesSchema } from '@/components/client/client-properties/client-properties.validation';

export const clientEntitySchema = z.object({
  clientProperties: clientPropertiesSchema,
  clientEntityProperties: z.object({
    kpp: z.string().default(''),
  }),
});

export type ClientEntitySchema = z.infer<typeof clientEntitySchema>;
export const initialValues = getDefaults(clientEntitySchema);
export const validationSchema = toFormikValidationSchema(clientEntitySchema);
