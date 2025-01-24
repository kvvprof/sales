import { FormikErrors, FormikTouched } from 'formik/dist/types';

import { AgencyContractCommissionSchema } from '@/components/agency-contract/agency-contract-commission/agency-contract-commission.validation';

export interface IAgencyContractCommission {
  values: AgencyContractCommissionSchema;
  prefix: string;
  touched?: FormikTouched<AgencyContractCommissionSchema>;
  errors?: FormikErrors<AgencyContractCommissionSchema>;
  handleDefaultValues?(): void;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
