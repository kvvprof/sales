import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { GET_OBJECTS } from '@/components/common/object-picker/object-picker.gql';
import {
	IObjectPicker,
	TObjectPicker,
} from '@/components/common/object-picker/object-picker.interface';
import {
	ObjectPickerSchema,
	initialValues,
	validationSchema,
} from '@/components/common/object-picker/object-picker.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';

export const ObjectPicker = ({ onSubmit }: IObjectPicker) => {
	const [objectOptions, setObjectOptions] = useState<IOption<TObjectPicker>[]>(
		[],
	);

	const { loading } = useQuery(GET_OBJECTS, {
		onCompleted(data) {
			setObjectOptions(
				data.getObjects.map((object) => ({
					name: object.name,
					payload: object,
				})),
			);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<ObjectPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.object!);
		},
	});

	const onSelectObject = ({ payload }: IOption<TObjectPicker>) => {
		formik.setFieldValue('object', payload);
	};

	const onDeleteObject = () => {
		formik.setFieldValue('object', null);
	};

	return (
		<BootLayout isLoading={loading}>
			<Form handleSubmit={formik.handleSubmit}>
				<Select
					label='Объект'
					placeholder='Выберите объект'
					options={objectOptions}
					error={formik.touched.object ? formik.errors.object : null}
					onSelect={onSelectObject}
					onDelete={onDeleteObject}
				/>
				<Button type='submit'>Выбрать</Button>
			</Form>
		</BootLayout>
	);
};
