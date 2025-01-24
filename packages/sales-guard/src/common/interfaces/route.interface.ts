import { NextFunction, Request, Response, Router } from 'express';

import { IMiddleware } from '@/common';

export interface IControllerRoute {
  path: string;
  method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
  middlewares?: IMiddleware[];
  func(req: Request, res: Response, next: NextFunction): void;
}
