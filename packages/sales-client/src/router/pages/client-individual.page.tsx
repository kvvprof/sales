import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { ClientIndividual } from '@/components/client/client-individual/client-individual.ui';

const ClientIndividualPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <ClientIndividual id={id} />;
};

export default ClientIndividualPage;
