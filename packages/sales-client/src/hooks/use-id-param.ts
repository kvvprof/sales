import { useParams } from 'react-router-dom';

export const useIdParam = () => {
	const { id } = useParams();

	if (!id || isNaN(parseInt(id, 10))) {
		return null;
	}

	return parseInt(id, 10);
};
