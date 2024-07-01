import { z } from 'zod';

import { toFormikValidationSchema } from 'zod-formik-adapter';

import { agencyContractCommissionSchema } from '@/components/common/agency-contract-commission/agency-contract-commission.validation';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const newRealEstateAgencyContractSchema = z.object({
	agency_contract_properties: z.object({
		responsible_user_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.default(null)
			.refine((value) => value, {
				message: 'Выберите ответственного сотрудника',
			}),
		object_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.default(null)
			.refine((value) => value, {
				message: 'Выберите объект',
			}),
		entity_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.default(null)
			.refine((value) => value, {
				message: 'Выберите юридическое лицо',
			}),
		agency_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.default(null)
			.refine((value) => value, {
				message: 'Выберите агентство',
			}),
		agency_contract_signatory_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.default(null),
	}),
	real_estate_agency_contract_properties: z.object({
		agency_contract_commission: agencyContractCommissionSchema,
	}),
});
export type NewRealEstateAgencyContractSchema = z.infer<
	typeof newRealEstateAgencyContractSchema
>;
export const initialValues = getDefaults(newRealEstateAgencyContractSchema);
export const validationSchema = toFormikValidationSchema(
	newRealEstateAgencyContractSchema,
);
