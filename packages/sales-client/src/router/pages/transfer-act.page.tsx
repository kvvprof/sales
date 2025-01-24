import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { TransferAct } from '@/components/transfer-act/transfer-act/transfer-act.ui';

const TransferActPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <TransferAct id={id} />;
};

export default TransferActPage;
