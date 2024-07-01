import { Object as TObject } from '@/database/prisma/output';

export interface IObjectRepository {
	findById(id: number): Promise<TObject | null>;
	findMany(): Promise<TObject[]>;
}
