import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { JSONView } from '@/common';
import { GET_PRICING_PRODUCT } from '@/components/product/product-info/product-info.gql';
import { IProductInfo } from '@/components/product/product-info/product-info.interface';

export const ProductInfo = ({ id }: IProductInfo) => {
  const [getPricingProduct, { loading, data }] = useLazyQuery(
    GET_PRICING_PRODUCT,
    {
      onError(error) {
        toast.error(error.message);
      },
    },
  );

  useEffect(() => {
    if (id) {
      getPricingProduct({
        variables: { input: { id } },
      });
    }
  }, [getPricingProduct, id]);

  return (
    <JSONView
      isLoading={loading}
      data={{
        object: data?.getPricingProduct.object,
        category: data?.getPricingProduct.category,
        product: data?.getPricingProduct.product,
        productType: data?.getPricingProduct.productType,
      }}
    />
  );
};
