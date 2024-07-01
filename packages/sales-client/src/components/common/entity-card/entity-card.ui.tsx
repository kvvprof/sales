import { IEntityCard } from '@/components/common/entity-card/entity-card.interface';

import { Card } from '@/components/ui/card/card.ui';

export const EntityCard = ({ name, onDelete }: IEntityCard) => {
	return (
		<Card onDelete={onDelete}>
			<p>{name}</p>
		</Card>
	);
};
