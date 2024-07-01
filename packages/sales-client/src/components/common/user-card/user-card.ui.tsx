import { IUserCard } from '@/components/common/user-card/user-card.interface';
import { Card } from '@/components/ui/card/card.ui';

export const UserCard = ({ full_name, onDelete }: IUserCard) => {
	return (
		<Card onDelete={onDelete}>
			<p>{full_name}</p>
		</Card>
	);
};
