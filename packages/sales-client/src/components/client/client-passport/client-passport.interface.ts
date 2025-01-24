import { FormikErrors, FormikTouched } from 'formik/dist/types';

import { ClientPassportSchema } from '@/components/client/client-passport/client-passport.validation';

export interface IClientPassport {
  prefix: string;
  values: ClientPassportSchema;
  touched?: FormikTouched<ClientPassportSchema>;
  errors?: FormikErrors<ClientPassportSchema>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
