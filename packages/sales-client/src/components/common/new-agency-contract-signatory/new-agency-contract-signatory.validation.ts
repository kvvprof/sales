import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const newAgencyContractSignatorySchema = z.object({
	full_name: z.string().trim().min(1, 'Введите ФИО').default(''),
	email: z.string().trim().min(1, 'Введите эл. почту').default(''),
	phone: z.string().trim().min(1, 'Введите телефон').default(''),
	title: z.string().trim().min(1, 'Введите должность').default(''),
	based_on: z.string().trim().min(1, 'Введите основание').default(''),
});

export const validationSchema = toFormikValidationSchema(
	newAgencyContractSignatorySchema,
);
export const initialValues = getDefaults(newAgencyContractSignatorySchema);
export type NewAgencyContractSignatorySchema = z.infer<
	typeof newAgencyContractSignatorySchema
>;
