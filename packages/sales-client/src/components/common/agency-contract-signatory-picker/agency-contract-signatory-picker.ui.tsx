import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicAgencyContractSignatory } from '@/__types__/graphql';
import { GET_AGENCY_CONTRACT_SIGNATORIES } from '@/components/common/agency-contract-signatory-picker/agency-contract-signatory-picker.gql';
import { ISignatoryPicker } from '@/components/common/agency-contract-signatory-picker/agency-contract-signatory-picker.interface';
import {
	SignatoryPickerSchema,
	initialValues,
	validationSchema,
} from '@/components/common/agency-contract-signatory-picker/agency-contract-signatory-picker.validation';
import { NewAgencyContractSignatory } from '@/components/common/new-agency-contract-signatory/new-agency-contract-signatory.ui';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { MiniButton } from '@/components/ui/mini-button/mini-button.ui';
import { Modal } from '@/components/ui/modal/modal.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';

export const AgencyContractSignatoryPicker = ({
	agencyId,
	onSubmit,
}: ISignatoryPicker) => {
	const [agencyContractSignatoryOptions, setAgencyContractSignatoryOptions] =
		useState<IOption<BasicAgencyContractSignatory>[]>([]);
	const [
		isOpenNewAgencyContractSignatoryModal,
		setIsOpenNewAgencyContractSignatoryModal,
	] = useState(false);

	const { loading } = useQuery(GET_AGENCY_CONTRACT_SIGNATORIES, {
		variables: { input: { agency_id: agencyId } },
		onCompleted(data) {
			const agencyContractSignatoryOptions =
				data.getAgencyContractSignatories.map((agencyContractSignatory) => ({
					name: agencyContractSignatory.full_name,
					payload: agencyContractSignatory,
				}));
			setAgencyContractSignatoryOptions(agencyContractSignatoryOptions);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<SignatoryPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.signatory!);
		},
	});

	const onSelectSignatory = ({
		payload,
	}: IOption<BasicAgencyContractSignatory>) => {
		formik.setFieldValue('signatory', payload);
	};

	const onDeleteSignatory = () => {
		formik.setFieldValue('signatory', null);
	};

	return (
		<>
			<Modal
				title='Создание подписанта'
				isOpen={isOpenNewAgencyContractSignatoryModal}
				onClose={() => setIsOpenNewAgencyContractSignatoryModal(false)}
			>
				<NewAgencyContractSignatory
					agencyId={agencyId}
					onSubmit={(agencyContractSignatory) =>
						onSubmit(agencyContractSignatory)
					}
				/>
			</Modal>
			<BootLayout isLoading={loading}>
				<Form handleSubmit={formik.handleSubmit}>
					<div className='flex flex-col gap-1'>
						<Select
							label='Подписант'
							placeholder='Выберите подписанта'
							options={agencyContractSignatoryOptions}
							error={formik.touched.signatory ? formik.errors.signatory : null}
							onSelect={onSelectSignatory}
							onDelete={onDeleteSignatory}
						/>
						<div className='flex justify-center'>
							<MiniButton
								onClick={() => setIsOpenNewAgencyContractSignatoryModal(true)}
							>
								Создать подписанта
							</MiniButton>
						</div>
					</div>
					<Button type='submit'>Выбрать</Button>
				</Form>
			</BootLayout>
		</>
	);
};
