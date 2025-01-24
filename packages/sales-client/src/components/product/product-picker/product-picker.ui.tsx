import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import { BasicObject, PricingProduct } from '@/__types__/graphql';
import {
  BootLayout,
  Button,
  PRODUCT_CATEGORY_MAP_BY_ID_MAPPING,
  Form,
  IOption,
  Select,
  normalizePayload,
} from '@/common';
import {
  GET_OBJECTS,
  GET_PRICING_PRODUCTS,
  CREATE_PRODUCT,
} from '@/components/product/product-picker/product-picker.gql';
import { IProductPicker } from '@/components/product/product-picker/product-picker.interface';
import {
  ProductPickerSchema,
  validationSchema,
  initialValues,
} from '@/components/product/product-picker/product-picker.validation';

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
            pricingProductsId: data.product!.product.id,
            number: data.product!.product.number,
            objectId: data.object!.id,
            productCategory:
              PRODUCT_CATEGORY_MAP_BY_ID_MAPPING[
                data.product!.category
                  .id as keyof typeof PRODUCT_CATEGORY_MAP_BY_ID_MAPPING
              ],
          }),
        },
      });
    },
  });

  const handleSelectObject = ({ payload }: IOption<BasicObject>) => {
    formik.setFieldValue('object', payload);
  };

  const handleDeleteObject = () => {
    formik.setFieldValue('object', null);
  };

  const loadProductOptions = (searchValue: string) => {
    getPricingProducts({
      variables: {
        input: {
          objectId: formik.values.object!.id,
          options: { limit: 10, prefix: searchValue },
        },
      },
    });
  };

  const handleSelectProduct = ({ payload }: IOption<PricingProduct>) => {
    formik.setFieldValue('product', payload);
  };

  const handleDeleteProduct = () => {
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
          onSelect={handleSelectObject}
          onDelete={handleDeleteObject}
        />
        {formik.values.object && (
          <Select
            label='Продукт'
            placeholder='Поиск по номеру'
            options={productOptions}
            isLoading={getPricingProductsLoading}
            error={formik.touched.product ? formik.errors.product : null}
            loadOptions={loadProductOptions}
            onSelect={handleSelectProduct}
            onDelete={handleDeleteProduct}
          />
        )}
        <Button type='submit'>Выбрать</Button>
      </Form>
    </BootLayout>
  );
};
