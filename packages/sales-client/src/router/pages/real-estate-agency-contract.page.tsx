import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { RealEstateAgencyContract } from '@/components/agency-contract/real-estate-agency-contract/real-estate-agency-contract.ui';

const RealEstateAgencyContractPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <RealEstateAgencyContract id={id} />;
};

export default RealEstateAgencyContractPage;
