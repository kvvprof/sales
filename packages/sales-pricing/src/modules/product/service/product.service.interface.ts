import {
  GetPricingProductInput,
  GetPricingProductsInput,
  PricingProduct,
  PricingProducts,
} from '@/common';

export interface IProductService {
  getProduct(input: GetPricingProductInput): Promise<PricingProduct>;
  getProducts(input: GetPricingProductsInput): Promise<PricingProducts>;
}
