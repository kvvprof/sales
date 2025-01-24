import { CLIENT_CATEGORY_ROUTE_MAPPING, Card } from '@/common';
import { IClientCard } from '@/components/client/client-card/client-card.interface';

export const ClientCard = <T extends Record<string, unknown>>({
  id,
  fullName,
  clientCategory,
  onDelete,
}: IClientCard<T>) => {
  return (
    <Card
      linkTo={`/client/${CLIENT_CATEGORY_ROUTE_MAPPING[clientCategory]}/${id}`}
      onDelete={onDelete}
    >
      <p>{fullName}</p>
    </Card>
  );
};
