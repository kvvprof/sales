import { Card } from '@/common';
import { IAgencyCard } from '@/components/agency/agency-card/agency-card.interface';

export const AgencyCard = ({ id, name, onDelete }: IAgencyCard) => {
  return (
    <Card linkTo={`/agency/${id}`} onDelete={onDelete}>
      <p>{name}</p>
    </Card>
  );
};
