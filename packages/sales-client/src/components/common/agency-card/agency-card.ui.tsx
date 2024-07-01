import { IAgencyCard } from '@/components/common/agency-card/agency-card.interface';

import { Card } from '@/components/ui/card/card.ui';

export const AgencyCard = ({ id, name, onDelete }: IAgencyCard) => {
	return (
		<Card linkTo={`/agency/${id}`} onDelete={onDelete}>
			<p>{name}</p>
		</Card>
	);
};
