import axios from 'axios';
import { Response } from 'express';
import { inject, injectable } from 'inversify';

import { IConfigService } from '@/config/config.service.interface';
import { ILoggerService } from '@/logger/logger.service.interface';
import { ITokenService } from '@/services/token/token.service.interface';
import { GROUP_NOT_FOUND } from '@/strategies/next-cloud/next-cloud.constants';
import { INextCloudService } from '@/strategies/next-cloud/next-cloud.service.interface';
import { TYPES } from '@/types';

@injectable()
export class NextCloudService implements INextCloudService {
	constructor(
		@inject(TYPES.ConfigService) private readonly configService: IConfigService,
		@inject(TYPES.TokenService) private readonly tokenService: ITokenService,
		@inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
	) {}

	public async callback(req: any, res: Response) {
		try {
			const URL = `${this.configService.get('NEXTCLOUD_DOMAIN')}/ocs/v2.php/cloud/user?format=json`;

			const { data } = await axios.get<{
				ocs: {
					data: { displayname: string; email: string; groups: string[] };
				};
			}>(URL, {
				headers: { Authorization: `Bearer ${req.user.accessToken}` },
			});

			const groups = ['Директора', 'ОП'];

			if (!groups.some((group) => data.ocs.data.groups.includes(group))) {
				throw new Error(GROUP_NOT_FOUND);
			}

			const token = this.tokenService.generateToken(
				{ full_name: data.ocs.data.displayname, email: data.ocs.data.email },
				5,
			);

			res.redirect(
				`${this.configService.get('SALES_CLIENT_DOMAIN')}/sign-in/callback/${token}`,
			);
		} catch (error) {
			this.loggerService.error(error);
			res.redirect(`${this.configService.get('SALES_CLIENT_DOMAIN')}/sign-in`);
		}
	}
}
