import { Input, NamedGroup } from '@/common';
import { IClientPassport } from '@/components/client/client-passport/client-passport.interface';

export const ClientPassport = ({
  prefix,
  values,
  onChange,
}: IClientPassport) => {
  return (
    <NamedGroup title='Паспорт'>
      <Input
        label='Номер'
        name={`${prefix}.clientPassport.number`}
        value={values.number}
        onChange={onChange}
      />
      <Input
        label='Код'
        name={`${prefix}.clientPassport.code`}
        value={values.code}
        onChange={onChange}
      />
      <Input
        label='Выдан'
        name={`${prefix}.clientPassport.issued`}
        value={values.issued}
        onChange={onChange}
      />
      <Input
        label='Место рождения'
        name={`${prefix}.clientPassport.placeOfBirth`}
        value={values.placeOfBirth}
        onChange={onChange}
      />
      <Input
        label='Адрес регистрации'
        name={`${prefix}.clientPassport.registrationAddress`}
        value={values.registrationAddress}
        onChange={onChange}
      />
    </NamedGroup>
  );
};
