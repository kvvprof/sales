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
		@inject(TYPES.ClientSchema) private readonly clientSchema: ISchema,
		@inject(TYPES.ObjectSchema) private readonly objectSchema: ISchema,
		@inject(TYPES.ProductSchema) private readonly productSchema: ISchema,
		@inject(TYPES.ClientContractSchema)
		private readonly clientContractSchema: ISchema,
		@inject(TYPES.AgencySchema) private readonly agencySchema: ISchema,
		@inject(TYPES.AgencyContractSchema)
		private readonly agencyContractSchema: ISchema,
		@inject(TYPES.RealEstateAgentSchema)
		private readonly realEstateAgentSchema: ISchema,
		@inject(TYPES.UserSchema) private readonly userSchema: ISchema,
		@inject(TYPES.BankSchema) private readonly bankSchema: ISchema,
		@inject(TYPES.ScheduledPaymentSchema)
		private readonly scheduledPaymentSchema: ISchema,
		@inject(TYPES.ActualPaymentSchema)
		private readonly actualPaymentSchema: ISchema,
		@inject(TYPES.EntitySchema)
		private readonly entitySchema: ISchema,
	) {
		this.port = parseInt(this.configService.get('PORT'), 10);
	}

	private buildSchema() {
		const mergedTypeDefs = mergeTypeDefs([
			this.baseSchema.getTypeDefs(),
			this.clientSchema.getTypeDefs(),
			this.productSchema.getTypeDefs(),
			this.objectSchema.getTypeDefs(),
			this.clientContractSchema.getTypeDefs(),
			this.agencySchema.getTypeDefs(),
			this.agencyContractSchema.getTypeDefs(),
			this.userSchema.getTypeDefs(),
			this.realEstateAgentSchema.getTypeDefs(),
			this.bankSchema.getTypeDefs(),
			this.scheduledPaymentSchema.getTypeDefs(),
			this.actualPaymentSchema.getTypeDefs(),
			this.entitySchema.getTypeDefs(),
		]);

		const mergedResolvers = mergeResolvers([
			this.baseSchema.getResolvers(),
			this.clientSchema.getResolvers(),
			this.productSchema.getResolvers(),
			this.objectSchema.getResolvers(),
			this.clientContractSchema.getResolvers(),
			this.agencySchema.getResolvers(),
			this.agencyContractSchema.getResolvers(),
			this.userSchema.getResolvers(),
			this.realEstateAgentSchema.getResolvers(),
			this.bankSchema.getResolvers(),
			this.scheduledPaymentSchema.getResolvers(),
			this.actualPaymentSchema.getResolvers(),
			this.entitySchema.getResolvers(),
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
			await startStandaloneServer(server, { listen: { port: this.port } });
			this.loggerService.info(`Server is running on port ${this.port}.`);
		} catch (error) {
			this.loggerService.error(error);
		}
	}
}
