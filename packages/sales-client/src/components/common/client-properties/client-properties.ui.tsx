import { IClientProperties } from '@/components/common/client-properties/client-properties.interface';
import { Input } from '@/components/ui/input/input.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';

export const ClientProperties = ({
	values,
	touched,
	errors,
	handleChange,
}: IClientProperties) => {
	return (
		<NamedGroup title='Основные данные'>
			<Input
				label='Название'
				name='client_properties.full_name'
				value={values.full_name}
				error={touched?.full_name ? errors?.full_name : null}
				onChange={handleChange}
			/>
			<Input
				label='ИНН'
				name='client_properties.inn'
				value={values.inn}
				onChange={handleChange}
			/>
			<Input
				label='Телефон'
				name='client_properties.phone'
				value={values.phone}
				onChange={handleChange}
			/>
			<Input
				label='Адрес'
				name='client_properties.address'
				value={values.address}
				onChange={handleChange}
			/>
			<Input
				label='Эл. почта'
				type='email'
				name='client_properties.email'
				value={values.email}
				onChange={handleChange}
			/>
		</NamedGroup>
	);
};
