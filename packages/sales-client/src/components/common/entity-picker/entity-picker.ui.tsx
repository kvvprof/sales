import { useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { GET_ENTITIES } from '@/components/common/entity-picker/entity-picker.gql';
import {
	IEntityPicker,
	TEntityPicker,
} from '@/components/common/entity-picker/entity-picker.interface';
import {
	EntityPickerSchema,
	initialValues,
	validationSchema,
} from '@/components/common/entity-picker/entity-picker.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';

export const EntityPicker = ({ objectId, onSubmit }: IEntityPicker) => {
	const [entityOptions, setEntityOptions] = useState<IOption<TEntityPicker>[]>(
		[],
	);

	const { loading } = useQuery(GET_ENTITIES, {
		onCompleted(data) {
			const options = data.getEntities
				.filter(({ objects }) => objects.some(({ id }) => id === objectId))
				.map(({ entity }) => ({ name: entity.name, payload: entity }));

			setEntityOptions(options);
		},
		onError(error) {
			toast.error(error.message);
		},
	});

	const formik = useFormik<EntityPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			onSubmit(data.entity!);
		},
	});

	const onSelectEntity = ({ payload }: IOption<TEntityPicker>) => {
		formik.setFieldValue('entity', payload);
	};

	const onDeleteEntity = () => {
		formik.setFieldValue('entity', null);
	};

	return (
		<BootLayout isLoading={loading}>
			<Form handleSubmit={formik.handleSubmit}>
				<Select
					label='Юридическое лицо'
					placeholder='Выберите юридическое лицо'
					options={entityOptions}
					error={formik.touched.entity ? formik.errors.entity : null}
					onSelect={onSelectEntity}
					onDelete={onDeleteEntity}
				/>
				<Button type='submit'>Выбрать</Button>
			</Form>
		</BootLayout>
	);
};
