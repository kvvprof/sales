import { Navigate } from 'react-router-dom';

import { DDUClientContract } from '@/components/widgets/ddu-client-contract/ddu-client-contract.ui';
import { useIdParam } from '@/hooks/use-id-param';

const DDUClientContractPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <DDUClientContract id={id} />;
};

export default DDUClientContractPage;
