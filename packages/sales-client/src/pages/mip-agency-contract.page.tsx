import { Navigate } from 'react-router-dom';

import { MIPAgencyContract } from '@/components/widgets/mip-agency-contract/mip-agency-contract.ui';
import { useIdParam } from '@/hooks/use-id-param';

const MIPAgencyContractPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <MIPAgencyContract id={id} />;
};

export default MIPAgencyContractPage;
