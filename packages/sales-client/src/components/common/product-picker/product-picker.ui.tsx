import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicObject, PricingProduct } from '@/__types__/graphql';
import {
	GET_OBJECTS,
	GET_PRICING_PRODUCTS,
	CREATE_PRODUCT,
} from '@/components/common/product-picker/product-picker.gql';
import { IProductPicker } from '@/components/common/product-picker/product-picker.interface';
import {
	ProductPickerSchema,
	validationSchema,
	initialValues,
} from '@/components/common/product-picker/product-picker.validation';
import { BootLayout } from '@/components/ui/boot-layout/boot-layout.ui';
import { Button } from '@/components/ui/button/button.ui';
import { Form } from '@/components/ui/Form/form.ui';
import { IOption } from '@/components/ui/select/select.interface';
import { Select } from '@/components/ui/select/select.ui';
import { PRODUCT_CATEGORY_MAP_BY_ID } from '@/configs/enums.map';
import { normalizePayload } from '@/utils/normalize-payload/normalize-payload';

export const ProductPicker = ({ onSubmit }: IProductPicker) => {
	const [objectOptions, setObjectOptions] = useState<IOption<BasicObject>[]>(
		[],
	);
	const [productOptions, setProductOptions] = useState<
		IOption<PricingProduct>[]
	>([]);

	const { loading: getObjectLoading } = useQuery(GET_OBJECTS, {
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

	const [getPricingProducts, { loading: getPricingProductsLoading }] =
		useLazyQuery(GET_PRICING_PRODUCTS, {
			onCompleted(data) {
				setProductOptions(
					data.getPricingProducts.products.map((product) => ({
						name: `${product.category.name} № ${product.product.number}`,
						payload: product,
					})),
				);
			},
			onError(error) {
				toast.error(error.message);
			},
		});

	const [createProduct, { loading: createProductLoading }] = useMutation(
		CREATE_PRODUCT,
		{
			onCompleted(data) {
				onSubmit(data.createProduct);
			},
			onError(error) {
				toast.error(error.message);
			},
		},
	);

	const formik = useFormik<ProductPickerSchema>({
		initialValues,
		validationSchema,
		onSubmit: (data) => {
			createProduct({
				variables: {
					input: normalizePayload({
						pricing_products_id: data.product!.product.id,
						number: data.product!.product.number,
						object_id: data.object!.id,
						product_category:
							PRODUCT_CATEGORY_MAP_BY_ID[
								data.product!.category
									.id as keyof typeof PRODUCT_CATEGORY_MAP_BY_ID
							],
					}),
				},
			});
		},
	});

	const onSelectObject = ({ payload }: IOption<BasicObject>) => {
		formik.setFieldValue('object', payload);
	};

	const onDeleteObject = () => {
		formik.setFieldValue('object', null);
	};

	const loadProductOptions = (searchValue: string) => {
		getPricingProducts({
			variables: {
				input: {
					object_id: formik.values.object!.id,
					options: { limit: 10, prefix: searchValue },
				},
			},
		});
	};

	const onSelectProduct = ({ payload }: IOption<PricingProduct>) => {
		formik.setFieldValue('product', payload);
	};

	const onDeleteProduct = () => {
		formik.setFieldValue('product', null);
	};

	return (
		<BootLayout isLoading={getObjectLoading || createProductLoading}>
			<Form handleSubmit={formik.handleSubmit}>
				<Select
					label='Объект'
					placeholder='Выберите объект'
					options={objectOptions}
					error={formik.touched.object ? formik.errors.object : null}
					onSelect={onSelectObject}
					onDelete={onDeleteObject}
				/>
				{formik.values.object && (
					<Select
						label='Продукт'
						placeholder='Поиск по номеру'
						options={productOptions}
						isLoading={getPricingProductsLoading}
						error={formik.touched.product ? formik.errors.product : null}
						loadOptions={loadProductOptions}
						onSelect={onSelectProduct}
						onDelete={onDeleteProduct}
					/>
				)}
				<Button type='submit'>Выбрать</Button>
			</Form>
		</BootLayout>
	);
};
