import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { AgencyContractType } from '@/__types__/graphql';
import { getDefaults } from '@/common';

export const agencyContractPickerSchema = z.object({
  agency: z
    .object({
      id: z.number(),
      name: z.string(),
      commonDbContractorsId: z.number(),
    })
    .nullable()
    .refine((value) => value, {
      message: 'Выберите агентство',
    })
    .default(null),
  agencyContract: z
    .object({
      agencyContractProperties: z.object({
        id: z.number(),
        number: z.string(),
        date: z.string(),
        agencyContractType: z.nativeEnum(AgencyContractType),
      }),
      object: z.object({
        id: z.number(),
        name: z.string(),
        commonDbObjectsId: z.number(),
      }),
      agency: z.object({
        id: z.number(),
        name: z.string(),
        commonDbContractorsId: z.number(),
      }),
    })
    .nullable()
    .refine((value) => value, {
      message: 'Выберите контракт агентства',
    })
    .default(null),
});

export type AgencyContractPickerSchema = z.infer<
  typeof agencyContractPickerSchema
>;
export const initialValues = getDefaults(agencyContractPickerSchema);
export const validationSchema = toFormikValidationSchema(
  agencyContractPickerSchema,
);
