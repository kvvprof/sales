import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { MipAgencyContract } from '@/components/agency-contract/mip-agency-contract/mip-agency-contract.ui';

const MipAgencyContractPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <MipAgencyContract id={id} />;
};

export default MipAgencyContractPage;
