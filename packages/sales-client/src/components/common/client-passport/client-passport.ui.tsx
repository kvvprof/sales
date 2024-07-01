import { IClientPassport } from '@/components/common/client-passport/client-passport.interface';
import { Input } from '@/components/ui/input/input.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';

export const ClientPassport = ({
	prefix,
	values,
	handleChange,
}: IClientPassport) => {
	return (
		<NamedGroup title='Паспорт'>
			<Input
				label='Номер'
				name={`${prefix}.client_passport.number`}
				value={values.number}
				onChange={handleChange}
			/>
			<Input
				label='Код'
				name={`${prefix}.client_passport.code`}
				value={values.code}
				onChange={handleChange}
			/>
			<Input
				label='Выдан'
				name={`${prefix}.client_passport.issued`}
				value={values.issued}
				onChange={handleChange}
			/>
			<Input
				label='Место рождения'
				name={`${prefix}.client_passport.place_of_birth`}
				value={values.place_of_birth}
				onChange={handleChange}
			/>
			<Input
				label='Адрес регистрации'
				name={`${prefix}.client_passport.registration_address`}
				value={values.registration_address}
				onChange={handleChange}
			/>
		</NamedGroup>
	);
};
