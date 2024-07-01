import { IProductCard } from '@/components/common/product-card/product-card.interface';

import { Card } from '@/components/ui/card/card.ui';
import { PRODUCT_CATEGORY_MAP } from '@/configs/enums.map';

export const ProductCard = ({
	product,
	object,
	onClick,
	onDelete,
}: IProductCard) => {
	return (
		<Card onDelete={onDelete} onClick={onClick}>
			<p>{object.name}</p>
			<p>
				{PRODUCT_CATEGORY_MAP[product.product_category]} № {product.number}
			</p>
		</Card>
	);
};
