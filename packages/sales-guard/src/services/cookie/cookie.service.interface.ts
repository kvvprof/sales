import { Response } from 'express';

export interface ICookieService {
	setCookie(res: Response, token: string): void;
	deleteCookie(res: Response): void;
}
