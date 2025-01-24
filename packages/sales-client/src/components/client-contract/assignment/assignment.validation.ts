import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const assignmentSchema = z.object({
  clientsTo: z
    .object({
      clientId: z.number(),
      isMain: z.boolean().default(false),
      share: z.number().default(0),
    })
    .array()
    .refine((value) => value.length, {
      message: 'Выберите клиента',
    })
    .default([]),
});

export type AssignmentSchema = z.infer<typeof assignmentSchema>;
export const initialValues: AssignmentSchema = getDefaults(assignmentSchema);
export const validationSchema = toFormikValidationSchema(assignmentSchema);
