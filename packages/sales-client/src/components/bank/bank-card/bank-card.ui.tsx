import { Card } from '@/common';
import { IBankCard } from '@/components/bank/bank-card/bank-card.interface';

export const BankCard = ({ name, onDelete }: IBankCard) => {
  return (
    <Card onDelete={onDelete}>
      <p>{name}</p>
    </Card>
  );
};
