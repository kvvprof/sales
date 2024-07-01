import { Request } from 'express';

export interface ITokenService {
	generateToken<T>(data: T, expirationMinutes: number): string;
	verifyToken<T>(token: string): Promise<T>;
	extractTokenFromHeader(req: Request): string;
	extractTokenFromCookie(req: Request): string;
}
