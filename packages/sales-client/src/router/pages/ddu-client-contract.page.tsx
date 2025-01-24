import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { DduClientContract } from '@/components/client-contract/ddu-client-contract/ddu-client-contract.ui';

const DduClientContractPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <DduClientContract id={id} />;
};

export default DduClientContractPage;
