import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

export const realEstateAgentPickerSchema = z.object({
  realEstateAgent: z
    .object({
      id: z.number(),
      fullName: z.string(),
    })
    .nullable()
    .refine((value) => value, { message: 'Выберите агента' }),
});

export const initialValues: RealEstateAgentPickerSchema = {
  realEstateAgent: null,
};

export const validationSchema = toFormikValidationSchema(
  realEstateAgentPickerSchema,
);
export type RealEstateAgentPickerSchema = z.infer<
  typeof realEstateAgentPickerSchema
>;
