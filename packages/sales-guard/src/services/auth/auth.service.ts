import axios from 'axios';
import { Request } from 'express';
import { inject, injectable } from 'inversify';

import {
	BasicUser,
	CreateUserInput,
	CreateUserInAuthMutation,
	UserRole,
} from '@/__types__/graphql';
import { IConfigService } from '@/config/config.service.interface';
import { CREATE_USER } from '@/services/auth/auth.gql';
import { IAuthService } from '@/services/auth/auth.service.interface';
import { ITokenService } from '@/services/token/token.service.interface';
import { INextCloudUser } from '@/strategies/next-cloud/next-cloud-user.interface';
import { TYPES } from '@/types';

@injectable()
export class AuthService implements IAuthService {
	constructor(
		@inject(TYPES.TokenService) private readonly tokenService: ITokenService,
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
	) {}

	public async signIn(req: Request) {
		const nextCloudToken = this.tokenService.extractTokenFromHeader(req);

		const {
			data: { full_name, email },
		} = await this.tokenService.verifyToken<INextCloudUser>(nextCloudToken);

		const createUserInput: CreateUserInput = {
			full_name,
			email,
			is_manager: false,
			user_role: UserRole.SalesEmployee,
		};

		const { data } = await axios.post<{ data: CreateUserInAuthMutation }>(
			this.configService.get('SALES_GATEWAY_URL'),
			{
				query: CREATE_USER,
				variables: {
					input: createUserInput,
				},
			},
		);

		const token = this.tokenService.generateToken<BasicUser>(
			data.data.createUser,
			12 * 60,
		);

		return { token, data };
	}
}
