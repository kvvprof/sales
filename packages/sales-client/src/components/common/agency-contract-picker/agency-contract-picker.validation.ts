import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { AgencyContractType } from '@/__types__/graphql';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const agencyContractPickerSchema = z.object({
	agency: z
		.object({
			id: z.number(),
			name: z.string(),
			common_db_contractors_id: z.number(),
		})
		.nullable()
		.refine((value) => value, {
			message: 'Выберите агентство',
		})
		.default(null),
	agency_contract: z
		.object({
			agency_contract_properties: z.object({
				id: z.number(),
				number: z.string(),
				date: z.string(),
				agency_contract_type: z.nativeEnum(AgencyContractType),
			}),
			object: z.object({
				id: z.number(),
				name: z.string(),
				common_db_objects_id: z.number(),
			}),
			agency: z.object({
				id: z.number(),
				name: z.string(),
				common_db_contractors_id: z.number(),
			}),
		})
		.nullable()
		.refine((value) => value, {
			message: 'Выберите контракт агентства',
		})
		.default(null),
});

export type AgencyContractPickerSchema = z.infer<
	typeof agencyContractPickerSchema
>;
export const initialValues = getDefaults(agencyContractPickerSchema);
export const validationSchema = toFormikValidationSchema(
	agencyContractPickerSchema,
);
