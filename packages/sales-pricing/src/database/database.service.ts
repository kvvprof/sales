import { inject, injectable } from 'inversify';

import { IDatabaseService } from '@/database/database.service.interface';
import { PrismaClient } from '@/database/prisma/output';
import { ILoggerService } from '@/logger/logger.service.interface';
import { TYPES } from '@/types';

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
		this.loggerService.info('Database connected');
	}

	public async disconnect() {
		await this.dbClient.$disconnect();
		this.loggerService.info('Database disconnected');
	}
}
