import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const newTransferActSchema = z.object({
  date: z.string().trim().min(1, 'Выберите дату').default(''),
  clientContractId: z.number().int().nonnegative(),
  representativeIds: z.number().int().nonnegative().array().default([]),
});

export type NewTransferActSchema = z.infer<typeof newTransferActSchema>;
export const initialValues = getDefaults(newTransferActSchema);
export const validationSchema = toFormikValidationSchema(newTransferActSchema);
