import {
	GetPricingProductInput,
	GetPricingProductsInput,
	PricingProduct,
	PricingProducts,
} from '@/schemas/schema.types';

export interface IProductService {
	getProduct(input: GetPricingProductInput): Promise<PricingProduct>;
	getProducts(input: GetPricingProductsInput): Promise<PricingProducts>;
}
