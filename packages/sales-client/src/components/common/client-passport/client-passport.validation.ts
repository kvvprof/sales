import { z } from 'zod';

export const clientPassportSchema = z.object({
	number: z.string().default(''),
	issued: z.string().default(''),
	code: z.string().default(''),
	place_of_birth: z.string().default(''),
	registration_address: z.string().default(''),
});

export type ClientPassportSchema = z.infer<typeof clientPassportSchema>;
