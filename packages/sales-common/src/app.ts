import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginInlineTraceDisabled } from '@apollo/server/plugin/disabled';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import bodyParser from 'body-parser';
import express from 'express';
import { inject, injectable } from 'inversify';

import { IConfigService, ILoggerService, ISchema, TYPES } from '@/common';
import { IDatabaseService } from '@/integrations';

@injectable()
export class App {
  private readonly app: express.Application;
  private readonly port: number;

  constructor(
    @inject(TYPES.LoggerService) private readonly loggerService: ILoggerService,
    @inject(TYPES.ConfigService) private readonly configService: IConfigService,
    @inject(TYPES.DatabaseService)
    private readonly databaseService: IDatabaseService,
    @inject(TYPES.BaseSchema) private readonly baseSchema: ISchema,
    @inject(TYPES.ContractorSchema) private readonly contractorSchema: ISchema,
    @inject(TYPES.EntitySchema) private readonly entitySchema: ISchema,
  ) {
    this.app = express();
    this.port = parseInt(this.configService.get('PORT'), 10);
  }

  private useMiddlewares() {
    this.app.use(bodyParser.json({ limit: '50mb' }));
    this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  }

  private buildSchema() {
    const mergedTypeDefs = mergeTypeDefs([
      this.baseSchema.getTypeDefs(),
      this.contractorSchema.getTypeDefs(),
      this.entitySchema.getTypeDefs(),
    ]);

    const mergedResolvers = mergeResolvers([
      this.baseSchema.getResolvers(),
      this.contractorSchema.getResolvers(),
      this.entitySchema.getResolvers(),
    ]);

    return buildSubgraphSchema({
      typeDefs: [mergedTypeDefs],
      resolvers: mergedResolvers as any,
    });
  }

  private async useApolloServer() {
    const server = new ApolloServer({
      schema: this.buildSchema(),
      plugins: [ApolloServerPluginInlineTraceDisabled()],
    });

    await server.start();

    this.app.use(
      '/',
      expressMiddleware(server, {
        context: async ({ req }) => ({ user: req.headers['user'] }),
      }),
    );
  }

  public async init() {
    try {
      await this.databaseService.connect();
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
