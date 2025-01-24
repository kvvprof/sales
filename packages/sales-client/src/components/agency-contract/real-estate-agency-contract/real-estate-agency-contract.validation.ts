import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';
import { agencyContractCommissionSchema } from '@/components/agency-contract/agency-contract-commission/agency-contract-commission.validation';

export const newRealEstateAgencyContractSchema = z.object({
  agencyContractProperties: z.object({
    number: z.string().trim().min(1, 'Введите номер').default(''),
    date: z.string().trim().min(1, 'Выберите дату').default(''),
    responsibleUserId: z
      .number()
      .int()
      .positive()
      .nullable()
      .default(null)
      .refine((value) => value, {
        message: 'Выберите ответственного сотрудника',
      }),
    objectId: z
      .number()
      .int()
      .positive()
      .nullable()
      .default(null)
      .refine((value) => value, {
        message: 'Выберите объект',
      }),
    entityId: z
      .number()
      .int()
      .positive()
      .nullable()
      .default(null)
      .refine((value) => value, {
        message: 'Выберите юридическое лицо',
      }),
    agencyId: z
      .number()
      .int()
      .positive()
      .nullable()
      .default(null)
      .refine((value) => value, {
        message: 'Выберите агентство',
      }),
    agencyContractSignatoryId: z
      .number()
      .int()
      .positive()
      .nullable()
      .default(null)
      .refine((value) => value, {
        message: 'Выберите подписанта',
      }),
  }),
  realEstateAgencyContractProperties: z.object({
    agencyContractCommission: agencyContractCommissionSchema,
  }),
});
export type NewRealEstateAgencyContractSchema = z.infer<
  typeof newRealEstateAgencyContractSchema
>;
export const initialValues = getDefaults(newRealEstateAgencyContractSchema);
export const validationSchema = toFormikValidationSchema(
  newRealEstateAgencyContractSchema,
);
