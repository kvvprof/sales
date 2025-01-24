import { z } from 'zod';

export const agencyContractCommissionSchema = z.object({
  percent: z
    .number({ message: 'Введите процент' })
    .positive('Процент должен быть больше 0')
    .default(0),
  threshold: z
    .number({ message: 'Введите порог' })
    .nonnegative('Порог не может быть отрицательным')
    .default(0),
  maxDays: z
    .number({ message: 'Введите количество дней' })
    .int('Введите количество дней')
    .positive('Количество дней должно быть больше 0')
    .default(0),
});

export type AgencyContractCommissionSchema = z.infer<
  typeof agencyContractCommissionSchema
>;
