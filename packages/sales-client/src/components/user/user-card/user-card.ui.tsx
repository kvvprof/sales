import { Card } from '@/common';
import { IUserCard } from '@/components/user/user-card/user-card.interface';

export const UserCard = ({ fullName, onDelete }: IUserCard) => {
  return (
    <Card onDelete={onDelete}>
      <p>{fullName}</p>
    </Card>
  );
};
