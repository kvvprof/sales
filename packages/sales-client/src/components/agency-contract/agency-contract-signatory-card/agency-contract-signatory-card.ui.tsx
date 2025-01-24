import { Card } from '@/common';
import { IAgencyContractSignatoryCard } from '@/components/agency-contract/agency-contract-signatory-card/agency-contract-signatory.interface';

export const AgencyContractSignatoryCard = ({
  fullName,
  basedOn,
  title,
  onDelete,
}: IAgencyContractSignatoryCard) => {
  return (
    <Card onDelete={onDelete}>
      <p>{fullName}</p>
      {basedOn && (
        <p className='text-xs font-light'>
          <b>Основание:</b> {basedOn}
        </p>
      )}
      {title && (
        <p className='text-xs font-light'>
          <b>Должность:</b> {title}
        </p>
      )}
    </Card>
  );
};
