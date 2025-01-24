import { injectable } from 'inversify';
import { isEmpty } from 'lodash';
import { createLogger, format, Logger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';

import { ILoggerService } from '@/common';

@injectable()
export class LoggerService implements ILoggerService {
  private readonly logger: Logger;

  constructor() {
    const createConsoleTransport = () => {
      return new transports.Console({
        format: format.combine(
          format.colorize({ all: true }),
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          format.printf(({ timestamp, level, message, service, meta }) => {
            let logMessage = `${timestamp} [${level}] ${service}: ${message}`;
            if (!isEmpty(meta)) {
              logMessage += `\n${JSON.stringify(meta)}`;
            }
            return logMessage;
          }),
        ),
      });
    };

    const createFileTransport = () => {
      return new DailyRotateFile({
        filename: 'sales-gateway-%DATE%.log',
        dirname: '/var/log/sales',
        datePattern: 'YYYY-MM-DD',
        maxSize: '20m',
        maxFiles: '30d',
        zippedArchive: false,
        format: format.combine(
          format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
          format.splat(),
          format.json(),
        ),
      });
    };

    this.logger = createLogger({
      level: 'info',
      transports:
        process.env.NODE_ENV === 'PRODUCTION'
          ? [createConsoleTransport(), createFileTransport()]
          : [createConsoleTransport()],
      defaultMeta: { service: 'sales-gateway' },
    });
  }

  public info(message: string, meta?: Record<string, unknown>) {
    this.logger.info(message, { meta: { ...meta } });
  }

  public warn(message: string, meta?: Record<string, unknown>) {
    this.logger.warn(message, { meta: { ...meta } });
  }

  public error(error: unknown, meta?: Record<string, unknown>) {
    if (error instanceof Error) {
      this.logger.error(error.message, {
        meta: { stack: error.stack, ...meta },
      });
    } else {
      this.logger.error(typeof error === 'string' ? error : 'Unknown error', {
        meta: { ...meta },
      });
    }
  }
}
