import { NextFunction, Request, Response } from 'express';

export interface IEscrowController {
  sendEscrow(req: Request, res: Response, _next: NextFunction): Promise<void>;
}
