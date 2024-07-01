import { IAgencyContractSignatoryCard } from '@/components/common/agency-contract-signatory-card/agency-contract-signatory.interface';
import { Card } from '@/components/ui/card/card.ui';

export const AgencyContractSignatoryCard = ({
	full_name,
	phone,
	email,
	title,
	based_on,
	onDelete,
}: IAgencyContractSignatoryCard) => {
	return (
		<Card onDelete={onDelete}>
			<p>{full_name}</p>
			{phone && <p className='text-xs font-light'>Телефон: {phone}</p>}
			{email && <p className='text-xs font-light'>Эл. почта: {email}</p>}
			{title && <p className='text-xs font-light'>Должность: {title}</p>}
			{based_on && <p className='text-xs font-light'>Основание: {based_on}</p>}
		</Card>
	);
};
