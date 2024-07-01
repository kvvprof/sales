import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { GET_BANKS } from '@/components/common/bank-picker/bank-picker.gql';
import {
	IBankPicker,
	TBankPicker,
} from '@/components/common/bank-picker/bank-picker.interface';
import {
	BankPickerSchema,
	initialValues,
	validationSchema,
} from '@/components/common/bank-picker/bank-picker.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';

export const BankPicker = ({ onSubmit }: IBankPicker) => {
	const [bankOptions, setBankOptions] = useState<IOption<TBankPicker>[]>([]);

	const { loading } = useQuery(GET_BANKS, {
		onCompleted(data) {
			setBankOptions(
				data.getBanks.map((bank) => ({
					name: bank.name,
					payload: bank,
				})),
			);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<BankPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.bank!);
		},
	});

	const onSelectBank = ({ payload }: IOption<TBankPicker>) => {
		formik.setFieldValue('bank', payload);
	};

	const onDeleteBank = () => {
		formik.setFieldValue('bank', null);
	};

	return (
		<BootLayout isLoading={loading}>
			<Form handleSubmit={formik.handleSubmit}>
				<Select
					label='Банк'
					placeholder='Выберите банк'
					options={bankOptions}
					error={formik.touched.bank ? formik.errors.bank : null}
					onSelect={onSelectBank}
					onDelete={onDeleteBank}
				/>
				<Button type='submit'>Выбрать</Button>
			</Form>
		</BootLayout>
	);
};
