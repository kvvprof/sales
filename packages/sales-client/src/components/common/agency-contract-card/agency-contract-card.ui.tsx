import { AgencyContractType } from '@/__types__/graphql';
import { IAgencyContractCard } from '@/components/common/agency-contract-card/agency-contract-card.interface';
import { Card } from '@/components/ui/card/card.ui';

export const AgencyContractCard = ({
	agency_contract_properties: { id, number, agency_contract_type },
	agency,
	object,
	onDelete,
}: IAgencyContractCard) => {
	return (
		<Card
			linkTo={`/agency-contract/${agency_contract_type === AgencyContractType.RealEstateAgencyContract ? 'real-estate-agency' : 'mip-agency'}/${id}`}
			onDelete={onDelete}
		>
			<div className='flex flex-col gap-1'>
				<p className='text-xs font-medium'>{agency.name}</p>
				<p className='text-xs'>{number}</p>
				<p className='text-xs'>{object.name}</p>
				<p className='text-xs'>
					{agency_contract_type === AgencyContractType.RealEstateAgencyContract
						? 'Контракт АН'
						: 'Контракт МиП'}
				</p>
			</div>
		</Card>
	);
};
