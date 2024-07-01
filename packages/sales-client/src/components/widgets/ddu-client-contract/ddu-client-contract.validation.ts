import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const dduClientContractSchema = z.object({
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
				is_main: z.boolean().default(false),
				share: z.number().default(0),
			})
			.array()
			.refine((value) => value.length, {
				message: 'Выберите клиента',
			})
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
	ddu_client_contract_properties: z.object({
		ddu_link: z.string().default(''),
		escrow_account_number: z.string().default(''),
		escrow_account_opening_date: z.string().default(''),
		escrow_period: z.string().default(''),
		is_escrow_discount: z.boolean().default(false),
		return_account: z.string().default(''),
	}),
});

export type DDUClientContractSchema = z.infer<typeof dduClientContractSchema>;
export const initialValues: DDUClientContractSchema = getDefaults(
	dduClientContractSchema,
);
export const validationSchema = toFormikValidationSchema(
	dduClientContractSchema,
);
