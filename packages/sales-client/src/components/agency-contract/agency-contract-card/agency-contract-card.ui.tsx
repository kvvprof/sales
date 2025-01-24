import { truncate } from 'lodash';

import { AgencyContractType } from '@/__types__/graphql';
import { Card } from '@/common';
import { IAgencyContractCard } from '@/components/agency-contract/agency-contract-card/agency-contract-card.interface';

export const AgencyContractCard = ({
  agencyContractProperties: { id, number, agencyContractType },
  agency,
  object,
  mipAgencyContractProperties,
  realEstateAgencyContractProperties,
  onDelete,
}: IAgencyContractCard) => {
  return (
    <Card
      linkTo={`/agency-contract/${agencyContractType === AgencyContractType.RealEstateAgencyContract ? 'real-estate-agency' : 'mip-agency'}/${id}`}
      onDelete={onDelete}
    >
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <p className='font-medium'>
            {truncate(agency.name, { length: 35, omission: '...' })}
          </p>
          <p className='text-xs'>{number}</p>
          <p className='text-xs'>{object.name}</p>
          <p className='text-xs'>
            {agencyContractType === AgencyContractType.RealEstateAgencyContract
              ? 'Контракт АН'
              : 'Контракт МиП'}
          </p>
        </div>
        <div className='border-1 border-c-primary rounded-lg border-dashed p-2 text-xs'>
          <p className='font-medium'>Комиссия</p>
          <div className='flex gap-2'>
            <p>
              Процент:{' '}
              {mipAgencyContractProperties?.agencyContractCommission.percent ||
                realEstateAgencyContractProperties?.agencyContractCommission
                  .percent}
              %
            </p>
            <p>
              Порог:{' '}
              {mipAgencyContractProperties?.agencyContractCommission
                .threshold ||
                realEstateAgencyContractProperties?.agencyContractCommission
                  .threshold}
              %
            </p>
            <p>
              Дней до оплаты:{' '}
              {mipAgencyContractProperties?.agencyContractCommission.maxDays ||
                realEstateAgencyContractProperties?.agencyContractCommission
                  .maxDays}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
