import { FormikErrors, FormikTouched } from 'formik/dist/types';

import { ClientPropertiesSchema } from '@/components/client/client-properties/client-properties.validation';

export interface IClientProperties {
  values: ClientPropertiesSchema;
  touched?: FormikTouched<ClientPropertiesSchema>;
  errors?: FormikErrors<ClientPropertiesSchema>;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
