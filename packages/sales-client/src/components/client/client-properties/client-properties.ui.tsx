import { Input, NamedGroup } from '@/common';
import { IClientProperties } from '@/components/client/client-properties/client-properties.interface';

export const ClientProperties = ({
  values,
  touched,
  errors,
  onChange,
}: IClientProperties) => {
  return (
    <NamedGroup title='Основные данные'>
      <Input
        label='Название'
        name='clientProperties.fullName'
        value={values.fullName}
        error={touched?.fullName ? errors?.fullName : null}
        onChange={onChange}
      />
      <Input
        label='ИНН'
        name='clientProperties.inn'
        value={values.inn}
        onChange={onChange}
      />
      <Input
        label='Телефон'
        name='clientProperties.phone'
        value={values.phone}
        onChange={onChange}
      />
      <Input
        label='Адрес'
        name='clientProperties.address'
        value={values.address}
        onChange={onChange}
      />
      <Input
        label='Эл. почта'
        type='email'
        name='clientProperties.email'
        value={values.email}
        onChange={onChange}
      />
    </NamedGroup>
  );
};
