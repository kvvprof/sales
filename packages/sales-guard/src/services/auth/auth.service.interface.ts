import { Request } from 'express';

export interface IAuthService {
	signIn(req: Request): Promise<{ token: string; data: any }>;
}
