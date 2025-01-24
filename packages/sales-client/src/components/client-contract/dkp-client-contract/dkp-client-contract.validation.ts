import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const dkpClientContractSchema = z.object({
  clientContractProperties: z.object({
    number: z.string().trim().min(1, 'Введите номер').default(''),
    date: z.string().trim().min(1, 'Выберите дату').default(''),
    registrationDate: z.string().default(''),
    price: z
      .number()
      .positive({ message: 'Стоимость должна быть больше нуля' })
      .default(0),
    comment: z.string().trim().default(''),
    clients: z
      .object({
        clientId: z.number(),
        isMain: z.boolean(),
        share: z.number(),
      })
      .array()
      .default([]),
    productId: z
      .number()
      .int()
      .positive()
      .nullable()
      .refine((value) => value, {
        message: 'Выберите продукт',
      })
      .default(null),
    managerId: z.number().int().positive().nullable().default(null),
    realEstateAgentId: z.number().int().positive().nullable().default(null),
    bankId: z.number().int().positive().nullable().default(null),
    subsidyId: z.number().int().positive().nullable().default(null),
    agencyContractIds: z.number().int().nonnegative().array().default([]),
  }),
  dkpClientContractProperties: z.object({
    dkpLink: z.string().default(''),
  }),
});

export type DkpClientContractSchema = z.infer<typeof dkpClientContractSchema>;
export const initialValues: DkpClientContractSchema = getDefaults(
  dkpClientContractSchema,
);
export const validationSchema = toFormikValidationSchema(
  dkpClientContractSchema,
);
