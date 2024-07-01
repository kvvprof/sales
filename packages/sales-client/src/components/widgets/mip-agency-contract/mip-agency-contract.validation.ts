import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { agencyContractCommissionSchema } from '@/components/common/agency-contract-commission/agency-contract-commission.validation';
import { getDefaults } from '@/utils/get-defaults/get-defaults';

export const mipAgencyContractSchema = z.object({
	agency_contract_properties: z.object({
		responsible_user_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.refine((value) => value, {
				message: 'Выберите ответственного сотрудника',
			})
			.default(null),
		object_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.refine((value) => value, {
				message: 'Выберите объект',
			})
			.default(null),
		entity_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.refine((value) => value, {
				message: 'Выберите юридическое лицо',
			})
			.default(null),
		agency_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.refine((value) => value, {
				message: 'Выберите агентство недвижимости',
			})
			.default(null),
		agency_contract_signatory_id: z
			.number()
			.int()
			.positive()
			.nullable()
			.default(null),
	}),
	mip_agency_contract_properties: z.object({
		agency_contract_commission: agencyContractCommissionSchema,
	}),
});

export type MIPAgencyContractSchema = z.infer<typeof mipAgencyContractSchema>;
export const initialValues = getDefaults(mipAgencyContractSchema);
export const validationSchema = toFormikValidationSchema(
	mipAgencyContractSchema,
);
