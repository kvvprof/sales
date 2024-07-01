import { z } from 'zod';

export const clientPropertiesSchema = z.object({
	full_name: z.string().trim().min(1, 'Введите название').default(''),
	inn: z.string().default(''),
	phone: z.string().default(''),
	address: z.string().default(''),
	email: z.string().default(''),
});

export type ClientPropertiesSchema = z.infer<typeof clientPropertiesSchema>;
