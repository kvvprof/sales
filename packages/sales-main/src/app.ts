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
    @inject(TYPES.ClientSchema) private readonly clientSchema: ISchema,
    @inject(TYPES.ObjectSchema) private readonly objectSchema: ISchema,
    @inject(TYPES.ProductSchema) private readonly productSchema: ISchema,
    @inject(TYPES.ClientContractSchema)
    private readonly clientContractSchema: ISchema,
    @inject(TYPES.AgencySchema) private readonly agencySchema: ISchema,
    @inject(TYPES.AgencyContractSchema)
    private readonly agencyContractSchema: ISchema,
    @inject(TYPES.RealEstateAgentSchema)
    private readonly realEstateAgentSchema: ISchema,
    @inject(TYPES.UserSchema) private readonly userSchema: ISchema,
    @inject(TYPES.BankSchema) private readonly bankSchema: ISchema,
    @inject(TYPES.ScheduledPaymentSchema)
    private readonly scheduledPaymentSchema: ISchema,
    @inject(TYPES.ActualPaymentSchema)
    private readonly actualPaymentSchema: ISchema,
    @inject(TYPES.EntitySchema)
    private readonly entitySchema: ISchema,
    @inject(TYPES.EscrowAccountHistorySchema)
    private readonly escrowAccountHistorySchema: ISchema,
    @inject(TYPES.RealEstateAgencyActSchema)
    private readonly realEstateAgencyActSchema: ISchema,
    @inject(TYPES.SubsidySchema)
    private readonly subsidySchema: ISchema,
    @inject(TYPES.AssignmentSchema)
    private readonly assignmentSchema: ISchema,
    @inject(TYPES.RealEstateAgencyActCandidateSchema)
    private readonly realEstateAgencyActCandidateSchema: ISchema,
    @inject(TYPES.TransferActSchema)
    private readonly transferActSchema: ISchema,
    @inject(TYPES.RepresentativeSchema)
    private readonly representativeSchema: ISchema,
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
      this.clientSchema.getTypeDefs(),
      this.productSchema.getTypeDefs(),
      this.objectSchema.getTypeDefs(),
      this.clientContractSchema.getTypeDefs(),
      this.agencySchema.getTypeDefs(),
      this.agencyContractSchema.getTypeDefs(),
      this.userSchema.getTypeDefs(),
      this.realEstateAgentSchema.getTypeDefs(),
      this.bankSchema.getTypeDefs(),
      this.scheduledPaymentSchema.getTypeDefs(),
      this.actualPaymentSchema.getTypeDefs(),
      this.entitySchema.getTypeDefs(),
      this.escrowAccountHistorySchema.getTypeDefs(),
      this.realEstateAgencyActSchema.getTypeDefs(),
      this.subsidySchema.getTypeDefs(),
      this.assignmentSchema.getTypeDefs(),
      this.realEstateAgencyActCandidateSchema.getTypeDefs(),
      this.transferActSchema.getTypeDefs(),
      this.representativeSchema.getTypeDefs(),
    ]);

    const mergedResolvers = mergeResolvers([
      this.baseSchema.getResolvers(),
      this.clientSchema.getResolvers(),
      this.productSchema.getResolvers(),
      this.objectSchema.getResolvers(),
      this.clientContractSchema.getResolvers(),
      this.agencySchema.getResolvers(),
      this.agencyContractSchema.getResolvers(),
      this.userSchema.getResolvers(),
      this.realEstateAgentSchema.getResolvers(),
      this.bankSchema.getResolvers(),
      this.scheduledPaymentSchema.getResolvers(),
      this.actualPaymentSchema.getResolvers(),
      this.entitySchema.getResolvers(),
      this.escrowAccountHistorySchema.getResolvers(),
      this.realEstateAgencyActSchema.getResolvers(),
      this.subsidySchema.getResolvers(),
      this.assignmentSchema.getResolvers(),
      this.realEstateAgencyActCandidateSchema.getResolvers(),
      this.transferActSchema.getResolvers(),
      this.representativeSchema.getResolvers(),
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
