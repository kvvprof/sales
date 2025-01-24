import { Card } from '@/common';
import { IObjectCard } from '@/components/object/object-card/object-card.interface';

export const ObjectCard = ({ name, onDelete }: IObjectCard) => {
  return (
    <Card onDelete={onDelete}>
      <p>{name}</p>
    </Card>
  );
};
