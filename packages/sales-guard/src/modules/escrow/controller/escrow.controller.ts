import axios from 'axios';
import { Request, Response } from 'express';
import FormData from 'form-data';
import { inject, injectable } from 'inversify';

import {
  BaseController,
  getRequestInfo,
  IConfigService,
  ILoggerService,
  IMiddleware,
  TYPES,
} from '@/common';
import {
  FILE_NOT_FOUND,
  FILE_SENDED,
} from '@/modules/escrow/constants/escrow.constants';
import { IEscrowController } from '@/modules/escrow/controller/escrow.controller.interface';

@injectable()
export class EscrowController
  extends BaseController
  implements IEscrowController
{
  private readonly token: string;
  private readonly endpoint: string;

  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
    @inject(TYPES.FormDataMiddleware)
    private readonly formDataMiddleware: IMiddleware,
    @inject(TYPES.AuthMiddleware)
    private readonly authMiddleware: IMiddleware,
  ) {
    super();

    this.bindRoutes([
      {
        path: '',
        method: 'post',
        func: this.sendEscrow,
        middlewares: [this.authMiddleware, this.formDataMiddleware],
      },
    ]);

    this.token = this.configService.get('UNITY_API_TOKEN');
    this.endpoint = `${this.configService.get('UNITY_API_DOMAIN')}/v1/upload/escrow`;
  }

  public async sendEscrow(req: Request, res: Response) {
    try {
      if (!req.files || !req.files.length) {
        throw new Error(FILE_NOT_FOUND);
      }

      let file;

      if (Array.isArray(req.files)) {
        file = req.files[0];
      } else {
        const fileArray = Object.values(req.files)[0];
        file = fileArray[0];
      }

      const formData = new FormData();
      formData.append('file', file.buffer, { filename: file.originalname });

      await axios.post(this.endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${this.token}`,
        },
      });

      this.loggerService.info('Escrow sended.', getRequestInfo(req));

      this.ok(res, FILE_SENDED);
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      this.badRequest(res);
    }
  }
}
