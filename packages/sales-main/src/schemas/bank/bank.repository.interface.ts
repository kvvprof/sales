import { Bank } from '@/database/prisma/output';

export interface IBankRepository {
	findMany(): Promise<Bank[]>;
}
