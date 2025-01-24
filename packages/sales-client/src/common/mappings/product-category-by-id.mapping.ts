import { ProductCategory } from '@/__types__/graphql';

export const PRODUCT_CATEGORY_MAP_BY_ID_MAPPING = {
  1: ProductCategory.Flat,
  2: ProductCategory.Office,
  3: ProductCategory.Apartment,
  4: ProductCategory.StorageRoom,
  5: ProductCategory.ParkingSpace,
} as const;
