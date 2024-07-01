import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { inject, injectable } from 'inversify';

import { ISchema } from '@/common/schema.interface';
import { IConfigService } from '@/config/config.service.interface';
import { IDatabaseService } from '@/database/database.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { TYPES } from '@/types';

@injectable()
export class App {
	private readonly port: number;

	constructor(
		@inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.DatabaseService)
		private readonly databaseService: IDatabaseService,
		@inject(TYPES.BaseSchema) private readonly baseSchema: ISchema,
		@inject(TYPES.ProductSchema) private readonly productSchema: ISchema,
	) {
		this.port = parseInt(this.configService.get('PORT'), 10);
	}

	private buildSchema() {
		const mergedTypeDefs = mergeTypeDefs([
			this.baseSchema.getTypeDefs(),
			this.productSchema.getTypeDefs(),
		]);

		const mergedResolvers = mergeResolvers([
			this.baseSchema.getResolvers(),
			this.productSchema.getResolvers(),
		]);

		return buildSubgraphSchema({
			typeDefs: [mergedTypeDefs],
			resolvers: mergedResolvers as any,
		});
	}

	public async init() {
		try {
			await this.databaseService.connect();
			const server = new ApolloServer({
				schema: this.buildSchema(),
				plugins: [ApolloServerPluginInlineTraceDisabled()],
			});
			await startStandaloneServer(server, {
				listen: { port: this.port },
			});
			this.loggerService.info(`Server is running on port ${this.port}.`);
		} catch (error) {
			this.loggerService.error(error);
		}
	}
}
