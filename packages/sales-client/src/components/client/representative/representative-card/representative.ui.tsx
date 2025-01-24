import { Card, cn } from '@/common';
import { IRepresentativeCard } from '@/components/client/representative/representative-card/representative.interface';

export const RepresentativeCard = ({
  fullName,
  clientFullName,
  onClick,
  onDelete,
}: IRepresentativeCard) => {
  return (
    <Card onDelete={onDelete} onClick={onClick}>
      <div className={cn('flex flex-col gap-2', clientFullName && 'text-xs')}>
        <p>
          {clientFullName && <b>Представитель: </b>}
          {fullName}
        </p>
        {clientFullName && (
          <p>
            <b>Клиент: </b> {clientFullName}
          </p>
        )}
      </div>
    </Card>
  );
};
