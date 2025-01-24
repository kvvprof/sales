import { Card } from '@/common';
import { IRealEstateAgentCard } from '@/components/real-estate-agent/real-estate-agent-card/real-estate-agent-card.interface';

export const RealEstateAgentCard = ({
  id,
  fullName,
  onDelete,
}: IRealEstateAgentCard) => {
  return (
    <Card linkTo={`/real-estate-agent/${id}`} onDelete={onDelete}>
      <p>{fullName}</p>
    </Card>
  );
};
