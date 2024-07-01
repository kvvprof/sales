import { injectable } from 'inversify';
import { createLogger, format, Logger, transports } from 'winston';

import { ILoggerService } from '@/logger/logger.service.interface';

@injectable()
export class LoggerService implements ILoggerService {
	private logger: Logger;

	constructor() {
		this.logger = createLogger({
			level: 'info',
			format: format.combine(
				format.timestamp({
					format: 'YYYY-MM-DD HH:mm:ss',
				}),
				format.errors({ stack: true }),
				format.splat(),
				format.json(),
			),
			transports: [new transports.Console()],
			defaultMeta: { service: 'SALES-GUARD' },
		});
	}

	public info(message: string, ...meta: unknown[]) {
		this.logger.info(message, ...meta);
	}

	public warn(message: string, ...meta: unknown[]) {
		this.logger.warn(message, ...meta);
	}

	public error(message: string, ...meta: unknown[]) {
		this.logger.error(message, ...meta);
	}

	public debug(message: string, ...meta: unknown[]) {
		this.logger.debug(message, ...meta);
	}
}
