import { FormikErrors, FormikTouched } from 'formik/dist/types';

import { AgencyContractCommissionSchema } from '@/components/common/agency-contract-commission/agency-contract-commission.validation';

export interface IAgencyContractCommission {
	values: AgencyContractCommissionSchema;
	prefix: string;
	touched?: FormikTouched<AgencyContractCommissionSchema>;
	errors?: FormikErrors<AgencyContractCommissionSchema>;
	onDefaultValues?(): void;
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
