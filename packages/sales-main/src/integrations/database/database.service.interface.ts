import { PrismaClient } from '@/integrations/database/prisma/output';

export interface IDatabaseService {
  client: PrismaClient;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
