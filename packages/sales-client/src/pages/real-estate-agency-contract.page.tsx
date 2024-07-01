import { Navigate } from 'react-router-dom';

import { RealEstateAgencyContract } from '@/components/widgets/real-estate-agency-contract/real-estate-agency-contract.ui';
import { useIdParam } from '@/hooks/use-id-param';

const RealEstateAgencyContractPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <RealEstateAgencyContract id={id} />;
};

export default RealEstateAgencyContractPage;
