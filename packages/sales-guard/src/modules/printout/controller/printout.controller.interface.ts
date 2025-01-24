import { NextFunction, Request, Response } from 'express';

export interface IPrintoutController {
  createPrintout(
    req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<void>;
}
