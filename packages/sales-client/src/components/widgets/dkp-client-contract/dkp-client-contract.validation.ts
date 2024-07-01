import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const dkpClientContractSchema = z.object({
	client_contract_properties: z.object({
		number: z.string().trim().min(1, 'Введите номер').default(''),
		date: z.string().trim().min(1, 'Выберите дату').default(''),
		registration_date: z.string().default(''),
		price: z
			.number()
			.positive({ message: 'Стоимость должна быть больше нуля' })
			.default(0),
		clients: z
			.object({
				client_id: z.number(),
				is_main: z.boolean(),
				share: z.number(),
			})
			.array()
			.default([]),
		product_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.refine((value) => value, {
				message: 'Выберите продукт',
			})
			.default(null),
		manager_id: z.number().int().positive().nullable().default(null),
		real_estate_agent_id: z.number().int().positive().nullable().default(null),
		bank_id: z.number().int().positive().nullable().default(null),
		agency_contract_ids: z.number().int().nonnegative().array().default([]),
	}),
});

export type DKPClientContractSchema = z.infer<typeof dkpClientContractSchema>;
export const initialValues: DKPClientContractSchema = getDefaults(
	dkpClientContractSchema,
);
export const validationSchema = toFormikValidationSchema(
	dkpClientContractSchema,
);
