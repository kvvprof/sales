import { IObjectCard } from '@/components/common/object-card/object-card.interface';

import { Card } from '@/components/ui/card/card.ui';

export const ObjectCard = ({ name, onDelete }: IObjectCard) => {
	return (
		<Card onDelete={onDelete}>
			<p>{name}</p>
		</Card>
	);
};
