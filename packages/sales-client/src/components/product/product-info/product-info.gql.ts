import { gql } from '@/__types__';

export const GET_PRICING_PRODUCT = gql(`
	query GetPricingProductInProductInfo($input: GetPricingProductInput!) {
		getPricingProduct(input: $input) {
			object {
				name
			}
			category {
				name
			}
			product {
				id
				number
				area
				price
				oneGtId
			}
			productType {
				name
			}
		}
	}
`);
