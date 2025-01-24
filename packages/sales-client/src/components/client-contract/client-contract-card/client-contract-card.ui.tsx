import { Card, CLIENT_CONTRACT_TYPE_MAPPING } from '@/common';
import { IClientContractCard } from '@/components/client-contract/client-contract-card/client-contract-card.interface';

export const ClientContractCard = ({
  id,
  number,
  price,
  clientContractType,
  onDelete,
}: IClientContractCard) => {
  return (
    <Card linkTo={`/client-contract/ddu/${id}`} onDelete={onDelete}>
      <div className='flex flex-col gap-1'>
        <p className='font-medium'>{number}</p>
        <p className='text-xs'>
          Тип: {CLIENT_CONTRACT_TYPE_MAPPING[clientContractType]}
        </p>
        <p className='text-xs'>
          Стоимость: {Number(price).toLocaleString('ru-RU')} ₽
        </p>
      </div>
    </Card>
  );
};
