import { Navigate } from 'react-router-dom';

import { ClientIndividualMinor } from '@/components/widgets/client-individual-minor/client-individual-minor.ui';
import { useIdParam } from '@/hooks/use-id-param';

const ClientIndividualMinorPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <ClientIndividualMinor id={id} />;
};

export default ClientIndividualMinorPage;
