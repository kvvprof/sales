import { IClientCard } from '@/components/common/client-card/client-card.interface';
import { Card } from '@/components/ui/card/card.ui';
import { CLIENT_CATEGORY_ROUTE_MAP } from '@/configs/enums.map';

export const ClientCard = <T extends Record<string, unknown>>({
	id,
	full_name,
	client_category,
	onDelete,
}: IClientCard<T>) => {
	return (
		<Card
			linkTo={`/client/${CLIENT_CATEGORY_ROUTE_MAP[client_category]}/${id}`}
			onDelete={onDelete}
		>
			<p>{full_name}</p>
		</Card>
	);
};
