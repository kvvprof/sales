import { gql } from '@/__types__';

export const GET_OBJECTS = gql(`
	query GetObjectsInProductPicker {
		getObjects {
			id
			name
			common_db_objects_id
		}
	}
`);

export const GET_PRICING_PRODUCTS = gql(`
	query GetPricingProductsInProductPicker($input: GetPricingProductsInput!) {
		getPricingProducts(input: $input) {
			products {
				product {
					id
					number
					area
					price
				}
				category {
					id
					name
				}
				object {
					id
					name
				}
			}
		}
	}
`);

export const CREATE_PRODUCT = gql(`
	mutation CreateProductInProductPicker($input: CreateProductInput!) {
		createProduct(input: $input) {
			product {
				id
				number
				pricing_products_id
				product_category
			}
			object {
				id
				name
				common_db_objects_id
			}
		}
	}
`);
