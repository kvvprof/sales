import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { NewActualPayment } from '@/components/common/new-actual-payment/new-actual-payment.ui';
import { NewScheduledPayment } from '@/components/common/new-scheduled-payment/new-scheduled-payment.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { ContentLayout } from '@/components/ui/content-layout/content-layout.ui';
import { Dropdown } from '@/components/ui/dropdown/dropdown.ui';
import { Modal } from '@/components/ui/modal/modal.ui';
import { Toolbar } from '@/components/ui/toolbar/toolbar.ui';
import { GET_PAYMENTS } from '@/components/widgets/payment-schedule/payment-schedule.gql';
import { IPaymentSchedule } from '@/components/widgets/payment-schedule/payment-schedule.interface';
import { SCHEDULED_PAYMENT_TYPE_MAP } from '@/configs/enums.map';

export const PaymentSchedule = ({ id }: IPaymentSchedule) => {
	const [isOpenNewScheduledPaymentModal, setIsOpenNewScheduledPaymentModal] =
		useState<boolean>(false);
	const [isOpenNewActualPaymentModal, setIsOpenNewActualPaymentModal] =
		useState<boolean>(false);
	const navigate = useNavigate();

	const {
		loading: getPaymentsLoading,
		data: getPaymentsData,
		refetch: getPaymentsRefetch,
	} = useQuery(GET_PAYMENTS, {
		variables: {
			getActualPaymentsInput: { client_contract_id: id },
			getScheduledPaymentsInput: { client_contract_id: id },
		},
		onError(error) {
			navigate('/', { replace: true });
			toast.error(error.message);
		},
	});

	const setToolbarText = useMemo(() => {
		const scheduledPayments =
			getPaymentsData?.getScheduledPayments.scheduled_payments.reduce(
				(acc, curr) => acc + parseFloat(curr.payment),
				0,
			);

		const actualPayments =
			getPaymentsData?.getActualPayments.actual_payments.reduce(
				(acc, curr) => acc + parseFloat(curr.payment),
				0,
			);

		return `Осталось заплатить ${((scheduledPayments || 0) - (actualPayments || 0)).toLocaleString('ru-RU')} ₽`;
	}, [getPaymentsData]);

	return (
		<>
			<Modal
				title='Создание запланированного платежа'
				isOpen={isOpenNewScheduledPaymentModal}
				onClose={() => setIsOpenNewScheduledPaymentModal(false)}
			>
				<NewScheduledPayment
					client_contract_id={id}
					onSubmit={() => {
						setIsOpenNewScheduledPaymentModal(false);
						getPaymentsRefetch();
					}}
				/>
			</Modal>
			<Modal
				title='Создание фактического платежа'
				isOpen={isOpenNewActualPaymentModal}
				onClose={() => setIsOpenNewActualPaymentModal(false)}
			>
				<NewActualPayment
					client_contract_id={id}
					onSubmit={() => {
						setIsOpenNewActualPaymentModal(false);
						getPaymentsRefetch();
					}}
				/>
			</Modal>
			<BootLayout isLoading={getPaymentsLoading}>
				<ContentLayout title={`График платежей № ${id}`}>
					<Toolbar text={setToolbarText}>
						<Dropdown>
							<Dropdown.Item
								name='Создать запланированный платеж'
								onClick={() => setIsOpenNewScheduledPaymentModal(true)}
							/>
							<Dropdown.Item
								name='Создать фактический платеж'
								onClick={() => setIsOpenNewActualPaymentModal(true)}
							/>
						</Dropdown>
					</Toolbar>
					<div className='flex gap-4'>
						<div className='border-1 border-c-line-primary flex w-full flex-col gap-2 rounded-lg p-4'>
							<h2 className='text-lg font-medium'>Запланированные платежи</h2>
							<table className='relative'>
								<thead className='bg-c-bg-primary sticky top-0'>
									<tr>
										<th>#</th>
										<th>Дата</th>
										<th>Сумма ₽</th>
										<th>Вид</th>
									</tr>
								</thead>
								<tbody>
									{getPaymentsData?.getScheduledPayments.scheduled_payments.map(
										(payment, index) => (
											<tr key={payment.id}>
												<td>{index + 1}</td>
												<td>{format(payment.date, 'dd.MM.yyyy')}</td>
												<td>
													{parseFloat(payment.payment).toLocaleString('ru-RU')}
												</td>
												<td>
													{
														SCHEDULED_PAYMENT_TYPE_MAP[
															payment.scheduled_payment_type
														]
													}
												</td>
											</tr>
										),
									)}
								</tbody>
							</table>
						</div>
						<div className='border-1 border-c-line-primary flex w-full flex-col gap-2 rounded-lg p-4'>
							<h2 className='text-lg font-medium'>Фактические платежи</h2>
							<table className='relative'>
								<thead className='bg-c-bg-primary sticky top-0'>
									<tr>
										<th>#</th>
										<th>Дата</th>
										<th>Сумма ₽</th>
									</tr>
								</thead>
								<tbody>
									{getPaymentsData?.getActualPayments.actual_payments.map(
										({ id, date, payment }, index) => (
											<tr key={id}>
												<td>{index + 1}</td>
												<td>{format(date, 'dd.MM.yyyy')}</td>
												<td>{parseFloat(payment).toLocaleString('ru-RU')}</td>
											</tr>
										),
									)}
								</tbody>
							</table>
						</div>
					</div>
				</ContentLayout>
			</BootLayout>
		</>
	);
};
