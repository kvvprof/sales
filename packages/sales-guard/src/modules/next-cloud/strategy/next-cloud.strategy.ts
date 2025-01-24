import { inject, injectable } from 'inversify';
import passport, { Profile } from 'passport';
import OAuth2Strategy, { VerifyCallback } from 'passport-oauth2';

import { IConfigService, TYPES, IStrategy } from '@/common';

@injectable()
export class NextCloudStrategy implements IStrategy {
  constructor(
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
  ) {}

  public init() {
    passport.use(
      new OAuth2Strategy(
        {
          authorizationURL: `${this.configService.get('NEXTCLOUD_DOMAIN')}/index.php/apps/oauth2/authorize`,
          tokenURL: `${this.configService.get('NEXTCLOUD_DOMAIN')}/index.php/apps/oauth2/api/v1/token`,
          clientID: this.configService.get('NEXTCLOUD_CLIENT_ID'),
          clientSecret: this.configService.get('NEXTCLOUD_CLIENT_SECRET'),
          callbackURL: this.configService.get('NEXTCLOUD_CALLBACK_URL'),
        },
        (
          accessToken: string,
          refreshToken: string,
          profile: Profile,
          done: VerifyCallback,
        ) => {
          done(null, { accessToken, refreshToken, profile });
        },
      ),
    );
  }
}
