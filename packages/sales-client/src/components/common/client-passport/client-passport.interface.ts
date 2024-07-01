import { FormikErrors, FormikTouched } from 'formik/dist/types';

import { ClientPassportSchema } from '@/components/common/client-passport/client-passport.validation';

export interface IClientPassport {
	prefix: string;
	values: ClientPassportSchema;
	touched?: FormikTouched<ClientPassportSchema>;
	errors?: FormikErrors<ClientPassportSchema>;
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
