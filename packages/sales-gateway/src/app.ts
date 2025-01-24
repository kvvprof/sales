import { ApolloGateway, RemoteGraphQLDataSource } from '@apollo/gateway';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import bodyParser from 'body-parser';
import express from 'express';
import { inject, injectable } from 'inversify';

import { readFileSync } from 'fs';

import { IConfigService, TYPES, ILoggerService } from '@/common';

@injectable()
export class App {
  private readonly app: express.Application;
  private readonly port: number;

  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
  ) {
    this.app = express();
    this.port = parseInt(this.configService.get('PORT'), 10);
  }

  private useMiddlewares() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  }

  private getSupergraphSdl() {
    const env = this.configService.get('ENV');

    const localUrls = [
      'http://localhost:9001',
      'http://localhost:9002',
      'http://localhost:9003',
    ];

    const productionUrls = [
      'http://sales-main:9001',
      'http://sales-common:9002',
      'http://sales-pricing:9003',
    ];

    let supergraphSdl = readFileSync('./supergraph.gql').toString();

    if (env === 'DEVELOPMENT') {
      return supergraphSdl;
    }

    localUrls.forEach((url, index) => {
      supergraphSdl = supergraphSdl.replace(
        new RegExp(url, 'g'),
        productionUrls[index],
      );
    });

    return supergraphSdl;
  }

  private async useApolloServer() {
    const logger = this.loggerService;

    const gateway = new ApolloGateway({
      supergraphSdl: this.getSupergraphSdl(),
      buildService({ url }) {
        return new RemoteGraphQLDataSource({
          url,
          willSendRequest({ request, context }) {
            if (context.user) {
              request.http?.headers.set('user', context.user);
            }
          },
          async didReceiveResponse({ request, response, context: { user } }) {
            if (response.errors?.length) {
              logger.error(response.errors[0].message, {
                request,
                response,
                user: user ? JSON.parse(decodeURIComponent(user)) : undefined,
              });
            } else {
              logger.info('Successful GraphQL request.', {
                request,
                user: user ? JSON.parse(decodeURIComponent(user)) : undefined,
              });
            }

            return response;
          },
        });
      },
    });

    const server = new ApolloServer({
      gateway,
      introspection: true,
      plugins: [ApolloServerPluginInlineTraceDisabled()],
    });

    await server.start();

    this.app.use(
      '/sales-gateway',
      expressMiddleware(server, {
        context: async ({ req }) => ({ user: req.headers['user'] }),
      }),
    );
  }

  public async init() {
    try {
      this.useMiddlewares();
      await this.useApolloServer();
      this.app.listen(this.port, () => {
        this.loggerService.info(`Server is running on port ${this.port}.`);
      });
    } catch (error) {
      this.loggerService.error(error);
    }
  }
}
