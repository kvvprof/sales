import { DotenvParseOutput, config } from 'dotenv';
import { inject, injectable } from 'inversify';

import { IConfigService } from '@/common/config/config.service.interface';
import { TYPES } from '@/common/constants/types.constant';
import { ILoggerService } from '@/common/logger/logger.service.interface';

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
    const res = this.config[key];

    if (!res) {
      this.loggerService.error(`${res} not found.`);
    }

    return res;
  }
}
