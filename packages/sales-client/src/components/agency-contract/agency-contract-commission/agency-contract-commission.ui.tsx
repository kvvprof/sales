import { Input, MiniButton, NamedGroup } from '@/common';
import { IAgencyContractCommission } from '@/components/agency-contract/agency-contract-commission/agency-contract-commission.interface';

export const AgencyContractCommission = ({
  prefix,
  values,
  touched,
  errors,
  handleDefaultValues,
  onChange,
}: IAgencyContractCommission) => {
  return (
    <NamedGroup title='Комиссия'>
      {handleDefaultValues && (
        <div className='flex'>
          <MiniButton onClick={handleDefaultValues}>
            Установить комиссию по умолчанию
          </MiniButton>
        </div>
      )}
      <Input
        label='Процент %'
        name={`${prefix}.agencyContractCommission.percent`}
        type='number'
        step='0.01'
        value={values.percent}
        error={touched?.percent ? errors?.percent : null}
        onChange={onChange}
      />
      <Input
        label='Порог %'
        name={`${prefix}.agencyContractCommission.threshold`}
        type='number'
        step='0.01'
        value={values.threshold}
        error={touched?.threshold ? errors?.threshold : null}
        onChange={onChange}
      />
      <Input
        label='Дней до оплаты'
        name={`${prefix}.agencyContractCommission.maxDays`}
        type='number'
        step='1'
        value={values.maxDays}
        error={touched?.maxDays ? errors?.maxDays : null}
        onChange={onChange}
      />
    </NamedGroup>
  );
};
