import { IFindManyOptions } from '@/common/find-many-options.interface';
import {
	Product,
	ProductCategory,
	ProductType,
	Object as TObject,
} from '@/database/prisma/output';

export interface IProduct extends Product {
	category: ProductCategory;
	product_type: ProductType | null;
	object: TObject;
}

export interface IProductRepository {
	find(id: number): Promise<IProduct | null>;
	findMany(
		object_id: number,
		options?: IFindManyOptions | null,
	): Promise<{ products: IProduct[]; total_count: number }>;
}
