import { Request, Response } from 'express';

export interface INextCloudService {
	callback(req: Request, res: Response): Promise<void>;
}
