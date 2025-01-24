import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/common';
import { agencyContractCommissionSchema } from '@/components/agency-contract/agency-contract-commission/agency-contract-commission.validation';

export const mipAgencyContractSchema = z.object({
  agencyContractProperties: z.object({
    number: z.string().trim().min(1, 'Введите номер').default(''),
    date: z.string().trim().min(1, 'Выберите дату').default(''),
    responsibleUserId: z
      .number()
      .int()
      .positive()
      .nullable()
      .refine((value) => value, {
        message: 'Выберите ответственного сотрудника',
      })
      .default(null),
    objectId: z
      .number()
      .int()
      .positive()
      .nullable()
      .refine((value) => value, {
        message: 'Выберите объект',
      })
      .default(null),
    entityId: z
      .number()
      .int()
      .positive()
      .nullable()
      .refine((value) => value, {
        message: 'Выберите юридическое лицо',
      })
      .default(null),
    agencyId: z
      .number()
      .int()
      .positive()
      .nullable()
      .refine((value) => value, {
        message: 'Выберите агентство недвижимости',
      })
      .default(null),
    agencyContractSignatoryId: z
      .number()
      .int()
      .positive()
      .nullable()
      .default(null),
  }),
  mipAgencyContractProperties: z.object({
    agencyContractCommission: agencyContractCommissionSchema,
  }),
});

export type MipAgencyContractSchema = z.infer<typeof mipAgencyContractSchema>;
export const initialValues = getDefaults(mipAgencyContractSchema);
export const validationSchema = toFormikValidationSchema(
  mipAgencyContractSchema,
);
