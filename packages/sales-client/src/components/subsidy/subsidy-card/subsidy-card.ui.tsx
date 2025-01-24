import { Card } from '@/common';
import { ISubsidyCard } from '@/components/subsidy/subsidy-card/subsidy-card.interface';

export const SubsidyCard = ({ name, onDelete }: ISubsidyCard) => {
  return (
    <Card onDelete={onDelete}>
      <p>{name}</p>
    </Card>
  );
};
