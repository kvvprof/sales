import { DotenvParseOutput, config } from 'dotenv';
import { inject, injectable } from 'inversify';

import { IConfigService } from '@/config/config.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { TYPES } from '@/types';

@injectable()
export class ConfigService implements IConfigService {
	private readonly config: DotenvParseOutput;

	constructor(
		@inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
	) {
		const envFile =
			process.env.NODE_ENV === 'PRODUCTION'
				? '.env.production'
				: '.env.development';

		const { error, parsed } = config({ path: envFile });

		if (error) {
			this.loggerService.error('File .env not found.');
		}

		if (!parsed) {
			this.loggerService.error('File .env is empty.');
		}

		this.config = parsed as DotenvParseOutput;

		this.loggerService.info('Env config loaded.');
	}

	public get(key: string) {
		const result = this.config[key];

		if (!result) {
			this.loggerService.error(`${result} not found.`);
		}

		return result;
	}
}
