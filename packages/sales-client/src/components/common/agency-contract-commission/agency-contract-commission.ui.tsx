import { IAgencyContractCommission } from '@/components/common/agency-contract-commission/agency-contract-commission.interface';

import { Input } from '@/components/ui/input/input.ui';
import { MiniButton } from '@/components/ui/mini-button/mini-button.ui';
import { NamedGroup } from '@/components/ui/named-group/named-group.ui';

export const AgencyContractCommission = ({
	prefix,
	values,
	touched,
	errors,
	onDefaultValues,
	handleChange,
}: IAgencyContractCommission) => {
	return (
		<NamedGroup title='Комиссия'>
			{onDefaultValues && (
				<div className='flex'>
					<MiniButton onClick={onDefaultValues}>
						Установить комиссию по умолчанию
					</MiniButton>
				</div>
			)}
			<Input
				label='Процент %'
				name={`${prefix}.agency_contract_commission.percent`}
				type='number'
				step='0.01'
				value={values.percent}
				error={touched?.percent ? errors?.percent : null}
				onChange={handleChange}
			/>
			<Input
				label='Порог %'
				name={`${prefix}.agency_contract_commission.threshold`}
				type='number'
				step='0.01'
				value={values.threshold}
				error={touched?.threshold ? errors?.threshold : null}
				onChange={handleChange}
			/>
			<Input
				label='Дней до оплаты'
				name={`${prefix}.agency_contract_commission.max_days`}
				type='number'
				step='1'
				value={values.max_days}
				error={touched?.max_days ? errors?.max_days : null}
				onChange={handleChange}
			/>
		</NamedGroup>
	);
};
