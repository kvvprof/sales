import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

export const realEstateAgentPickerSchema = z.object({
	real_estate_agent: z
		.object({
			id: z.number(),
			full_name: z.string(),
		})
		.nullable()
		.refine((value) => value, { message: 'Выберите агента' }),
});

export const initialValues: RealEstateAgentPickerSchema = {
	real_estate_agent: null,
};

export const validationSchema = toFormikValidationSchema(
	realEstateAgentPickerSchema,
);
export type RealEstateAgentPickerSchema = z.infer<
	typeof realEstateAgentPickerSchema
>;
