import { Navigate } from 'react-router-dom';

import { DKPClientContract } from '@/components/widgets/dkp-client-contract/dkp-client-contract.ui';
import { useIdParam } from '@/hooks/use-id-param';

const DKPClientContractPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <DKPClientContract id={id} />;
};

export default DKPClientContractPage;
