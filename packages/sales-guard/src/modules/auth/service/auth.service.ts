import axios from 'axios';
import { Request } from 'express';
import { inject, injectable } from 'inversify';

import { BasicUser, CreateUserInput, UserRole } from '@/__types__/graphql';
import { IConfigService, TYPES } from '@/common';
import { CREATE_STAFF } from '@/modules/auth/constants/auth.gql';
import { IAuthService } from '@/modules/auth/service/auth.service.interface';
import { INextCloudUser } from '@/modules/next-cloud/interfaces/next-cloud-user.interface';
import { ITokenService } from '@/modules/token/service/token.service.interface';

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
      fullName: full_name,
      email,
      isManager: true,
      isStaff: true,
      userRole: UserRole.SalesEmployee,
    };

    const { data } = await axios.post(
      `${this.configService.get('SALES_GATEWAY_DOMAIN')}/sales-gateway`,
      {
        query: CREATE_STAFF,
        variables: {
          input: createUserInput,
        },
      },
    );

    const token = this.tokenService.generateToken<BasicUser>(
      data.data.createStaff,
      12 * 60,
    );

    return { token, data };
  }
}
