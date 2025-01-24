import { Navigate, useParams } from 'react-router-dom';

import { Agency } from '@/components/agency/agency/agency.ui';

const AgencyPage = () => {
  const { id } = useParams();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <Agency id={parseInt(id, 10)} />;
};

export default AgencyPage;
