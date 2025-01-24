import { PrismaClient } from '@/integrations';

export interface IDatabaseService {
  client: PrismaClient;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}
