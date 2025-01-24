import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { RealEstateAgencyAct } from '@/components/real-estate-agency-act/real-estate-agency-act/real-estate-agency-act.ui';

const RealEstateAgencyActPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <RealEstateAgencyAct id={id} />;
};

export default RealEstateAgencyActPage;
