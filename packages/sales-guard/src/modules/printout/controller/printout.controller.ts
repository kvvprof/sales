import axios from 'axios';
import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import {
  BaseController,
  getRequestInfo,
  IConfigService,
  ILoggerService,
  IMiddleware,
  TYPES,
} from '@/common';
import { IPrintoutController } from '@/modules/printout/controller/printout.controller.interface';
import { CreatePrintoutDto } from '@/modules/printout/dto/create-printout.dto';
import { PrintoutFactory } from '@/modules/printout/factories/printout.factory';

@injectable()
export class PrintoutController
  extends BaseController
  implements IPrintoutController
{
  public readonly token: string;
  public readonly endpoint: string;

  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
    @inject(TYPES.AuthMiddleware)
    private readonly authMiddleware: IMiddleware,
  ) {
    super();

    this.bindRoutes([
      {
        path: '',
        method: 'post',
        func: this.createPrintout,
        middlewares: [this.authMiddleware],
      },
      {
        path: '',
        method: 'get',
        func: this.getPrintoutStatus,
        middlewares: [this.authMiddleware],
      },
    ]);

    this.token = this.configService.get('UNITY_API_TOKEN');
    this.endpoint = `${this.configService.get('UNITY_API_DOMAIN')}/v1/printouts/queue`;
  }

  public async createPrintout(req: Request, res: Response) {
    try {
      const { kind, id } = CreatePrintoutDto.parse(req.body);

      const payload = new PrintoutFactory(kind, id).createPayload();

      const { data } = await axios.post<{ checkStatusUrl: string }>(
        this.endpoint,
        payload,
        {
          headers: { Authorization: `Bearer ${this.token}` },
        },
      );

      this.loggerService.info('Printout created.', getRequestInfo(req));

      this.ok(res, data);
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      this.badRequest(res);
    }
  }

  public async getPrintoutStatus(req: Request, res: Response) {
    try {
      const { url } = req.query;

      if (!url || typeof url !== 'string') {
        throw Error;
      }

      const { data } = await axios.get<{ completed: boolean }>(url, {
        headers: { Authorization: `Bearer ${this.token}` },
      });

      this.loggerService.info('Printout status checked.', getRequestInfo(req));

      this.ok(res, data);
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      this.badRequest(res);
    }
  }
}
