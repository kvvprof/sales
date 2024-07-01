import { FormikErrors, FormikTouched } from 'formik/dist/types';

import { ClientPropertiesSchema } from '@/components/common/client-properties/client-properties.validation';

export interface IClientProperties {
	values: ClientPropertiesSchema;
	touched?: FormikTouched<ClientPropertiesSchema>;
	errors?: FormikErrors<ClientPropertiesSchema>;
	handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
