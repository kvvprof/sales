import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';

export const dduClientContractSchema = z.object({
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
        isMain: z.boolean().default(false),
        share: z.number().default(0),
      })
      .array()
      .refine((value) => value.length, {
        message: 'Выберите клиента',
      })
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
  dduClientContractProperties: z.object({
    dduLink: z.string().default(''),
    escrowAccountNumber: z.string().default(''),
    escrowAccountOpeningDate: z.string().default(''),
    escrowPeriod: z.string().default(''),
    isEscrowDiscount: z.boolean().default(false),
    returnAccount: z.string().default(''),
  }),
});

export type DduClientContractSchema = z.infer<typeof dduClientContractSchema>;
export const initialValues: DduClientContractSchema = getDefaults(
  dduClientContractSchema,
);
export const validationSchema = toFormikValidationSchema(
  dduClientContractSchema,
);
