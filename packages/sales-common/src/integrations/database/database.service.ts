import { inject, injectable } from 'inversify';

import { TYPES, ILoggerService } from '@/common';
import { IDatabaseService } from '@/integrations/database/database.service.interface';
import { PrismaClient } from '@/integrations/database/prisma/output';

@injectable()
export class DatabaseService implements IDatabaseService {
  public dbClient: PrismaClient;

  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
  ) {
    this.dbClient = new PrismaClient();
  }

  get client() {
    return this.dbClient;
  }

  public async connect() {
    await this.dbClient.$connect();
    this.loggerService.info('Database connected.');
  }

  public async disconnect() {
    await this.dbClient.$disconnect();
    this.loggerService.info('Database disconnected.');
  }
}
