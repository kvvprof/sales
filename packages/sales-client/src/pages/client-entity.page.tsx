import { Navigate } from 'react-router-dom';

import { ClientEntity } from '@/components/widgets/client-entity/client-entity.ui';
import { useIdParam } from '@/hooks/use-id-param';

const ClientEntityPage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <ClientEntity id={id} />;
};

export default ClientEntityPage;
