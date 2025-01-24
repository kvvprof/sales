import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { RealEstateAgent } from '@/components/real-estate-agent/real-estate-agent/real-estate-agent.ui';

const RealEstateAgentPage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <RealEstateAgent id={id} />;
};

export default RealEstateAgentPage;
