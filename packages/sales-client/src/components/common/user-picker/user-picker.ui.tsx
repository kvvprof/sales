import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { GET_USERS } from '@/components/common/user-picker/user-picker.gql';
import {
	IUserPicker,
	TUserPicker,
} from '@/components/common/user-picker/user-picker.interface';
import {
	UserPickerSchema,
	initialValues,
	validationSchema,
} from '@/components/common/user-picker/user-picker.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';

export const UserPicker = ({ onSubmit }: IUserPicker) => {
	const [userOptions, setUserOptions] = useState<IOption<TUserPicker>[]>([]);

	const { loading } = useQuery(GET_USERS, {
		onCompleted(data) {
			setUserOptions(
				data.getUsers.map((user) => ({
					name: user.full_name,
					payload: user,
				})),
			);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<UserPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.user!);
		},
	});

	const onSelectUser = ({ payload }: IOption<TUserPicker>) => {
		formik.setFieldValue('user', payload);
	};

	const onDeleteUser = () => {
		formik.setFieldValue('user', null);
	};

	return (
		<BootLayout isLoading={loading}>
			<Form handleSubmit={formik.handleSubmit}>
				<Select
					label='Пользователь'
					placeholder='Выберите пользователя'
					options={userOptions}
					error={formik.touched.user ? formik.errors.user : null}
					onSelect={onSelectUser}
					onDelete={onDeleteUser}
				/>
				<Button type='submit'>Выбрать</Button>
			</Form>
		</BootLayout>
	);
};
