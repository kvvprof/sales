import { Response } from 'express';
import { injectable } from 'inversify';

import { ICookieService } from '@/modules/cookie/service/cookie.service.interface';

@injectable()
export class CookieService implements ICookieService {
  constructor() {}

  public setCookie(res: Response, token: string) {
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 12 * 60 * 60 * 1000, // 12 hours
      path: '/',
    });
  }

  public deleteCookie(res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 12 * 60 * 60 * 1000, // 12 hours
      path: '/',
    });
  }
}
