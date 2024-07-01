import { Navigate } from 'react-router-dom';

import { ClientIndividual } from '@/components/widgets/client-individual/client-individual.ui';
import { useIdParam } from '@/hooks/use-id-param';

const ClientIndividualPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <ClientIndividual id={id} />;
};

export default ClientIndividualPage;
