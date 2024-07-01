import { IBankCard } from '@/components/common/bank-card/bank-card.interface';
import { Card } from '@/components/ui/card/card.ui';

export const BankCard = ({ name, onDelete }: IBankCard) => {
	return (
		<Card onDelete={onDelete}>
			<p>{name}</p>
		</Card>
	);
};
