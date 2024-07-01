import { Navigate } from 'react-router-dom';

import { RealEstateAgent } from '@/components/widgets/real-estate-agent/real-estate-agent.ui';
import { useIdParam } from '@/hooks/use-id-param';

const RealEstateAgentPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <RealEstateAgent id={id} />;
};

export default RealEstateAgentPage;
