import { z } from 'zod';

export const clientPassportSchema = z.object({
  number: z.string().default(''),
  issued: z.string().default(''),
  code: z.string().default(''),
  placeOfBirth: z.string().default(''),
  registrationAddress: z.string().default(''),
});

export type ClientPassportSchema = z.infer<typeof clientPassportSchema>;
