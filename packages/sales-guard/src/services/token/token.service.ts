import { Request } from 'express';
import { inject, injectable } from 'inversify';
import jwt from 'jsonwebtoken';

import { IConfigService } from '@/config/config.service.interface';
import {
	AUTH_HEADER_NOT_FOUND,
	COOKIES_NOT_FOUND,
	INVALID_AUTH_HEADER_FORMAT,
	INVALID_TOKEN,
	TOKEN_NOT_FOUND,
} from '@/services/token/token.constants';
import { ITokenService } from '@/services/token/token.service.interface';
import { TYPES } from '@/types';

@injectable()
export class TokenService implements ITokenService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
	) {}

	public generateToken<T>(data: T, expirationMinutes: number) {
		return jwt.sign(
			{
				exp: Math.floor(Date.now() / 1000) + expirationMinutes * 60,
				data,
			},
			this.configService.get('JWT_SECRET'),
		);
	}

	public async verifyToken<T>(token: string) {
		return new Promise<T>((resolve, reject) => {
			jwt.verify(token, this.configService.get('JWT_SECRET'), (error, data) => {
				if (error) {
					reject(new Error(INVALID_TOKEN));
				} else {
					resolve(data as T);
				}
			});
		});
	}

	public extractTokenFromHeader(req: Request) {
		const authorizationHeader =
			req.headers['authorization'] || req.headers['Authorization'];

		if (!authorizationHeader || typeof authorizationHeader !== 'string') {
			throw new Error(AUTH_HEADER_NOT_FOUND);
		}

		const parts = authorizationHeader.split(' ');

		if (parts.length !== 2 || parts[0].toLowerCase() !== 'bearer') {
			throw new Error(INVALID_AUTH_HEADER_FORMAT);
		}

		return parts[1];
	}

	public extractTokenFromCookie(req: Request) {
		if (!req.cookies) {
			throw new Error(COOKIES_NOT_FOUND);
		}

		const token = req.cookies['token'];

		if (!token) {
			throw new Error(TOKEN_NOT_FOUND);
		}

		return token;
	}
}
