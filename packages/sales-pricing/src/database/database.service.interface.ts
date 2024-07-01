import { PrismaClient } from '@/database/prisma/output';

export interface IDatabaseService {
	client: PrismaClient;
	connect(): Promise<void>;
	disconnect(): Promise<void>;
}
