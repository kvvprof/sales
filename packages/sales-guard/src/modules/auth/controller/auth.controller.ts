import { Request, Response } from 'express';
import { inject, injectable } from 'inversify';

import {
  BaseController,
  getRequestInfo,
  IConfigService,
  ILoggerService,
  IMiddleware,
  TYPES,
  USER_MOCK,
} from '@/common';
import { IAuthController } from '@/modules/auth/controller/auth.controller.interface';
import { IAuthService } from '@/modules/auth/service/auth.service.interface';
import { ICookieService } from '@/modules/cookie/service/cookie.service.interface';

@injectable()
export class AuthController extends BaseController implements IAuthController {
  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
    @inject(TYPES.CookieService) private readonly cookieService: ICookieService,
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
    @inject(TYPES.AuthService) private readonly authService: IAuthService,
    @inject(TYPES.AuthMiddleware)
    private readonly authMiddleware: IMiddleware,
  ) {
    super();

    this.bindRoutes([
      {
        path: '/sign-in',
        method: 'post',
        func: this.signIn,
      },
      {
        path: '/refresh',
        method: 'post',
        func: this.refresh,
        middlewares: [this.authMiddleware],
      },
      {
        path: '/sign-out',
        method: 'delete',
        func: this.signOut,
        middlewares: [this.authMiddleware],
      },
    ]);
  }

  public async signIn(req: Request, res: Response) {
    try {
      const { token, data } = await this.authService.signIn(req);

      this.cookieService.setCookie(res, token);

      this.loggerService.info('User signed in.', {
        ...getRequestInfo(req),
        user: data.data.createStaff,
      });

      this.ok(res, data.data.createStaff);
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      this.unauthorized(res);
    }
  }

  public async refresh(req: Request, res: Response) {
    try {
      if (this.configService.get('ENV') === 'DEVELOPMENT') {
        this.ok(res, USER_MOCK);
        return;
      }

      this.loggerService.info('User refreshed session.', getRequestInfo(req));

      this.ok(res, req.user);
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      this.unauthorized(res);
    }
  }

  public async signOut(req: Request, res: Response) {
    try {
      if (this.configService.get('ENV') === 'DEVELOPMENT') {
        this.ok(res, 'OK');
        return;
      }

      this.cookieService.deleteCookie(res);

      this.loggerService.info('User signed out.', getRequestInfo(req));

      this.ok(res, req.user);
    } catch (error) {
      this.loggerService.error(error, getRequestInfo(req));
      this.unauthorized(res);
    }
  }
}
