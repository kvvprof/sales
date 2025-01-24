import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { ClientEntity } from '@/components/client/client-entity/client-entity.ui';

const ClientEntityPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <ClientEntity id={id} />;
};

export default ClientEntityPage;
