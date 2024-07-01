import { IRealEstateAgentCard } from '@/components/common/real-estate-agent-card/real-estate-agent-card.interface';
import { Card } from '@/components/ui/card/card.ui';

export const RealEstateAgentCard = ({
	id,
	full_name,
	onDelete,
}: IRealEstateAgentCard) => {
	return (
		<Card linkTo={`/real-estate-agent/${id}`} onDelete={onDelete}>
			<p>{full_name}</p>
		</Card>
	);
};
