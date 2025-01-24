import { NextFunction, Request, Response } from 'express';

export interface IAuthController {
  signIn(req: Request, res: Response, _next: NextFunction): Promise<void>;
  refresh(req: Request, res: Response, _next: NextFunction): Promise<void>;
  signOut(req: Request, res: Response, _next: NextFunction): Promise<void>;
}
