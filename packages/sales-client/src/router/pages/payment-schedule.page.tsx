import { Navigate } from 'react-router-dom';

import { useIdParam } from '@/common';
import { PaymentSchedule } from '@/components/payment-schedule/payment-schedule/payment-schedule.ui';

const PaymentSchedulePage = () => {
  const id = useIdParam();

  if (!id) {
    return <Navigate to='/' replace={true} />;
  }

  return <PaymentSchedule id={id} />;
};

export default PaymentSchedulePage;
