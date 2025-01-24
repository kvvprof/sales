import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { ClientIndividualMinor } from '@/components/client/client-individual-minor/client-individual-minor.ui';

const ClientIndividualMinorPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <ClientIndividualMinor id={id} />;
};

export default ClientIndividualMinorPage;
