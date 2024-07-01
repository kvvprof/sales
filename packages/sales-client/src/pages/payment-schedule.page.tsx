import { Navigate } from 'react-router-dom';

import { PaymentSchedule } from '@/components/widgets/payment-schedule/payment-schedule.ui';
import { useIdParam } from '@/hooks/use-id-param';

const PaymentSchedulePage = () => {
	const id = useIdParam();

	if (!id) {
		return <Navigate to='/' replace={true} />;
	}

	return <PaymentSchedule id={id} />;
};

export default PaymentSchedulePage;
