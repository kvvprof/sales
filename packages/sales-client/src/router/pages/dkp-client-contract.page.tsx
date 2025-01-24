import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { DkpClientContract } from '@/components/client-contract/dkp-client-contract/dkp-client-contract.ui';

const DkpClientContractPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <DkpClientContract id={id} />;
};

export default DkpClientContractPage;
