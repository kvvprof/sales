import { Card } from '@/common';
import { IEntityCard } from '@/components/entity/entity-card/entity-card.interface';

export const EntityCard = ({ name, onDelete }: IEntityCard) => {
  return (
    <Card onDelete={onDelete}>
      <p>{name}</p>
    </Card>
  );
};
