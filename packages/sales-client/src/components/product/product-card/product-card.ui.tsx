import { Card } from '@/common';
import { PRODUCT_CATEGORY_MAPPING } from '@/common';
import { IProductCard } from '@/components/product/product-card/product-card.interface';

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
        {PRODUCT_CATEGORY_MAPPING[product.productCategory]} № {product.number}
      </p>
    </Card>
  );
};
