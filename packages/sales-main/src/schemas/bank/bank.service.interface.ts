import { BasicBank } from '@/schemas/schema.types';

export interface IBankService {
	getBanks(): Promise<BasicBank[]>;
}
