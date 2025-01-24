import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const usersSchema = z.object({
  fullName: z.string().trim().min(1, 'Введите название').default(''),
  email: z
    .string()
    .trim()
    .min(1, 'Введите эл. почту')
    .email('Неверный формат эл. почты')
    .default(''),
  phone: z.string().trim().default(''),
  isManager: z.boolean().default(true),
  isStaff: z.boolean().default(false),
});

export type UsersSchema = z.infer<typeof usersSchema>;
export const initialValues = getDefaults(usersSchema);
export const validationSchema = toFormikValidationSchema(usersSchema);
