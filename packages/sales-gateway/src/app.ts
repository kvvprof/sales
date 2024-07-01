import { ApolloGateway } from '@apollo/gateway';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { startStandaloneServer } from '@apollo/server/standalone';
import { inject, injectable } from 'inversify';

import { readFileSync } from 'fs';

import { IConfigService } from '@/config/config.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { TYPES } from '@/types';

@injectable()
export class App {
	private readonly port: number;

	constructor(
		@inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
	) {
		this.port = parseInt(this.configService.get('PORT'), 10);
	}

	private getSupergraphSdl() {
		const env = this.configService.get('ENV');
		const localUrls = [
			'http://localhost:9001',
			'http://localhost:9002',
			'http://localhost:9003',
		];
		const productionUrls = [
			'http://sales-main:9001',
			'http://sales-common:9002',
			'http://sales-pricing:9003',
		];

		let supergraphSdl = readFileSync('./supergraph.gql').toString();

		if (env === 'DEVELOPMENT') {
			return supergraphSdl;
		}

		localUrls.forEach((url, index) => {
			supergraphSdl = supergraphSdl.replace(
				new RegExp(url, 'g'),
				productionUrls[index],
			);
		});

		return supergraphSdl;
	}

	public async init() {
		try {
			const gateway = new ApolloGateway({
				supergraphSdl: this.getSupergraphSdl(),
			});
			const server = new ApolloServer({
				gateway,
				introspection: true,
				plugins: [ApolloServerPluginInlineTraceDisabled()],
			});
			await startStandaloneServer(server, { listen: { port: this.port } });
			this.loggerService.info(`Server is running on port ${this.port}.`);
		} catch (error) {
			this.loggerService.error(error);
		}
	}
}
