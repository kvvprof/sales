import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { GET_PRICING_PRODUCT } from '@/components/common/product-info/product-info.gql';
import { IProductInfo } from '@/components/common/product-info/product-info.interface';
import { JSONView } from '@/components/ui/json-view/json-view.ui';

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
				product_type: data?.getPricingProduct.product_type,
			}}
		/>
	);
};
