import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { ClientCategory } from '@/__types__/graphql';
import { getDefaults } from '@/common';

const clientPickerSchema = z.object({
  client: z
    .object({
      id: z.number(),
      fullName: z.string(),
      clientCategory: z.nativeEnum(ClientCategory),
    })
    .nullable()
    .refine((value) => value, { message: 'Выберите клиента' })
    .default(null),
});

export type ClientPickerSchema = z.infer<typeof clientPickerSchema>;
export const initialValues = getDefaults(clientPickerSchema);
export const validationSchema = toFormikValidationSchema(clientPickerSchema);
