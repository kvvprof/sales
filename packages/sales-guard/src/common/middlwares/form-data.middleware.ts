import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'inversify';
import multer from 'multer';

import { TYPES } from '@/common/constants/types.constant';
import { getRequestInfo } from '@/common/helpers';
import { IMiddleware } from '@/common/interfaces/middleware.interface';
import { ILoggerService } from '@/common/logger/logger.service.interface';
import { FAILED_TO_LOAD_FILE } from '@/common/middlwares/constants/form-data.constants';

@injectable()
export class FormDataMiddleware implements IMiddleware {
  private readonly upload: multer.Multer;

  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
  ) {
    this.upload = multer();
  }

  public execute(req: Request, res: Response, next: NextFunction): void {
    try {
      this.upload.any()(req, res, (err) => {
        if (err) {
          return next(err);
        }
        next();
      });
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      res.status(500).send(FAILED_TO_LOAD_FILE);
    }
  }
}
